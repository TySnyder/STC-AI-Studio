'use client';

import { useState, useRef } from 'react';
import { Upload, Video, Loader2, PlayCircle } from 'lucide-react';
import { GoogleGenAI } from '@google/genai';

declare global {
  interface Window {
    aistudio?: {
      hasSelectedApiKey: () => Promise<boolean>;
      openSelectKey: () => Promise<void>;
    };
  }
}

export default function VisualizeSerenity() {
  const [image, setImage] = useState<string | null>(null);
  const [mimeType, setMimeType] = useState<string>('');
  const [isGenerating, setIsGenerating] = useState(false);
  const [videoUrl, setVideoUrl] = useState<string | null>(null);
  const [status, setStatus] = useState<string>('');
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setMimeType(file.type);
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result as string);
        setVideoUrl(null);
      };
      reader.readAsDataURL(file);
    }
  };

  const generateVideo = async () => {
    if (!image) return;

    try {
      setIsGenerating(true);
      setStatus('Checking API Key...');

      if (window.aistudio) {
        const hasKey = await window.aistudio.hasSelectedApiKey();
        if (!hasKey) {
          await window.aistudio.openSelectKey();
        }
      }

      setStatus('Initializing video generation...');
      
      const apiKey = process.env.NEXT_PUBLIC_GEMINI_API_KEY || process.env.API_KEY;
      if (!apiKey) {
         throw new Error("API key not found. Please select a key.");
      }
      const ai = new GoogleGenAI({ apiKey });

      const base64Data = image.split(',')[1];

      setStatus('Generating video (this may take a few minutes)...');
      
      let operation = await ai.models.generateVideos({
        model: 'veo-3.1-fast-generate-preview',
        prompt: 'Transform this scene into a serene, calming, sunlit sanctuary with gentle nature elements. Slow, peaceful motion.',
        image: {
          imageBytes: base64Data,
          mimeType: mimeType,
        },
        config: {
          numberOfVideos: 1,
          resolution: '720p',
          aspectRatio: '16:9'
        }
      });

      while (!operation.done) {
        setStatus('Processing video... Please wait.');
        await new Promise(resolve => setTimeout(resolve, 10000));
        operation = await ai.operations.getVideosOperation({ operation: operation });
      }

      const downloadLink = operation.response?.generatedVideos?.[0]?.video?.uri;
      
      if (downloadLink) {
        setStatus('Fetching video...');
        const response = await fetch(downloadLink, {
          method: 'GET',
          headers: {
            'x-goog-api-key': apiKey,
          },
        });
        
        if (response.ok) {
          const blob = await response.blob();
          const url = URL.createObjectURL(blob);
          setVideoUrl(url);
          setStatus('');
        } else {
          throw new Error('Failed to fetch video content');
        }
      } else {
        throw new Error('No video URL returned');
      }

    } catch (error: any) {
      console.error(error);
      if (error.message?.includes("Requested entity was not found") && window.aistudio) {
          setStatus('API Key error. Please try selecting your key again.');
          await window.aistudio.openSelectKey();
      } else {
          setStatus(`Error: ${error.message || 'Failed to generate video'}`);
      }
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <section className="py-24 bg-stone-100 border-y border-stone-200">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-serif text-4xl lg:text-5xl text-emerald-950 mb-6">Visualize Your Serenity</h2>
          <p className="text-lg text-stone-600">
            Upload a photo of your current environment, and our AI will transform it into a vision of peace and recovery. See the calm that awaits you.
          </p>
        </div>

        <div className="bg-white rounded-3xl shadow-sm border border-stone-200 p-8 lg:p-12">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            
            <div className="flex flex-col gap-6">
              <div 
                className="border-2 border-dashed border-stone-300 rounded-2xl p-8 text-center hover:bg-stone-50 transition-colors cursor-pointer"
                onClick={() => fileInputRef.current?.click()}
              >
                {image ? (
                  <div className="relative aspect-video rounded-xl overflow-hidden">
                    <img src={image} alt="Uploaded" className="object-cover w-full h-full" />
                    <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
                      <span className="text-white font-medium flex items-center gap-2">
                        <Upload className="w-5 h-5" /> Change Photo
                      </span>
                    </div>
                  </div>
                ) : (
                  <div className="py-12 flex flex-col items-center gap-4">
                    <div className="w-16 h-16 bg-emerald-50 text-emerald-900 rounded-full flex items-center justify-center">
                      <Upload className="w-8 h-8" />
                    </div>
                    <div>
                      <p className="text-emerald-950 font-medium mb-1">Click to upload a photo</p>
                      <p className="text-stone-500 text-sm">PNG, JPG up to 5MB</p>
                    </div>
                  </div>
                )}
                <input 
                  type="file" 
                  ref={fileInputRef} 
                  onChange={handleImageUpload} 
                  accept="image/*" 
                  className="hidden" 
                />
              </div>

              <button 
                onClick={generateVideo}
                disabled={!image || isGenerating}
                className="w-full bg-emerald-950 text-white py-4 rounded-xl font-medium hover:bg-emerald-900 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                {isGenerating ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    {status || 'Generating...'}
                  </>
                ) : (
                  <>
                    <Video className="w-5 h-5" />
                    Generate Serene Video
                  </>
                )}
              </button>
              
              {status && !isGenerating && (
                <p className="text-sm text-center text-red-600 bg-red-50 p-3 rounded-lg">{status}</p>
              )}
            </div>

            <div className="bg-stone-50 rounded-2xl aspect-video flex items-center justify-center border border-stone-200 overflow-hidden relative">
              {videoUrl ? (
                <video 
                  src={videoUrl} 
                  controls 
                  autoPlay 
                  loop 
                  className="w-full h-full object-cover"
                />
              ) : isGenerating ? (
                <div className="flex flex-col items-center gap-4 text-stone-500">
                  <Loader2 className="w-10 h-10 animate-spin text-emerald-900" />
                  <p className="font-medium animate-pulse">{status}</p>
                </div>
              ) : (
                <div className="flex flex-col items-center gap-3 text-stone-400">
                  <PlayCircle className="w-12 h-12 opacity-50" />
                  <p>Your video will appear here</p>
                </div>
              )}
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

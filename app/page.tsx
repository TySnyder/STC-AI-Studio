import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Credibility from '@/components/Credibility';
import Programs from '@/components/Programs';
import Approach from '@/components/Approach';
import Outcomes from '@/components/Outcomes';
import VisualizeSerenity from '@/components/VisualizeSerenity';
import Footer from '@/components/Footer';
import ChatWidget from '@/components/ChatWidget';
import { HeroSection } from '@/components/ui/hero-section-6';

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col">
      <Header />
      <Hero />
      <Credibility />
      <Programs />
      <Approach />
      <Outcomes />
      <VisualizeSerenity />
      <HeroSection />
      <Footer />
      <ChatWidget />
    </main>
  );
}

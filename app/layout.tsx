import type {Metadata} from 'next';
import { Inter, Playfair_Display } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'], variable: '--font-sans' });
const playfair = Playfair_Display({ subsets: ['latin'], variable: '--font-serif' });

export const metadata: Metadata = {
  title: 'Serenity Treatment Center',
  description: 'Compassionate, human-first addiction and mental health treatment.',
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable} scroll-smooth`}>
      <body className="font-sans bg-stone-50 text-stone-800 antialiased selection:bg-emerald-900 selection:text-white" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}

import './globals.css';
import type { Metadata } from 'next';
import { JetBrains_Mono } from 'next/font/google';
import AnimatedBackground from '@/components/ui/animated-background';
import Spotlight from '@/components/ui/spotlight';
import Meteors from '@/components/ui/meteors';

const jetbrainsMono = JetBrains_Mono({ 
  subsets: ['latin'],
  variable: '--font-jetbrains-mono',
  weight: ['300', '400', '500', '600', '700'],
});

export const metadata: Metadata = {
  title: 'Yevhen MeInychenko - Product Manager',
  description: 'Product Manager & Product Owner with 3+ years of experience delivering impactful web & native applications',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className={`${jetbrainsMono.variable} font-mono bg-[#0A0A0A] text-[#F0F0F0]`}>
        <AnimatedBackground />
        <Spotlight />
        <Meteors number={15} />
        {children}
      </body>
    </html>
  );
}
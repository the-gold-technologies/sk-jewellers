import type { Metadata } from 'next';
import { Playfair_Display, Plus_Jakarta_Sans } from 'next/font/google';
import './globals.css';

const playfair = Playfair_Display({
  variable: '--font-serif',
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800', '900'],
});

const jakarta = Plus_Jakarta_Sans({
  variable: '--font-sans',
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
});

export const metadata: Metadata = {
  title: 'SK JEWELLERS | Fine Luxury Jewellery & Sacred Silverware',
  description:
    'Exquisite Gold, Silver, Electroplated luxury jewellery, spiritual idols, and authentic puja utensils. Certified BIS Hallmarked 100% genuine craftsmanship.',
  keywords: [
    'Gold Jewellery',
    'Silver Jewellery',
    'Electroplated Jewellery',
    'Silver Utensils',
    'Sacred Idols',
    'Rings',
    'Anklets',
    'Earrings',
    'Necklaces',
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${jakarta.variable} scroll-smooth antialiased`}
    >
      <body className="min-h-screen flex flex-col bg-[#FBF9F5] text-[#1C1917] selection:bg-[#C59B27]/20 selection:text-[#8C6411]">
        {children}
      </body>
    </html>
  );
}

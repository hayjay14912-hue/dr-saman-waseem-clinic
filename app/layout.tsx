import type { Metadata } from 'next';
import { DM_Mono, DM_Sans, Fraunces } from 'next/font/google';
import './globals.css';

const display = Fraunces({ subsets: ['latin'], variable: '--font-display', weight: ['400', '500', '600'], style: ['normal', 'italic'] });
const sans = DM_Sans({ subsets: ['latin'], variable: '--font-sans', weight: ['400', '500', '600', '700'] });
const mono = DM_Mono({ subsets: ['latin'], variable: '--font-mono', weight: ['400', '500'] });

export const metadata: Metadata = {
  metadataBase: new URL('https://dermabliss.pk'),
  title: { default: 'DermaBliss | Dr. Saman Waseem, Islamabad', template: '%s | DermaBliss' },
  description: 'Personalised aesthetic medicine and skin rejuvenation by Dr. Saman Waseem in Islamabad.',
  openGraph: { type: 'website', title: 'DermaBliss by Dr. Saman Waseem', description: 'A personal approach to skin health and aesthetic medicine in Islamabad.', images: ['/clinic-hero.png'] },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="en"><body className={`${display.variable} ${sans.variable} ${mono.variable}`}>{children}</body></html>;
}

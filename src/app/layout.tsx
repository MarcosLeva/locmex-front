import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Toaster } from '@/components/ui/toaster';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'LocMex',
  description: 'LocMex',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='es-MX'>
      <body className={`${inter.className} dark`}>
        <main>{children}</main>
        <Toaster />
      </body>
    </html>
  );
}

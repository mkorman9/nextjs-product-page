import type {Metadata, Viewport} from 'next';
import React from 'react';
import TopBar from '@/components/TopBar/TopBar';
import Footer from '@/components/Footer/Footer';
import './global.css';

export const metadata: Metadata = {
  title: 'Blendify',
  description: 'You send it, we blend it!'
};

export const viewport: Viewport = {
  themeColor: '#22c55e'
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-gradient-to-br from-green-500 to-green-700">
        <TopBar />
        <div className="flex min-h-[100vh]">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}

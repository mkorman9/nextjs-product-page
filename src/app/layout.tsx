import type {Metadata, Viewport} from 'next';
import React from 'react';
import TopBar from '@/components/TopBar/TopBar';
import './global.css';

export const metadata: Metadata = {
  title: 'Blendify'
};

export const viewport: Viewport = {
  themeColor: '#22c55e'
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <TopBar />
        {children}
      </body>
    </html>
  );
}

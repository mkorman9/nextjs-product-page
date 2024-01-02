import type {Metadata} from 'next';
import React from 'react';
import TopBar from '@/components/TopBar/TopBar';
import './global.css';

export const metadata: Metadata = {
  title: 'Blendify'
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

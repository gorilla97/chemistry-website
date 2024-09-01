import React from 'react';
import './globals.css';
import { Roboto } from 'next/font/google';

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['400', '700'], // Adjust weights as needed
});

export const metadata = {
  title: 'My Chemistry-Themed Portfolio',
  description: 'Showcasing my projects and interests.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={roboto.className}>{children}</body>
    </html>
  );
}
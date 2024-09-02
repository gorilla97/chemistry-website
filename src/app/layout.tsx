import React from 'react';
import './globals.css';
import Navbar from '../components/navbar';  // Import the Navbar component
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
      <body className={roboto.className}>
        <Navbar /> {/* Include the Navbar component */}
        <div className="page-container"> {/* Apply consistent page container styling */}
          {children}
        </div>
      </body>
    </html>
  );
}
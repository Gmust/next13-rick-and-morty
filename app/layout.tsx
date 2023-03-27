import React from 'react';
import './globals.css';
import '../styles/typography.scss';
import { Header } from '@components/layout';

interface RootLayoutProps {
  children: React.ReactNode;
}

const RootLayout: React.FC<RootLayoutProps> = ({ children }) => {
  return (
    <html lang='en'>
    <head>
      <title>Rick and Morty app made with nextjs 13 </title>
    </head>
    <body className='bg-gray-800 text-amber-50'>
    <Header />
    {children}
    </body>
    </html>
  );
};

export default RootLayout;
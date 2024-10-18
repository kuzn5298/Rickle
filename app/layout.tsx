import { PropsWithChildren } from 'react';
import type { Metadata } from 'next';
import { Header } from '@/components/app';

import '@/styles/index.css';

import { Sigmar, Roboto } from 'next/font/google';

const sigmar = Sigmar({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-sigmar',
});

const roboto = Roboto({
  weight: ['400', '500'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-roboto',
});

export const metadata: Metadata = {
  title: 'Rickle',
};

const RootLayout: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <html
      lang='en'
      className={`${sigmar.variable} ${roboto.variable} font-sans`}
    >
      <body>
        <div id='root' className='flex flex-col'>
          <Header />
          <main id='scroll-container' className='flex-1 overflow-auto'>
            {children}
          </main>
        </div>
      </body>
    </html>
  );
};

export default RootLayout;

import '../styles/globals.css'

import type { AppProps } from 'next/app'
import { useEffect, useState } from 'react';

const MyApp = ({ Component, pageProps }: AppProps) => {

  const [clientWindow, set_clientWindow] = useState(typeof window !== 'undefined' ? true : false)

  if (typeof window !== 'undefined') {
    console.log('hey window', window)

    let vh = window.innerHeight * 0.01
      document.documentElement.style.setProperty('--vh', `${vh}px`)

      let vw = window.innerWidth * 0.01
      document.documentElement.style.setProperty('--vw', `${vw}px`)


    window.addEventListener('resize', () => {
      // We execute the same script as before
      let vh = window.innerHeight * 0.01
      document.documentElement.style.setProperty('--vh', `${vh}px`)

      let vw = window.innerWidth * 0.01
      document.documentElement.style.setProperty('--vw', `${vw}px`)
    });
  }
  
  return (
      <Component {...pageProps} />
  );
};

export default MyApp;
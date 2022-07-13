import '../styles/globals.css'

import type { AppProps } from 'next/app'

const MyApp = ({ Component, pageProps }: AppProps) => {

  if (typeof window !== "undefined") {
    let vh = document.documentElement.clientHeight * 0.01;
    let vw = document.documentElement.clientWidth * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
    document.documentElement.style.setProperty('--vw', `${vw}px`);
    console.log(vh, 'vh', vw, 'vw')
  }
  
  return (
    <>
      <Component {...pageProps} />
    </>
  );
};

export default MyApp;
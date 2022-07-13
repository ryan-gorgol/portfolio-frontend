import '../styles/globals.css'

import type { AppProps } from 'next/app'

const MyApp = ({ Component, pageProps }: AppProps) => {

  if (typeof window !== "undefined") {
    let vh = document.body.clientWidth * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
    console.log(vh, 'vh')
  }
  
  return (
    <>
      <Component {...pageProps} />
    </>
  );
};

export default MyApp;
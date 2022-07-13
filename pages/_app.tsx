import '../styles/globals.css'

import type { AppProps } from 'next/app'

const MyApp = ({ Component, pageProps }: AppProps) => {

// calculate view height and set --vh css custom property with result
  if (typeof window !== "undefined") {
    let vh = document.documentElement.clientHeight * 0.01;
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
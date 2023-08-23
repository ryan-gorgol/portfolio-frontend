import '../styles/globals.css'
import '../styles/normalize.css'

import type { AppProps } from 'next/app'

const MyApp = ({ Component, pageProps }: AppProps) => {

  if (typeof window !== 'undefined') {
    console.log('hey window', window)

    // store 1% of the viewport height in the --vh custom property
   
    let vh = window.innerHeight * 0.01
    document.documentElement.style.setProperty('--vh', `${vh}px`)

    // store 1% of the viewport width in the --vw custom property
    let vw = window.innerWidth * 0.01
    document.documentElement.style.setProperty('--vw', `${vw}px`)

    //Listen for changes to the viewport and update --vh and --vw
    window.addEventListener('resize', () => {
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
import styled from 'styled-components'
import { useEffect, useState } from 'react'

// components

import Head from 'next/head'
import Header from '../components/Header'
import Menu from '../components/Menu'

// sections

import HomeSection from '../components/sections/HomeSection'
import PortfolioSection from '../components/sections/PortfolioSection'
import ContactSection from '../components/sections/ContactSection'
import InfoSection from '../components/sections/InfoSection'
import Circle from '../components/Circle'
import { motion } from 'framer-motion'
import { fetchAPI } from '../lib/api'

interface Props {
  homepage: any,
}

const Home = ({ homepage }: Props) => {

  const [ menuSelection, setMenuSelection ] = useState('home')
  const [ripple, setRipple] = useState(true)

  const height = () => {
    return window.innerHeight 
        || document.documentElement.clientHeight 
        || document.body.clientHeight 
        || 0;
  }
  
  useEffect(() => console.log(height()), [])


  return (
    <>
      <Head>
        <title>{homepage.attributes.title}</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"/>
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>
        <link rel="manifest" href="/site.webmanifest" />
        
      </Head>

      <S_Main>
        <LoadingTitleWrapper
          initial={{ opacity: 1 }}
          animate={{ opacity: 0 }}
          transition={{ duration: 2 }}
        >
          <LoadingTitle
            initial={{ scale: 1.0 }}
            animate={{ scale: 0.98 }}
            transition={{ yoyo: 3, duration: 0.45, ease: 'easeInOut' }}
          >
            <b>{homepage.attributes.title}</b> <em> portfolio </em>
          </LoadingTitle>
        </LoadingTitleWrapper>
        <Loading
          initial={{ opacity: 0 }}
          animate={{ opacity: [0,0,1] }}
          transition={{ duration: 3.5, ease: 'easeInOut' }}
        >
          <S_Box onClick={() => setRipple(!ripple)}>
            <Header title={homepage.attributes.title}/>
              <Circle ripple={ripple}/>
              <Menu 
                clickHome={() => setMenuSelection('home')}
                clickPortfolio={() => setMenuSelection('portfolio')}
                clickInfo={() => setMenuSelection('info')}
                clickContact={() => setMenuSelection('contact')}
              />
              <S_Content>
                {(() => {
                    switch (menuSelection) {
                      case 'home':
                        return <HomeSection />
                      case 'portfolio':
                        return <PortfolioSection />
                      case 'info':
                        return <InfoSection />
                      case 'contact':
                        return <ContactSection />
                    }
                  })()
                }
              </S_Content>
            
            </S_Box>
        </Loading >
      </S_Main>
    </>
  )
}

export default Home

export async function getStaticProps() {
  // Run API calls in parallel
  const [homepageRes] = await Promise.all([
    fetchAPI("/homepage", {
      populate: {
        homepage: "*",
      },
    }),
  ]);

  return {
    props: {
      homepage: homepageRes.data,
    },
    revalidate: 1,
  };
}

const S_Main = styled.main`
  width: 100vw;
  height: calc(var(--vh) * 100);
  overflow-x: hidden; 
  overflow-y: auto;
  background: var(--black);
  color: var(--white);
  display: flex;
  justify-content: center;
  align-items: center;
`

const LoadingTitleWrapper = styled(motion.div)`
  width: 100%;
  height: 100%;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
`

const Loading = styled(motion.div)`
  width: 100%;
  height: 100%;
  background: var(--black);
  display: flex;
  justify-content: center;
  align-items: center;
`

const LoadingTitle = styled(motion.div)`
  font-size: 2rem;
  position: absolute;
  z-index: 1000;
`

const S_Box = styled.div`
  width: calc(100vw - 2rem);
  height: calc(100% - 4rem);
  border: 1px solid var(--white);
  position: relative;
  overflow: hidden;
` 

const S_Content = styled.div`
  width: 100%;
  height: 55%;
  z-index: 100;
`





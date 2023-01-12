import styled from 'styled-components'
import { useState } from 'react'
import { motion } from 'framer-motion'

// components

import Head from 'next/head'
import Header from '../components/Header'
import Menu from '../components/Menu'
import Circle from '../components/Circle'

type menuItem = {
  title: string,
  caption: string,
  href: string,
}

export type menuItems = menuItem[]


const Home = () => {

  const [ripple, setRipple] = useState<boolean>(true);

  const menuItems: menuItems = [
    {
      title: 'CounterService',
      caption: 'WebApp',
      href: '/counterservice'
    },
    {
      title: 'Formation',
      caption: 'Open Source',
      href: '/formation'
    },
    {
      title: 'GitHub',
      caption: 'ryan-gorgol',
      href: '/github'
    }
  ]

  return (
    <>
      <Head>
        <title>{'ryan gorgol'}</title>
        <meta name="description" content="ryan gorgol portfolio page" />
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
            <b>{'Ryan Gorgol'}</b> <em> portfolio </em>
          </LoadingTitle>
        </LoadingTitleWrapper>

        <Loading
          initial={{ opacity: 0 }}
          animate={{ opacity: [0,0,1] }}
          transition={{ duration: 2.5, ease: 'easeInOut' }}
        >
          <S_Box onClick={() => setRipple(!ripple)}>
            <Header title={'Ryan Gorgol'} subtitle={'full stack portfolio'} />
            <Circle ripple={ripple} />
            <S_ContentWrap>
              <Menu menuItems={menuItems} />
            </S_ContentWrap>
          </S_Box>
        </Loading >
      </S_Main>
    </>
  )
}

export default Home

const S_Main = styled.main`
  width: 94vw;
  height: 90vh;
  padding: 1vh 1vw;
  margin: 3vh auto auto auto;
  overflow-x: hidden; 
  overflow-y: hidden;
  background: var(--black);
  color: var(--white);
  display: flex;
  justify-content: center;
  align-items: center;

  @media only screen and (max-width: 450px){
	  width: 88vw;
    height: 80vh;
    margin-top: 1rem;
  }
`

const S_Box = styled.div`
  width: 100%;
  height: 100%;
  border: 1px solid var(--white);
  position: relative;
  overflow: hidden;
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
  display: flex;
  justify-content: center;
  align-items: center;
`

const LoadingTitle = styled(motion.div)`
  font-size: 2rem;
  position: absolute;
  z-index: 1000;
`

const S_ContentWrap = styled.div`
  display: flex;

  @media only screen and (max-width: 750px){
	  flex-wrap: wrap;
  }
`

const S_Content = styled.div`
  width: 100%;
  height: 45%;
  z-index: 100;
`





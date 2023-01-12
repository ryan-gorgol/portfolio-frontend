import styled from 'styled-components'
import { useState } from 'react'
import { motion } from 'framer-motion'

// components

import Head from 'next/head'
import Header from '../components/Header'
import Menu from '../components/Menu'
import Circle from '../components/Circle'
import HomeContent from '../components/HomeContent'

type menuItem = {
  title: string,
  caption: string,
  href: string,
}

export type menuItems = menuItem[]


const Home = () => {

  const [ripple, setRipple] = useState<boolean>(true);

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
        <Loading
          initial={{ opacity: 0 }}
          animate={{ opacity: [0,0,1] }}
          transition={{ duration: 1.5, ease: 'easeInOut' }}
        >
          <S_Box onClick={() => setRipple(!ripple)}>
            <S_Content>
              <HomeContent ripple={ripple} />
            </S_Content>
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

const Loading = styled(motion.div)`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`

const S_Content = styled.div`
  width: 100%;
  height: 45%;
  z-index: 100;
`





import styled from 'styled-components'
import { useState } from 'react'
import { motion } from 'framer-motion'

// components

import Head from 'next/head'
import Page from '../components/Page'
import Header from '../components/Header'
import Circle from '../components/Circle'
import Menu from '../components/Menu'

// DATA
import { HeaderContent, menuItems } from '../data/data'


const Home = () => {

  const [ripple, setRipple] = useState<boolean>(true);
  const [headerContent, set_headerContent] = useState<HeaderContent>({
    title: 'Ryan Gorgol',
    subtitle: 'full stack developer',
    renderButton: false
  })

  const onChange = (newValue: HeaderContent) => {
   set_headerContent(newValue)
  }

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
      <Page>
        <Loading
          initial={{ opacity: 0 }}
          animate={{ opacity: [0,0,1] }}
          transition={{ duration: .75, ease: 'easeInOut' }}
        >
          <S_Box onClick={() => setRipple(!ripple)}>
            <S_Content>
              <Header
                title={headerContent.title}
                subtitle={headerContent.subtitle}
                renderButton={headerContent.renderButton}
              />
              <Menu
                menuItems={menuItems}
                onChange={(newValue) => onChange(newValue)}
              />
              <Circle ripple={ripple} />
            </S_Content>
          </S_Box>
        </Loading >
      </Page>
    </>
  )
}

export default Home

const S_Box = styled.div`
  width: 100%;
  height: 100%;
  border: 1px solid var(--white);
  border-radius: 2px;
  position: relative;
  overflow: hidden;
` 

const Loading = styled(motion.div)`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`

const S_Content = styled.div`
  width: 100%;
  height: 45%;
  z-index: 100;
`





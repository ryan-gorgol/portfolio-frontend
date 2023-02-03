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
import { HeaderContent, SnackContentType, content, Content, Contents, Buttons } from '../data/data'
import ItemContent from '../components/ItemContent'
import NavButtons from '../components/NavButtons'


const Home = () => {

  // DATA FOR RENDERING
  const [ripple, set_ripple] = useState<boolean>(false);
  const [isMenuOpen, set_isMenuOpen] = useState<boolean>(true)
  const [headerContent, set_headerContent] = useState<HeaderContent>({
    title: 'Ryan Gorgol',
    subtitle: 'full stack developer',
    renderButton: false
  })
  const [itemContent, set_itemContent] = useState<SnackContentType>({
    hook: 'This is the hook',
    bait: 'This is the bait'
  })
  const [buttons, set_buttons] = useState<Buttons>([])

  const menuItems = content.map(item => {
    return {
      "title": item.title,
      "caption": item.caption
    }
  })


  // UI INTERACTION MGMT
  const onChange = (newValue: HeaderContent) => {
    setTimeout(() => {
      set_headerContent(newValue)
    }, 1000)
  }

  const onMenuClick = (key: number) => {

    let newButtons = content[key].buttons.map((button) => {
      return {
        "title": button.title,
        "href": button.href
      }
    })

    set_ripple(true)
    set_itemContent({
      hook: content[key].hook,
      bait: content[key].bait,
    })
    set_buttons(newButtons)
    setTimeout(() => {
      set_isMenuOpen(false)
      set_ripple(false)
    }, 1000)
    
  }

  const onBackButtonClick = () => {
    set_isMenuOpen(true)
    set_headerContent({
      title: 'Ryan Gorgol',
      subtitle: 'full stack developer',
      renderButton: false
    })
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
          <S_Box
            isMenuOpen={isMenuOpen}
          >
            <S_Content>
              <Header
                title={headerContent.title}
                subtitle={headerContent.subtitle}
                renderButton={headerContent.renderButton}
                onClick={onBackButtonClick}
                isMenuOpen={isMenuOpen}
                ripple={ripple}
              />
                <Menu
                  menuItems={menuItems}
                  onChange={(newValue) => onChange(newValue)}
                  onClick={(key) => onMenuClick(key)}
                  isOpen={isMenuOpen}
              />
              {
                isMenuOpen
                  ? <></>
                  : <ItemContent
                      content={itemContent}
                    />
              }
              
               <NavButtons buttons={buttons} />
              
                <Circle
                  ripple={ripple}
                  isMenuOpen={isMenuOpen}
                  />
            </S_Content>
          </S_Box>
        </Loading >
      </Page>
    </>
  )
}

export default Home

const S_Box = styled.div<{
  isMenuOpen: boolean
}>`
  width: 100%;
  height: 100%;
  border: ${props => props.isMenuOpen ? '1px solid var(--white)' : 'none'};
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





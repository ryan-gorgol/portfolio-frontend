import styled from 'styled-components'
import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

// components

import Head from 'next/head'
import Page from '../components/Page'
import Header from '../components/Header'
import Circle from '../components/Circle'
import Menu from '../components/Menu'

// DATA
import { HeaderContent, SnackContentType, content, Buttons } from '../data/data'
import ItemContent from '../components/ItemContent'
import NavButtons from '../components/NavButtons'


const Home = () => {
  // STATE MGMT
  // bool values for controling animation timing
  const [triggerAnimation, set_triggerAnimation] = useState<boolean>(false)
  const [isMenuOpen, set_isMenuOpen] = useState<boolean>(true)

  // content state for SPA navigation
  const [headerContent, set_headerContent] = useState<HeaderContent>({
    title: 'Ryan Gorgol',
    subtitle: 'full stack developer',
    renderButton: false
  })

  const menuItems = content.map(item => {
    return {
      "title": item.title,
      "caption": item.caption
    }
  })
  
  const [itemContent, set_itemContent] = useState<SnackContentType>({
    hook: 'This is the hook',
    bait: 'This is the bait'
  })
  const [buttons, set_buttons] = useState<Buttons>([])


  // UI INTERACTION MGMT

  // Menu Click triggers two different actions: onChange and onMenuClick
  // onChange sets the header content, thus triggering a render after a delay

  const onChange = (newValue: HeaderContent) => {
    setTimeout(() => {
      set_headerContent(newValue)
    }, 750)
  }

  // triggers animation state to change then item content to be rendered finishing with another animation state change
  const onMenuClick = (key: number) => {
    set_triggerAnimation(true)
    set_itemContent({
      hook: content[key].hook,
      bait: content[key].bait,
    })
    
    setTimeout(() => {
      let newButtons = content[key].buttons.map((button) => {
        return {
          "title": button.title,
          "href": button.href
        }
      })
  
      set_isMenuOpen(false)
      set_buttons(newButtons)

      set_triggerAnimation(false)
    }, 750)
    
  }
  
  // Back button triggers an animation reset to homepage
  // triggers animation state change, clears buttons, opens menu sets header content and changes animation state
  
  const onBackButtonClick = () => {
    set_triggerAnimation(true)
    
    setTimeout(() => {
      set_buttons([])
      set_triggerAnimation(false)
      set_isMenuOpen(true)
      set_headerContent({
        title: 'Ryan Gorgol',
        subtitle: 'full stack developer',
        renderButton: false
      })
    }, 500)
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
        <>
          <S_HomePage isOpen={isMenuOpen}>
            <S_Box>
              <S_Content>
                <Header
                  title={headerContent.title}
                  subtitle={headerContent.subtitle}
                  renderButton={headerContent.renderButton}
                  onClick={onBackButtonClick}
                  triggerAnimation={triggerAnimation}
                  isMenuOpen={isMenuOpen}
                />
                <AnimatePresence>
                {
                  isMenuOpen && 
                    <Menu
                      menuItems={menuItems}
                      onChange={(newValue) => onChange(newValue)}
                      onClick={(key) => onMenuClick(key)}
                      isOpen={isMenuOpen}
                    />
                }
                </AnimatePresence>
                <AnimatePresence>
                {
                  !isMenuOpen &&  
                  <ItemContent
                    content={itemContent}
                    triggerAnimation={triggerAnimation}
                  />
                }
                </AnimatePresence>
              </S_Content>
              <AnimatePresence>
                {
                  isMenuOpen &&
                  <Circle triggerAnimation={triggerAnimation} isMenuOpen={isMenuOpen} />
                }
            </AnimatePresence>
            <AnimatePresence>
                {
                  !isMenuOpen &&
                  <NavButtons buttons={buttons} triggerAnimation={triggerAnimation} />
                }
              </AnimatePresence>
            </S_Box>
          </S_HomePage >
        </>
      </Page>
    </>
  )
}

export default Home

const S_HomePage = styled(motion.div) <{
  isOpen: boolean
}>`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: ${props => props.isOpen ? 'inset 0px 0px 1px var(--white_minus)' : 'inset 0px 0px 0px var(--white_minus)'};
`

const S_Box = styled.div<{}>`
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  border-radius: 2px;
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
` 

const S_Content = styled.div`
  width: 100%;
  height: fit-content;
  min-height: 50%;
  z-index: 100;
`





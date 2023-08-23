import styled from 'styled-components'
import React, { useEffect, useState } from 'react'
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
const [triggerAnimation, set_triggerAnimation] = useState<boolean>(false);
const [goingBack, set_goingBack] = useState<boolean>(false); 
  const [isMenuOpen, set_isMenuOpen] = useState<boolean>(true);
  const [showItemContent, set_showItemContent] = useState<boolean>(false);

const [selectedKey, set_selectedKey] = useState<number | null>(null);

// content state for SPA navigation
const [headerContent, set_headerContent] = useState<HeaderContent>({
  title: 'Ryan Gorgol',
  subtitle: 'full stack developer',
  renderButton: false
});

const menuItems = content.map(item => {
  return {
    "title": item.title,
    "caption": item.caption
  }
});

const [itemContent, set_itemContent] = useState<SnackContentType>({
  hook: 'This is the hook',
  bait: ['This is the bait']
});
const [buttons, set_buttons] = useState<Buttons>([]);

// UI INTERACTION MGMT
const onChange = (newValue: HeaderContent) => {
  setTimeout(() => {
    set_headerContent(newValue)
  }, 750)
};

const onMenuClick = (key: number) => {
  set_selectedKey(key);
  set_triggerAnimation(true);
};

const onBackButtonClick = () => {
  set_triggerAnimation(true);
  set_goingBack(true); // Indicate that a "back" action is happening
};

useEffect(() => {
  if (goingBack) {
    setTimeout(() => {
      set_selectedKey(null);
      set_itemContent({
        hook: 'This is the hook',
        bait: ['This is the bait'],
      });
      set_buttons([]);
      set_isMenuOpen(true);
      set_headerContent({
        title: 'Ryan Gorgol',
        subtitle: 'full stack developer',
        renderButton: false,
      });
      set_triggerAnimation(false);
      set_goingBack(false); // Reset the "back" action state
    }, 750);
  } else if (triggerAnimation && selectedKey !== null) {
    set_showItemContent(false);

    set_itemContent({
      hook: content[selectedKey].hook,
      bait: content[selectedKey].bait,
    });

    setTimeout(() => {
      set_itemContent({
        hook: content[selectedKey].hook,
        bait: content[selectedKey].bait,
      });
      let newButtons = content[selectedKey].buttons.map((button) => {
        return {
          "title": button.title,
          "href": button.href,
        };
      });

      set_isMenuOpen(false);
      set_buttons(newButtons);
      set_triggerAnimation(false);
      set_showItemContent(true);
    }, 750);
  }
}, [triggerAnimation, goingBack, selectedKey]);

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
      <Page isOpen={isMenuOpen}>
        <>
          <S_HomePage isOpen={isMenuOpen}>
            <S_Box>
              <Header
                title={headerContent.title}
                subtitle={headerContent.subtitle}
                renderButton={headerContent.renderButton}
                onClick={onBackButtonClick}
                triggerAnimation={triggerAnimation}
                isMenuOpen={isMenuOpen}
              />
              <S_Content>
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
                  !isMenuOpen && showItemContent &&  
                  <ItemContent
                    content={itemContent}
                    triggerAnimation={triggerAnimation}
                  />
                }
                </AnimatePresence>
                <AnimatePresence>
                  {
                    !isMenuOpen &&
                    <NavButtons buttons={buttons} triggerAnimation={triggerAnimation} />
                  }
                </AnimatePresence>
                
              </S_Content>

              <AnimatePresence>
                {
                  isMenuOpen &&
                  <Circle triggerAnimation={triggerAnimation} isMenuOpen={isMenuOpen} />
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
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: ${props => props.isOpen ? 'inset 0px 0px 1px var(--white_minus)' : 'inset 0px 0px 0px var(--white_minus)'};
`

const S_Box = styled.div<{}>`
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  border-radius: 0.125rem;
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: column;
` 

const S_Content = styled.div`
  width: 100%;
  height: calc(var(--page_height) - var(--header_height));
  overflow-x: hidden;
  min-height: 50%;
  z-index: 100;
  position: relative;
  padding: 1rem 0;
`





import { motion } from 'framer-motion'
import React from 'react'
import styled from 'styled-components'
import { Buttons } from '../data/data'

import Button from './Button'

const variants = {
  start: {
    y: [-10, 0],
    opacity: [0, 1]
    
  },
  end: {
    y: [0, -10],
    opacity: [1, 1]
  }
}

interface Props {
  buttons: Buttons,
  triggerAnimation: boolean
}

const NavButtons = ({ buttons, triggerAnimation }: Props) => {  
  return (
    <S.Container
      variants={variants}
      initial='start'
      animate={triggerAnimation ? 'start' : 'end'}
      transition={{ duration: 1 }}
      exit={{opacity: 0}}
    >
      {
        buttons?.map((button, index) => {
          return (
            <S.BtnWrap key={index}>
              <Button title={button.title} href={button.href} />
            </S.BtnWrap>
          )
        })     
      }
    </S.Container>
  )
}

export default NavButtons

const S = {
  Container: styled(motion.div)`
    position: relative;
    z-index: 100;
    width: calc(100% - 2rem);
    margin: 0 auto 1rem auto;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
  `,
  BtnWrap: styled.div`
    padding-top: 1rem;
  `
}
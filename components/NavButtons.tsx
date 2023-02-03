import React from 'react'
import styled from 'styled-components'
import { Buttons } from '../data/data'

import Button from './Button'

interface Props {
  buttons: Buttons
}

const NavButtons = ({ buttons }: Props) => {
  console.log(buttons, 'buttons')
  
  return (
    <S.Container>
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
  Container: styled.div`
    position: relative;
    z-index: 100;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
  `,
  BtnWrap: styled.div`
    padding-top: 1rem;
  `
}
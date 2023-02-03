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
        buttons?.map((button, index) => <Button title={button.title} href={button.href} key={index} />)
        
      }
    </S.Container>
  )
}

export default NavButtons

const S = {
  Container: styled.div`
    width: 100%;
    height: 100%;
  `
}
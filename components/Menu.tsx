import styled from "styled-components"
import { motion } from 'framer-motion'

import { HeaderContent, MenuItems } from "../data/data"
import { useState } from "react"

interface Props {
  menuItems?: MenuItems,
  onChange: (newValue: HeaderContent) => void
}

const variants = {
  left: {
    x: [0 , 50 , 0]
    
  },
  right: {
    x: [0 , 100 , 0]
  }
}

const Menu = ({ menuItems, onChange }: Props) => {
  
  const [isSelected, setIsSelected] = useState<boolean>(false)
  const [idSelected, setIdSelected] = useState<number>()

  const handleClick = (index: number, title: string) => {
    setIsSelected(true)
    setIdSelected(index)

    let newValue: HeaderContent = {
      title: title,
      subtitle: '',
      renderButton: true
    }

    onChange(newValue)
  };

  return (
    <S_Menu >
      {
        menuItems !== undefined
          ? menuItems.map(({ title, caption }, index) => (
              <S_MenuItem
                key={index}
                onClick={() => handleClick(index, title)}
                variants={variants}
                initial='left'
                animate={index === idSelected && isSelected ? 'right' : 'left'}
                transition={{ duration: 1.2 }}
              >
                <S_Title>{title}</S_Title>
                <S_Caption>{caption}</S_Caption>
              </S_MenuItem>
            ))
          : <></>
      } 
    </S_Menu>
  ) 
}

export default Menu

const S_Menu = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  position: relative;
  z-index: 10;
`

const S_MenuItem = styled(motion.a)`
  cursor: pointer;
  z-index: 20;
  text-transform: uppercase;
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;

  &:hover {
    color: var(--red);
  }
`

const S_Title = styled.div`
  line-height: calc(33px + var(--vw_50));
  font-weight: 400;
  letter-spacing: 1.75px;
  font-size: calc(1.2rem + var(--vw_50));
`

const S_Caption = styled.div`
  font-weight: 200;
  text-transform: lowercase;
`
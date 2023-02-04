import styled from "styled-components"
import { motion } from 'framer-motion'

import { HeaderContent, MenuItems } from "../data/data"
import { useState } from "react"

interface Props {
  menuItems?: MenuItems,
  onChange: (newValue: HeaderContent) => void,
  onClick: (key: number) => void,
  isOpen: boolean
}

const variants = {
  start: {
    x: [0, 0]
    
  },
  end: {
    x: [0 , 100 , 0]
  }
}

const Menu = ({ menuItems, onChange, onClick, isOpen }: Props) => {
  
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
    onClick(index)
  };

  return (
    <S_Menu 
      isOpen={isOpen}
      exit={{opacity: 0}}
    >
      {
        menuItems !== undefined
          ? menuItems.map(({ title, caption }, index) => (
              <S_MenuItem
                key={index}
                onClick={() => handleClick(index, title)}
                variants={variants}
                animate={index === idSelected && isSelected ? 'end' : 'start'}
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

const S_Menu = styled(motion.div)<{
  isOpen: boolean
}>`
  width: fit-content;
  display: flex;
  flex-direction: column;
  position: relative;
  z-index: 10;
  margin-left: 1rem;
`

const S_MenuItem = styled(motion.a)`
  width: fit-content;
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
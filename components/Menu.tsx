import styled from "styled-components"
import { motion } from 'framer-motion'

import { HeaderContent, MenuItems } from "../data/data"
import { useEffect, useState } from "react"

interface Props {
  menuItems?: MenuItems,
  onChange: (newValue: HeaderContent) => void,
  onClick: (key: number) => void,
  isOpen: boolean
}

const variants = {
  onNotClick: {
    x: [0, -20],
    opacity: [.5, 0]
    
  },
  onClick: {
    x: [0, 20, 0],
    opacity: [1 , 1, 0.25]
  },
  start: {
    opacity: [0,1]
  }
}

const Menu = ({ menuItems, onChange, onClick }: Props) => {
  
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
    >
      {
        menuItems !== undefined
          ? menuItems.map(({ title, caption }, index) => (
              <S_MenuItem
                key={index}
                onClick={() => handleClick(index, title)}
                variants={variants}
                initial='start'
                animate={
                  index === idSelected && isSelected
                    ? 'onClick'
                    : index !== idSelected && isSelected
                      ? 'onNotClick'
                      : 'start'
                }
              transition={
                index === idSelected && isSelected
                  ? { duration: 1, ease: 'easeIn' }
                  : index !== idSelected && isSelected
                    ? { duration: .5, ease: 'linear' }
                    : { duration: 1, ease: 'linear', delay: index * 0.1}
              }
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
  isOpen?: boolean
}>`
  width: fit-content;
  display: flex;
  flex-direction: column;
  align-items: start;
  position: relative;
  z-index: 10;
  
`

const S_MenuItem = styled(motion.button)`
  min-width: 10rem;
  background: none;
  cursor: pointer;
  z-index: 20;
  text-transform: uppercase;
  display: flex;
  flex-direction: column;
  padding: 1rem;
  border: none;
  color: var(--white);

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
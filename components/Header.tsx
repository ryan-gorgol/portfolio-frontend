import styled from 'styled-components'
import { motion } from 'framer-motion'
import { useEffect } from 'react'

const variants = {
  present: {
    opacity: [0, 1],
    scale: 1
  },
  end: {
    opacity: [1, 0],
  }
}

interface Props {
  title: string,
  subtitle?: string,
  renderButton: boolean,
  onClick: () => void,
  triggerAnimation: boolean,
  isMenuOpen: boolean
}

function Header({ title, renderButton, onClick, triggerAnimation, isMenuOpen }: Props) {
  

  return (
    <S_Container >
      <S_Header renderButton={renderButton}>
        <S_TitleContainer renderButton={renderButton} isMenuOpen={isMenuOpen}>

          <S_Title
            variants={variants}
            animate={triggerAnimation ? 'end' : 'present'}
            transition={triggerAnimation ? { duration: 0.25, delay: 0.25} : {duration: .5}}
          >

            {title}

          </S_Title>
        </S_TitleContainer>
    {
    renderButton 
      ? <S_ButtonContainer>
          <S_Button
            variants={variants}
            initial='present'
            animate={triggerAnimation ? 'end' : 'present'}
            transition={{ duration: 0.75 }}
            onClick={onClick}
              >
                <span>&larr;</span>
          </S_Button>
        </S_ButtonContainer>
      : <></>
    }
      </S_Header>
    </S_Container>
  )
}

export default Header

const S_Container = styled.div<{}>`
  width: 100%;
  height: var(--header_height);
  cursor: default; 
  position: sticky; 
`

const S_Header = styled.div<{
  renderButton: boolean
}>`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: stretch;
`

const S_TitleContainer = styled.div<{
  renderButton: boolean,
  isMenuOpen: boolean
}>`
  width: calc(100% - 2rem);
  height: fit-content;
  position: relative;
  color: var(--white);
  z-index: 100;
  padding-left: ${props => props.isMenuOpen ? '1rem' : '0'};
  padding-top: ${props => props.isMenuOpen ? '0.5rem' : '0'};
`

const S_Title = styled(motion.div)`
  height: 100%;
  margin: 0;
  font-size: calc(var(--font_size_header_title) + var(--vw_100));
  font-weight: 200;
  letter-spacing: -1.5px;
`

const S_ButtonContainer = styled.div`
  width: 4rem; 
  height: 3rem;
  color: var(--white);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 100;

  &:hover {
    color: var(--red);
    transform: scale(1.1);
  }

  &:active {
    background: none;
  }
  
`

const S_Button = styled(motion.a) <{}>`
  display: flex;
  box-sizing: border-box;
  width: 6rem;
  height: 100%;
  font-size: 2rem;
  align-items: center;
  justify-content: center;
  border: none;
  color: var(--white);
  position: relative;
  transition: transform 1s ease; 

  &:hover {
    transform: scale(1.05);
    transition: transform 0.5s ease; 

    span {
      transition: 0.5s ease;
    }
  }

  &:active {
    color: var(--red);
    transition: transform 0.2s ease; 

    span {
      transform: scale(.90);
      user-select: none;
      transistion: 0.5s ease;
    }
  }
`
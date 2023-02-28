import styled from 'styled-components'
import { motion } from 'framer-motion'

const variants = {
  start: {
    opacity: [0, 1]
    
  },
  end: {
    opacity: [1, 0]
  }
}

// variants={variants}
//           initial='start'
//           animate={triggerAnimation ? 'end' : 'start'}
//           transition={{ delay:0.5, duration: 4 }}

interface Props {
  title: string,
  subtitle?: string,
  renderButton: boolean,
  onClick: () => void,
  triggerAnimation: boolean
}

function Header({title, subtitle, renderButton, onClick, triggerAnimation}: Props) {
  return (
    <S_Container >
      <S_Header renderButton={renderButton}>
        <S_TitleContainer renderButton={renderButton}>
            <h1>{title}</h1>
            {subtitle ? <h2>{subtitle}</h2> : <></>}
        </S_TitleContainer>
    {
    renderButton 
      ? <S_ButtonContainer>
          <S_Button
            variants={variants}
            initial='start'
            animate={triggerAnimation ? 'end' : 'start'}
            transition={{ duration: 1 }}
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
  padding-bottom: 1rem;
  cursor: default;  
`

const S_Header = styled.div<{
  renderButton: boolean
}>`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: stretch;
  padding-bottom: 1rem;
`

const S_TitleContainer = styled.div<{
  renderButton: boolean
}>`
  width: calc(100% - 3rem);
  height: fit-content;
  position: relative;
  color: var(--white);
  z-index: 100;
  padding-left: 1rem;
  padding-top: 0.5rem;

  h1 {
    height: 100%;
    margin: 0;
    font-size: calc(var(--font_size_header_title) + var(--vw_25));
    font-weight: 200;
    letter-spacing: -1.5px;
  }

  h2 {
    font-size: calc(var(--font_size_header_subtitle) + var(--vw_25));
    font-weight: 100;
    margin: 0;
    margin-top: 0.5rem;
    padding-left: 2px;
    padding: ${props => props.renderButton ? '2rem' : '0'};
  }
`

const S_ButtonContainer = styled.div`
  width: 4rem; 
  color: var(--white);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 100;

  
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
    transition: transform 0.2s ease; 
  }

  &:active {
    color: var(--red);
    background: var(--black_minus);
    transition: transform 0.2s ease; 

    span {
      transform: scale(.90);
      user-select: none;
    }
  }
`
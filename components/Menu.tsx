import styled from "styled-components"
import { useRef } from 'react'

interface Props {
  onClick?: any,
  clickHome?: any,
  clickPortfolio?: any,
  clickInfo?: any,
  clickContact?: any
}

const Menu = ({ clickHome, clickPortfolio, clickInfo, clickContact}: Props) => {

  
 
  return (
    <S_Menu >
      <S_MenuItem onClick={clickHome}>Home</S_MenuItem>
      <S_MenuItem onClick={clickPortfolio}>Portfolio</S_MenuItem>
      <S_MenuItem onClick={clickInfo}>Info</S_MenuItem>
      <S_MenuItem onClick={clickContact}>Contact</S_MenuItem>
    </S_Menu>
  ) 
}

export default Menu

const S_Menu = styled.div`
  width: fit-content;
  display: flex;
  flex-direction: column;
  margin-left: 1rem;
  position: relative;
  z-index: 10;
  
`

const S_MenuItem = styled.a`
  line-height: calc(33px + var(--vw_50));
  font-weight: 400;
  letter-spacing: 1.75px;
  font-size: calc(1.2rem + var(--vw_50));
  cursor: pointer;
  z-index: 20;
  text-transform: uppercase;

  &:hover {
    color: var(--red);
    font-weight: 500;
  }
`
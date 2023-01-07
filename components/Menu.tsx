import styled from "styled-components"
import { menuItems } from "../pages"

interface Props {
  menuItems?: menuItems
}


const Menu = ({menuItems}: Props) => {
 
  return (
    <S_Menu >
      {
        menuItems !== undefined
          ? menuItems.map(({title, href, caption}, index) => (
            <S_MenuItem key={index} href={href}>
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
  margin-left: 1rem;
  position: relative;
  z-index: 10;
`

const S_MenuItem = styled.a`
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
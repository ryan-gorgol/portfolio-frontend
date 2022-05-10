import styled from 'styled-components'

import Image from 'next/image'

interface Props {
  children?: any,
  onClick?: any,
  menuOpen?: boolean,
}

function BlogMenu({children, onClick, menuOpen}: Props) {
  return (
    <MenuButton>
      <S_OpenButtonContainer>
        <S_OpenButton onClick={onClick}>
          {menuOpen ? <Image src="/closefilled.svg" height={35} width={35} alt="menu open icon"/>
                    : <Image src="/menu.svg" height={35} width={35} alt="menu close icon"/>
          }
        </S_OpenButton>
      </S_OpenButtonContainer>
        {children}
    </MenuButton>
  )
}

export default BlogMenu

const MenuButton = styled.div`
  width: 4rem;
`

const S_OpenButtonContainer = styled.div`
  width: fit-content;
  z-index: 1000;
`

const S_OpenButton = styled.button`
  position: relative;
  z-index: 1000;
  width: 3rem;
  height: 3rem;
  margin: 1rem;
  border: none;
  border-radius: 50%;
  background: none;
  color: var(--white);
  font-size: 1rem;

`
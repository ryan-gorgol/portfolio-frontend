import styled from 'styled-components'

import { menuItems } from '../data/data'

import Circle from './Circle'
import Header from './Header'
import Menu from './Menu'

interface Props {
  ripple: boolean
}

const HomeContent = ({ripple}: Props) => {
  return (
    <>
     <Header title={'Ryan Gorgol'} subtitle={'full stack portfolio'} />
      <Circle ripple={ripple} />
      <S_ContentWrap>
        <Menu menuItems={menuItems} />
      </S_ContentWrap>
    </>
  )
}

export default HomeContent


const S_ContentWrap = styled.div`
  display: flex;

  @media only screen and (max-width: 750px){
	  flex-wrap: wrap;
  }
`
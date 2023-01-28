import Link from 'next/link'
import styled from 'styled-components'
import Header from '../components/Header'
import ItemContent from '../components/ItemContent'

import Page from '../components/Page'


const counterservice = () => {
  return (
    <Page>
      <S_Container>
        <S_TopWrap>
          <Header title={'counter service'} subtitle={'webapp'} renderButton/>
          <ItemContent />
        </S_TopWrap>
        <S_Button>
          <Link href='' passHref>
            <S_A>visit counterservice</S_A>
          </Link>
        </S_Button>
      </S_Container>
    </Page>
  )
}

export default counterservice

const S_Container = styled.div`
  width: 100%;
  height: calc(100vh - 2rem);
  position: relative;
  display: flex;
  flex-wrap: wrap;
`

const S_TopWrap = styled.div`
  width: 100%;
  height: fit-content;
`

const S_Button = styled.div`
  width: fit-content;
  height: 2rem;
  padding: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid var(--white);
  border-radius: 0.5rem;
`

const S_A = styled.a`
  position: relative;
  border-radius: 0.5rem;
`

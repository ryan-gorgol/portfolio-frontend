import Link from 'next/link'
import styled from 'styled-components'
import Button from '../components/Button'
import Header from '../components/Header'
import ItemContent from '../components/ItemContent'

import Page from '../components/Page'

import { counterServiceContent } from '../data/data'


const counterservice = () => {
  return (
    <Page>
      <S_Container>
        <S_TopWrap>
          <Header title={'counter service'}  renderButton/>
          <ItemContent content={counterServiceContent} />
        </S_TopWrap>
        <S_BottomWrap>
          <Button>
            <Link href='https://counterservice-grgl.netlify.app' passHref>
              <S_A>VISIT COUNTERSERVICE</S_A>
            </Link>
          </Button>
        </S_BottomWrap>
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
  flex-direction: column;
  justify-content: space-between;
`

const S_TopWrap = styled.div`
  width: 100%;
  height: fit-content;
  background: red;
`

const S_BottomWrap = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding-bottom: 1rem;
  background: blue;
`

const S_A = styled.a`
  position: relative;
  border-radius: 0.5rem;
`

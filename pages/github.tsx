import Link from 'next/link'
import styled from 'styled-components'
import Header from '../components/Header'
import ItemContent from '../components/ItemContent'

import Page from '../components/Page'
import Button from '../components/Button'

import { gitHubContent } from '../data/data'



const github = () => {
  return (
    <Page>
      <S_Container>
        <S_TopWrap>
          {/* <Header title={'Links'}  renderButton/> */}
          <ItemContent content={gitHubContent} />
        </S_TopWrap>
        <S_BottomWrap>
        <Button>
          <Link href='https://github.com/ryan-gorgol' passHref>
            <S_A>VISIT GITHUB</S_A>
          </Link>
        </Button>
        <Button>
          <Link href='https://www.linkedin.com/in/ryan-gorgol' passHref>
            <S_A>VISIT LINKEDIN</S_A>
          </Link>
          </Button>
        </S_BottomWrap>
      </S_Container>
    </Page>
  )
}

export default github

const S_Container = styled.div`
  width: 100%;
  height: var(--page_height);
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

const S_TopWrap = styled.div`
  width: 100%;
  height: fit-content;
`

const S_BottomWrap = styled.div`
  width: 100%;
  height: fit-content;
`

const S_A = styled.a`
  position: relative;
  border-radius: 0.5rem;
`
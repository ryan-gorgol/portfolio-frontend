import styled from 'styled-components'
import Header from '../components/Header'

import Page from '../components/Page'


const github = () => {
  return (
    <Page>
      <Header title={'github'} subtitle={'non-rcc projects'} renderButton/>
    </Page>
  )
}

export default github

const S_Background = styled.div`
  width: 100%;
  height: calc(100vh - 2rem);
  background: #d79c9c;
`
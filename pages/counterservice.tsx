import styled from 'styled-components'
import Header from '../components/Header'

import Page from '../components/Page'


const counterservice = () => {
  return (
    <Page>
      <Header title={'counterservice'} subtitle={'webapp'} renderButton/>
    </Page>
  )
}

export default counterservice

const S_Background = styled.div`
  width: 100%;
  height: calc(100vh - 2rem);
  background: #d79c9c;
`
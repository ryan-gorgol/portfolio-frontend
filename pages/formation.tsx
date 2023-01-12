import styled from 'styled-components'
import Header from '../components/Header'

import Page from '../components/Page'


const formation = () => {
  return (
    <Page>
      <Header title={'formation'} subtitle={'open-source component library'} renderButton/>
    </Page>
  )
}

export default formation

const S_Background = styled.div`
  width: 100%;
  height: calc(100vh - 2rem);
  background: #d79c9c;
`
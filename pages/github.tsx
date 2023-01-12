import styled from 'styled-components'

import Page from '../components/Page'


const github = () => {
  return (
    <Page>
      <S_Background />
    </Page>
  )
}

export default github

const S_Background = styled.div`
  position: relative;
  width: 100%;
  height: calc(100vh - 2rem);
  background: #d79c9c;
`
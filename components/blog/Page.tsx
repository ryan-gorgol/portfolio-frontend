import styled from 'styled-components'

interface Props {
  children: JSX.Element
}

function Page({children}: Props) {
  return (
    <S_Page>
      {children}
    </S_Page>
  )
}

export default Page

const S_Page = styled.div`
  width: 100%;
  margin: 0 auto;
  background: white;
`
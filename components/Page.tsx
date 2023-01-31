import styled from 'styled-components'

interface Props {
  children: JSX.Element
}

const Page = ({children}: Props) => {
  return (
    <S_Page>
      { children }
    </S_Page>
  )
}

export default Page

const S_Page = styled.div`
  width: calc(100vw - var(--page_border_margin_total));
  min-height: calc(100vh - 2rem);
  display: flex;
  background: #303030;
  margin: var(--page_border_margin);
  color: var(--white);
  background: var(--black);
`


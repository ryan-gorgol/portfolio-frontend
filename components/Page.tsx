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
  width: var(--page_width);
  min-height: var(--page_height);
  display: flex;
  background: #303030;
  margin: var(--page_border_margin);
  color: var(--white);
  background: var(--black);
`


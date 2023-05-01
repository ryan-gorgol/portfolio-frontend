import styled from 'styled-components'

interface Props {
  children: JSX.Element,
  isOpen: boolean
}

const Page = ({children, isOpen}: Props) => {
  return (
    <S_Page isopen={isOpen}>
      { children }
    </S_Page>
  )
}

export default Page

const S_Page = styled.div<{
  isopen: boolean
}>`
  width: var(--page_width);
  min-height: var(--page_height);
  display: flex;
  background: #303030;
  margin: ${props => props.isopen ? 'var(--page_border_margin)' : 'var(--page_border_margin_content)'};;
  color: var(--white);
  background: var(--black);
`


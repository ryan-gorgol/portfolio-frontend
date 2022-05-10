import styled from 'styled-components'

interface Props {
  children?: any,
}

function BlogHeader({ children }: Props) {
  return (
    <Header>
      <Wrap>
        <span>RG</span>
        <span>portfolio</span>
      </Wrap>
      {children}
    </Header>
  )
}

export default BlogHeader

const Header = styled.h1`
  width: calc(100vw - 2rem);
  position: sticky;
  top: 0;
  margin: 0;
  padding-left: 1rem;
  padding-right: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 1000;
  background: linear-gradient(180deg, #ffffff 0%, rgba(255,255,255,0.96) 95%, rgba(255,255,255,0.75) 100%);
  span {
    font-size: var(--font_size_header_subtitle);
    font-weight: 100;
  }
`

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
`
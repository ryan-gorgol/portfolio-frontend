import styled from "styled-components"

interface Props {
  title: string,
  subtitle: string,
  renderButton: boolean
}

function Header({title, subtitle, renderButton}: Props) {
  return (
    <S_Header>
      <S_Title>
        <h1>{title}</h1>
        <h3>{subtitle}</h3>
      </S_Title>
      <S_Button href={'/home'} renderButton={renderButton}>&larr;</S_Button>
    </S_Header>
  )
}

export default Header

const S_Header = styled.div`
  width: 100%;
  display: flex;
`

const S_Title = styled.div`
  width: calc(100% - 5rem);
  position: relative;
  color: var(--white);
  z-index: 100;
  font-family: 'IBM Plex Sans', sans-serif;
  padding: 1rem;
  padding-bottom: max(4rem, 4vmin);

  h1 {
    margin: 0;
    font-size: calc(var(--font_size_header_title) + var(--vw_50));
    font-weight: 200;
    letter-spacing: -1.5px;
    line-height: 1;
  }

  h3 {
    font-size: calc(var(--font_size_header_subtitle) + var(--vw_50));
    font-weight: 100;
    margin: 0;
    margin-top: 0.5rem;
    padding-left: 2px;
  }
`

const S_Button = styled.a<{
  renderButton?: boolean
}>`
  display: ${props => props.renderButton ? 'flex' : 'none'};
  width: 2rem;
  height: 2rem;
  align-items: center;
  justify-content: center;
  background: none;
  border: 1px solid var(--white);
  color: var(--white);
  border-radius: 0.5rem;
  position: relative;
  top: 1rem;
`
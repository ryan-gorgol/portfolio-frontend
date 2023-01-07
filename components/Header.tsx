import styled from "styled-components"

interface Props {
  title: string,
  subtitle: string,
}

function Header({title, subtitle}: Props) {
  return (
    <S_Header>
      <h1>{title}</h1>
      <h3>{subtitle}</h3>
    </S_Header>
  )
}

export default Header

const S_Header = styled.div`
  position: relative;
  z-index: 100;
  font-family: 'IBM Plex Sans', sans-serif;
  padding: 1rem;
  padding-bottom: max(4rem, 4vmin);

  h1 {
    color: var(--white);
    margin: 0;
    font-size: calc(var(--font_size_header_title) + var(--vw_50));
    font-weight: 200;
    letter-spacing: -1.5px;
  }

  h3 {
    font-size: calc(var(--font_size_header_subtitle) + var(--vw_50));
    font-weight: 100;
    margin: 0;
    margin-top: 0.5rem;
    padding-left: 2px;
  }
`
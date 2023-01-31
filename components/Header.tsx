import Link from "next/link"
import styled from "styled-components"

interface Props {
  title: string,
  subtitle?: string,
  renderButton: boolean
}

function Header({title, subtitle, renderButton}: Props) {
  return (
    <S_Container>
      <S_Header renderButton={renderButton}>
        <S_Title renderButton={renderButton}>
            <h1>{title}</h1>
            {subtitle ? <h2>{subtitle}</h2> : <></>}
        </S_Title>
        <Link href='/home' passHref>
          <S_Button  renderButton={renderButton}>&larr;</S_Button>
        </Link>
      </S_Header>
    </S_Container>
  )
}

export default Header

const S_Container = styled.div<{

}>`
  width: 100%;
  padding-bottom: 1.5rem;

`

const S_Header = styled.div<{
  renderButton: boolean
}>`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: ${props => props.renderButton ? '1px solid var(--gray)' : ''};
  padding-bottom: 1rem;
`

const S_Title = styled.div<{
  renderButton: boolean
}>`
  width: calc(100% - 3rem);
  height: fit-content;
  position: relative;
  color: var(--white);
  z-index: 100;

  h1 {
    height: 100%;
    margin: 0;
    font-size: calc(var(--font_size_header_title) + var(--vw_25));
    font-weight: 200;
    letter-spacing: -1.5px;
  }

  h2 {
    font-size: calc(var(--font_size_header_subtitle) + var(--vw_25));
    font-weight: 100;
    margin: 0;
    margin-top: 0.5rem;
    padding-left: 2px;
    padding: ${props => props.renderButton ? '2rem' : '0'};
  }
`

const S_Button = styled.a<{
  renderButton?: boolean
}>`
  display: ${props => props.renderButton ? 'flex' : 'none'};
  box-sizing: border-box;
  width: 3rem;
  height: 3rem;
  align-items: center;
  justify-content: center;
  background: none;
  border: 1px solid var(--white);
  color: var(--white);
  border-radius: 0.5rem;
  position: relative;
  transition: 2.5s;

  &:hover {
    border: 1px solid var(--gray);
    transition: 0.25s;
  }
`
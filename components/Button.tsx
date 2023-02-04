import Link from 'next/link'
import styled from 'styled-components'


interface Props {
  title: string,
  href?: string
}

const Button = ({title, href}: Props) => {
  return (
    <Link href={href ? href : '/'} passHref>
      <S_Button>
        <a>
          {title}
        </a>
      </S_Button>
    </Link>
  )
}

export default Button

const S_Button = styled.div`
  min-width: calc(100% - 4rem);
  height: 2rem;
  padding: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid var(--white);
  border-radius: 0.5rem;
  text-transform: uppercase;

  cursor: pointer;

  &:hover {
    border: 1px solid var(--gray);
    transition: 0.25s;
  }

  &:active {

  }

  a {
    pointer-events: none;
  }
`
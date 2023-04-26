import Link from 'next/link'
import styled from 'styled-components'


interface Props {
  title: string,
  href?: string
}

const Button = ({ title, href }: Props) => {
  

  return (

    href 
      ?
        <Link href={href} passHref>
          <S_Button>
            <a>
              {title}
            </a>
          </S_Button>
        </Link>
      
      :
        <></>
  )
}

export default Button

const S_Button = styled.div`
  min-width: calc(100% - 4rem);
  height: 3rem;
  padding: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--white);
  border: 1px solid var(--white_minus);
  border-radius: 0.5rem;
  text-transform: uppercase;

  cursor: pointer;

  &:hover {
    border: 1px solid var(--red_minus);
    color: var(--red_plus);
    transition: 0.2s;
  }

  a {
    pointer-events: none;
  }
`
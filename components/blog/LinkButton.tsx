// libs
import styled from 'styled-components'

//components
import Link from 'next/link'

interface Props {
  href: string,
  content: string
}

const LinkButton = ({ href, content }: Props) => {
  return (
    <S_Link>
      <Link href={href}>
        <a target="_blank" rel="noopener noreferrer">{content}</a>
      </Link>
    </S_Link>
  )
}

export default LinkButton

const S_Link = styled.div`
  margin: 0 auto;
  padding-bottom: 4rem;
  text-align: center;

  a {
    border: 1px solid var(--black);
    border-radius: 0.5rem;
    padding: 1rem;
    font-size: var(--font_size_home_section + var(--vw_50));
  }
`
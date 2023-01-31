import styled from 'styled-components'
import Link from 'next/link'

interface Props {
  href: string,
  title: string,
  subtitle: string,
  index: number
}

function Card({href, title, subtitle, index}: Props) {
  return (
    <S_Card key={index}>
      <Link href={href} >
        <a>
          <S_Title>
            {title}
          </S_Title>
          <S_SubTitle>
            {subtitle}
          </S_SubTitle>
        </a>
      </Link>
    </S_Card>
  )
}

export default Card

const S_Card = styled.div`
  max-width: 35rem;
  margin-bottom: 1rem;
  box-sizing: border-box;
  color: var(--white);

  &:hover {
    transition: 0.25s;
    color: var(--red);
  }
`

const S_Title = styled.div`
  font-size: calc(var(--font_size_portfolio_section_title) + (var(--vw_50) * 2));
  font-weight: 100;
  text-align: right;
  color: inherit;
`

const S_SubTitle = styled.div`
  font-size: calc(var(--font_size_portfolio_section_subtitle) + var(--vw_25));
  font-weight: 600;
  text-align: right;
`
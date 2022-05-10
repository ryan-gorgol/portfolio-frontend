import Link from 'next/link'
import styled from 'styled-components'
import { motion } from 'framer-motion'

interface Props {

}

const links = [
  {
    href: '/eventcharm',
    title: 'EventCharm',
    subtitle: 'UX Design / UI Develop'
  },
  {
    href: '/daybyday',
    title: 'Day By Day',
    subtitle: 'Full Stack Develop'
  },
  {
    href: '/mcgovern',
    title: 'McGovern & Co',
    subtitle: 'e-commerce'
  }

]

const PortfolioSection = (props: Props) => {
  return (
    <S_Portfolio
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.9 }}
    >
      <ul>
        {
          links.map((link, index) => (
            <S_Card key={index}>
              <Link href={link.href} >
                <a target="_blank" rel="noopener noreferrer">
                  <S_Title>
                    {link.title}
                  </S_Title>
                  <S_SubTitle>
                    {link.subtitle}
                  </S_SubTitle>
                </a>
              </Link>
            </S_Card>
          ))}
      </ul>
      
    </S_Portfolio>
  )
}

export default PortfolioSection

const S_Portfolio = styled(motion.section)`
  display: block;
  position: relative;
  display: flex;
  justify-content: end;
  text-align: right;
  padding-right: 1rem;
`

const S_Card = styled.div`
  max-width: 20rem;
  margin-bottom: 1rem;
  box-sizing: border-box;

  &:hover {
    transition: 0.25s;
    color: var(--red);
  }
`

const S_Title = styled.div`
  font-size: var(--font_size_portfolio_section_title);
  font-weight: 100;
  text-align: right;
  color: inherit;
`

const S_SubTitle = styled.div`
  font-size: var(--font_size_portfolio_section_subtitle);
  font-weight: 600;
  text-align: right;
`
import styled from 'styled-components'

import Link from 'next/link'

interface Props {
  menuOpen: boolean
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
    subtitle: 'Full Stack Website'
  },
  {
    href: '/counterservice',
    title: 'CounterService',
    subtitle: 'Full Stack Web App'
  }
]

const BlogMenu = ({menuOpen}: Props) => {

  return (
    <S_BlogMenu menuOpen={menuOpen}>
      <ul>
          {
            links.map((link, index) => (
              <S_Card key={index}>
                <Link href={link.href} >
                  <a>
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
    </S_BlogMenu>
  )
}

export default BlogMenu

const S_BlogMenu = styled.div<Props>`
  width: 100%;
  height: 100vh;
  background: #fff;
  position: fixed;
  top: 0;
  display: ${props => props.menuOpen ? 'block' : 'none'};
  opacity: ${props => props.menuOpen ? '1' : '0'};
  transition: 1.55s;

  ul {
    margin-top: 6rem;
    padding: 1rem;
  }
`

const S_Card = styled.div`
  width; 100%;
  margin-bottom: 1rem;
  box-sizing: border-box;
`

const S_Title = styled.div`
  font-size: 1.75rem;
  font-weight: 100;
  text-align: left;
  color: var(--black);

  &:hover {
    color: var(--red);
  }
`

const S_SubTitle = styled.div`
  font-size: 0.8rem;
  font-weight: 600;
  text-align: left;
  color: var(--black);
`
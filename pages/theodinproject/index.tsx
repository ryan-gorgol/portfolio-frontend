/* eslint-disable @next/next/no-page-custom-font */
import styled from 'styled-components'

import Head from 'next/head'
import Card from '../../components/Card'

const links = [
  {
    href: '/theodinproject/rockpaperscissors',
    title: 'Rock, Paper, Scissors',
    subtitle: '8-bit Design'
  },
  {
    href: '/theodinproject/calculator',
    title: 'Calculator',
    subtitle: 'Neumorphic Design'
  },
  {
    href: '/theodinproject/etchasketch',
    title: 'Mouse-A-Sketch',
    subtitle: 'Retro Design'
  }
  
]

const index = () => {
  return (
    <>
      <S_Section>
        <S_Heading>
          <S_H1>The Odin Project</S_H1>
          <S_H2>
            The Odin Project is one of those &quot;What I wish I had when I was learning&quot; resources. Not everyone has access to a computer science education or the funds to attend an intensive coding school and neither of those is right for everyone anyway. This project is designed to fill in the gap for people who are trying to hack it on their own but still want a high quality education.
          </S_H2>
        </S_Heading>
        <S_Space />
        <S_LinkContainer>
            {
            links.map((link, index) => (
                
                <Card
                  key={index}
                  href={link.href}
                  title={link.title}
                  subtitle={link.subtitle}
                  index={index}
                />
              ))}
        </S_LinkContainer>
      </S_Section>
    </>
  )
}

export default index

const S_Section = styled.section`
  padding: 1rem;
`

const S_Heading = styled.div`
  
`

const S_H1 = styled.h1`
  color: white;
  font-size: 2.25rem;
`

const S_H2 = styled.h2`
  color: white;
  font-weight: 200;
  font-size: 1rem;
`

const S_Space = styled.div`
  height: 4rem;
`

const S_LinkContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: right;

`
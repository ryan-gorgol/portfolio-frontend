import styled from 'styled-components'

const rockpaperscissors = () => {
  return (
    <S_Section>
      <S_H1>Rock Paper Scissors</S_H1>
      <S_Button>It was :smile </S_Button>
    </S_Section>
  )
}

export default rockpaperscissors

const S_Section = styled.section`
  padding: 1rem;
`

const S_H1 = styled.h1`
  color: white;
  font-size: 4rem;
`

const S_Button = styled.button`
  
`

import styled from 'styled-components'

const rockpaperscissors = () => {
  return (
    <S_Section>
      <S_H1>Rock Paper Scissors</S_H1>
      <S_PlayingBoard>
        <S_Choices>
          <S_H2>Human</S_H2>
          <S_Button>👊</S_Button>
          <S_Button>✋</S_Button>
          <S_Button>✌️</S_Button>
        </S_Choices>
        <S_Choices>
          <S_H2>Computer</S_H2>
          <S_Button>👊</S_Button>
          <S_Button>✋</S_Button>
          <S_Button>✌️</S_Button>
        </S_Choices>
      </S_PlayingBoard>
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

const S_H2 = styled.h2`
  color: white;
  font-weight: 300;
  font-size: 2rem;
`

const S_PlayingBoard = styled.div`
  display: flex;
  justify-content: space-between;
`

const S_Choices = styled.div`
  width: 150px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const S_Button = styled.button`
  height: 4rem;
  width: 4rem;
  font-size: 3rem;
`

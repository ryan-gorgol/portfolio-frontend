import { useEffect } from 'react'
import styled from 'styled-components'

interface Props {
  humanScore: number,
  computerScore: number,
  resultFeedback: string
}

const Scoreboard = (
  {humanScore,
  computerScore,
  resultFeedback }: Props
) => {

  useEffect(() => console.log(humanScore, 'human', computerScore, 'computer', resultFeedback))
  return (
    <S_Scoreboard>
      <S_H1>Scoreboard</S_H1>
      <S_ScoreWrap>
        <S_PlayerWrap>
          <S_H2>Human</S_H2>
          <S_H3>{ humanScore }</S_H3>
        </S_PlayerWrap>
        <S_PlayerWrap>
          <S_H2>Computer</S_H2>
          <S_H3>{ computerScore }</S_H3>
        </S_PlayerWrap>
      </S_ScoreWrap>
    </S_Scoreboard>
  )
}

export default Scoreboard

const S_Scoreboard = styled.div`
  display: flex;  
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: var(--white);
  border: 2px solid var(--white);
  margin-bottom: 2rem;
`

const S_ScoreWrap = styled.div`
  display: flex;
  width: 100%;
  justify-content:center;
`

const S_PlayerWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 40%;
`

const S_H1 = styled.h1`
  margin: 0;
`

const S_H2 = styled.h2`
  color: red;
  font-size: 1.2rem;
`

const S_H3 = styled.h3`
  margin: 0;
  color: green;
  font-size: 3.8rem;
  font-weight: 400;
`




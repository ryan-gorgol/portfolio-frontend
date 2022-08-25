import { useEffect } from 'react'
import styled from 'styled-components'

interface Props {
  humanScore: number,
  computerScore: number,
  feedback: string
}

const Scoreboard = (
  {humanScore,
  computerScore,
  feedback }: Props
) => {

  useEffect(() => console.log(humanScore, 'human', computerScore, 'computer', feedback))
  return (
    <S_Scoreboard>
      <h1>Scoreboard</h1>
      <S_ScoreWrap>
        <S_PlayerWrap>
          <h2>Human</h2>
          <h3>{ humanScore }</h3>
        </S_PlayerWrap>
        <S_PlayerWrap>
          <h2>Computer</h2>
          <h3>{ computerScore }</h3>
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
  color: white;

`

const S_ScoreWrap = styled.div`
  display: flex;

`

const S_PlayerWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`
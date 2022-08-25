import styled from 'styled-components'
import { useState } from 'react'

import Scoreboard from '../../components/rockpaperscissors/Scoreboard'


const Rockpaperscissors = () => {

  const [humanScore, setHumanScore] = useState(0)
  const [computerScore, setComputerScore] = useState(0)
  const [feedback, setFeedback] = useState('')

  const computerSelection = () => {
    const options=['rock','paper','scissors']
    const computerGuess = options[Math.floor(Math.random() * options.length)]

    return computerGuess
  }

  const evaluateChoices = (humanGuess: string, computerGuess: string) => {
    if (computerGuess === humanGuess) {
      setFeedback(`TIE! Computer guessed ${computerGuess} while you guessed ${humanGuess}.`)
    } else if (humanGuess === 'rock' && computerGuess === 'scissors') {
      setHumanScore(humanScore + 1)
      setFeedback(`You win! Computer guessed ${computerGuess} while you guessed ${humanGuess}.`)
    } else if (humanGuess === 'rock' && computerGuess === 'paper') {
      setComputerScore(computerScore + 1)
      setFeedback(`Computer wins! Computer guessed ${computerGuess} while you guessed ${humanGuess}.`)
    } else if (humanGuess === 'paper' && computerGuess === 'rock') {
      setHumanScore(humanScore + 1)
      setFeedback(`You win! Computer guessed ${computerGuess} while you guessed ${humanGuess}.`)
    } else if (humanGuess === 'paper' && computerGuess === 'scissors') {
      setComputerScore(computerScore + 1)
      setFeedback(`Computer wins! Computer guessed ${computerGuess} while you guessed ${humanGuess}.`)
    } else if (humanGuess === 'scissors' && computerGuess === 'rock') {
      setComputerScore(computerScore + 1)
      setFeedback(`Computer wins! Computer guessed ${computerGuess} while you guessed ${humanGuess}.`)
    } else if (humanGuess === 'scissors' && computerGuess === 'paper') {
      setHumanScore(humanScore + 1)
      setFeedback(`You win! Computer guessed ${computerGuess} while you guessed ${humanGuess}.`)
    }
  }

  const onClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    let humanGuess = e.currentTarget.id

    const computerGuess = computerSelection()

    evaluateChoices(humanGuess, computerGuess)
  }

  return (
    <S_Section>
      <S_H1>Rock Paper Scissors</S_H1>
      <Scoreboard
        humanScore={humanScore}
        computerScore={computerScore}
        feedback={feedback}
      />
        <S_Choices>
          <S_Button
          id='rock'
          onClick={onClick}
          >
            Rock 👊
          </S_Button>
          <S_Button
            id='paper'
            onClick={onClick}
          >
            Paper ✋
          </S_Button>
          <S_Button
            id='scissors'
            onClick={onClick}
          >
            Scissors✌️
        </S_Button>
        <h4>{ feedback }</h4>
      </S_Choices>
    </S_Section>
  )
} 

export default Rockpaperscissors

const S_Section = styled.section`
  padding: 1rem;

  h4 {
    padding-top: 4rem;
    color: white;
  }
`

const S_H1 = styled.h1`
  color: white;
  font-size: 4rem;
  margin-top: 0;
`

const S_H2 = styled.h2`
  color: white;
  font-weight: 300;
  font-size: 2rem;
`

const S_Choices = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const S_Button = styled.button`
  height: 4rem;
  width: 20rem;
  font-size: 3rem;
`

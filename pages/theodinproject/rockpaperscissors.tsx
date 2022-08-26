/* eslint-disable @next/next/no-page-custom-font */
import styled from 'styled-components'
import { useState, useEffect } from 'react'

import Scoreboard from '../../components/rockpaperscissors/Scoreboard'
import Head from 'next/head'
import Link from 'next/link'


const Rockpaperscissors = () => {

  const [humanScore, setHumanScore] = useState(0)
  const [computerScore, setComputerScore] = useState(0)
  const [resultFeedback, setResultFeedback] = useState('')
  const [previosRoundFeedback, setPreviousRoundFeedback] = useState('')
  const [gameover, setGameover] = useState(false)

  // evaluate status of the game
  const evaluateGameStatus = (humanScore: number, computerScore: number) => {
    if (humanScore === 5) setGameover(true)
    else if (computerScore === 5) setGameover(true)
  }

  //evaluate game status triggered by resultFeedback
  useEffect(() => {
    evaluateGameStatus(humanScore, computerScore), [resultFeedback]
  })

  // when gameover is true, trigger actions
  useEffect(() => {
    
  }, [gameover])

  // whenever 'play again' button is selected, reset scoreboard
  const resetClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    setComputerScore(0)
    setHumanScore(0)
    setGameover(false)
  }

  // function which returns a 'randomly' selected guess
  const computerSelection = () => {
    const options=['rock','paper','scissors']
    const computerGuess = options[Math.floor(Math.random() * options.length)]

    return computerGuess
  }

  // Evaluate outcome and trigger response
  const evaluateChoices = (humanGuess: string, computerGuess: string) => {

    console.log('evaluateChoices - pre-if statement', humanScore)
    if (computerGuess === humanGuess) {
      setResultFeedback(`TIE!`)
      setPreviousRoundFeedback(`Computer:${computerGuess} You:${humanGuess}`)
    } else if (humanGuess === 'rock' && computerGuess === 'scissors') {
      setHumanScore(humanScore + 1)
      setResultFeedback(`You win!`)
      setPreviousRoundFeedback(`Computer:${computerGuess} You:${humanGuess}`)
    } else if (humanGuess === 'rock' && computerGuess === 'paper') {
      setComputerScore(computerScore + 1)
      setResultFeedback(`Computer wins!`)
      setPreviousRoundFeedback(`Computer:${computerGuess} You:${humanGuess}`)
    } else if (humanGuess === 'paper' && computerGuess === 'rock') {
      setHumanScore(humanScore + 1)
      setResultFeedback(`You win!`)
      setPreviousRoundFeedback(`Computer:${computerGuess} You:${humanGuess}`)
    } else if (humanGuess === 'paper' && computerGuess === 'scissors') {
      setComputerScore(computerScore + 1)
      setResultFeedback(`Computer wins!`)
      setPreviousRoundFeedback(`Computer:${computerGuess} You:${humanGuess}`)
    } else if (humanGuess === 'scissors' && computerGuess === 'rock') {
      setComputerScore(computerScore + 1)
      setResultFeedback(`Computer wins!`)
      setPreviousRoundFeedback(`Computer:${computerGuess} You:${humanGuess}`)
    } else if (humanGuess === 'scissors' && computerGuess === 'paper') {
      setHumanScore(humanScore + 1)
      setResultFeedback(`You win!`)
      setPreviousRoundFeedback(`Computer:${computerGuess} You:${humanGuess}`)
    }
    console.log('evaluateChoices - post-if statement', humanScore)
  }

  // click triggers a game cycle
  const onClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    let humanGuess = e.currentTarget.id

    let computerGuess = computerSelection()

    evaluateChoices(humanGuess, computerGuess)
  }

  const backText = `RETURN <------`

  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin='true' />
        <link href="https://fonts.googleapis.com/css2?family=Silkscreen:wght@400;700&display=swap" rel="stylesheet" /> 
      </Head>
        {
        gameover ? <S_Modal onClick={() => setGameover(false)}>
                    {
            <S_ModalDisplay>
               <h4>Winner!!!</h4>
              <div>
                       
                        <h5>{`Human: ${humanScore}`}</h5>
                        <h5>{`Computer: ${computerScore}`}</h5>
                        </div>  
                        <button onClick={resetClick}>Play Again</button>
                      </S_ModalDisplay>
                    }
                   </S_Modal> : ''
        }
      <S_Section>
        <S_Header>
          <h1>rock paper scissors</h1>
          <Link href='/theodinproject'><a>{ backText }</a></Link>
        </S_Header>
      <Scoreboard
        humanScore={humanScore}
        computerScore={computerScore}
        resultFeedback={resultFeedback}
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
          <h4>{resultFeedback}</h4>
          <p>{previosRoundFeedback}</p>
      </S_Choices>
      </S_Section>
    </>
  )
} 

export default Rockpaperscissors

const S_Section = styled.section`
  padding: 1rem;
  font-family: 'Silkscreen', cursive;

  a {
    color: var(--white);
    width: 4.5rem;
  }

  h4 {
    padding-top: 2rem;
    color: var(--white);
    margin: 0;
    font-size: 2rem;
    font-weight: 400;
  }
  
  p {
    padding-top: 2rem;
    color: var(--white);
    margin: 0;
  }
`

const S_Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;

   h1 {
    color: var(--white);
    font-size: calc(1rem + var(--vw_100));
    margin: 0;
  }
`

const S_Modal = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #413939cf;
`

const S_ModalDisplay = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 90%;
  height: 94%;
  background: white;
   
  div {
    margin: 1rem;
    display: flex;
    justify-content: space-between;
  }

  h5 {
    padding: 1rem;
  }
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
  font-size: 2rem;
  font-weight: 800;
  background: var(--white);
  margin-bottom: 0.5rem;
`

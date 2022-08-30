import styled from 'styled-components'
import { useState, useEffect } from 'react'

interface Props {
  grid: number
}

const Etchasketch = () => {

  const [grid, setGrid] = useState(Array(64).fill(''))

  const changeBackground = (e: React.MouseEvent<HTMLElement>) => {
    let target = e.target as HTMLInputElement;
    target.style.background = 'black';
  }

  const resetBackgrounds = () => {
    Array.prototype.forEach.call(document.getElementsByClassName('square'), function(element) {
      element.style.background = '';
  });
  }

  const handleEightbyEight = () => {
    setGrid(Array(64).fill(''))
    resetBackgrounds()
  }

  const handleSixteenBySixteen = () => {
    setGrid(Array(256).fill(''))
    resetBackgrounds()
  }

  return (
    <S_Page>
      <h1>sketch-a-mouse</h1>
      <S_Section>
        <S_Border>
          <S_GridContainer grid={grid.length}>
            {
              grid.map((index) => <div key={index} onMouseEnter={(e) => changeBackground(e)} className={'square'}></div>)
            }
          </S_GridContainer>
        </S_Border>
        <S_ButtonContainer>
          <S_FirstButton onClick={() => handleEightbyEight()} grid={grid.length}>8x8</S_FirstButton>
          <S_SecondButton onClick={() => handleSixteenBySixteen()} grid={grid.length}>16x16</S_SecondButton>
          <S_ClearButton onClick={() => resetBackgrounds()}>CLEAR</S_ClearButton>
        </S_ButtonContainer>
      </S_Section>
    </S_Page>
  )
}

export default Etchasketch

const S_Page = styled.main`
  width: 100%;
  height: 100vh;
  background: #FFF7D2;

  h1 {
    margin: 0;
    padding: 2rem;
    color: #EF270D;
    background: #fad7d7;
  }
`

const S_Section = styled.div`
  width: 100%;
  margin: 1rem 0;
`

const S_Border = styled.div`
  background: #EF270D;
  width: calc(256px + 2rem);
  height: calc(256px + 2rem);
  margin: auto;
  margin-top: 4rem;
  padding: 3rem 2rem 1rem 2rem;
  border-radius: 1rem;
`

const S_GridContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 256px;
  height: 256px;
  margin: 0 auto 2rem auto;

  div {
    width: ${(p: Props) => p.grid === 64 ? '32px' : p.grid === 256 ? '16px' : null};
    height: ${(p: Props) => p.grid === 64 ? '32px' : p.grid === 256 ? '16px' : null};
    background: #777777;
  }
`

const S_ButtonContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 4rem;
`

const S_FirstButton = styled.button`
  padding: 1rem;
  margin-right: 1rem;
  border-radius: 1rem;
  border: none;
  box-shadow: 1px 1px 1px black,
              -1px -1px 1px black,
              -1px 1px 1px black,
              1px -1px 1px black;
  background: ${(p: Props) => p.grid === 64 ? '#41C0CF' : 'white'};
`

const S_SecondButton = styled.button`
  padding: 1rem;
  margin-right: 1rem;
  border-radius: 1rem;
  border: none;
  box-shadow: 1px 1px 1px black,
              -1px -1px 1px black,
              -1px 1px 1px black,
              1px -1px 1px black;
  background: ${(p: Props) => p.grid === 256 ? '#41C0CF' : 'white'};
`

const S_ClearButton = styled.button`
  padding: 1rem;
  margin-right: 1rem;
  border-radius: 1rem;
  border: none;
  box-shadow: 1px 1px 1px black,
              -1px -1px 1px black,
              -1px 1px 1px black,
              1px -1px 1px black;
  background: white;
`
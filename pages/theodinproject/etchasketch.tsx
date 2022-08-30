import styled from 'styled-components'
import { useState, useEffect } from 'react'

interface Props {
  grid: number
}

const Etchasketch = () => {

  const [grid, setGrid] = useState(Array(64).fill(''))

  const changeBackground = (e: React.MouseEvent<HTMLElement>) => {

    let target = e.target as HTMLInputElement;
    target.style.background = 'red';
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
      <h1>etchasketch</h1>
      <S_Section>
        <S_GridContainer grid={grid.length}>
          {
            grid.map((index) => <div key={index} onMouseEnter={(e) => changeBackground(e)} className={'square'}></div>)
          }
        </S_GridContainer>
        <S_ButtonContainer>
          <button onClick={() => handleEightbyEight()}>8x8</button>
          <button onClick={() => handleSixteenBySixteen()}>16x16</button>
        </S_ButtonContainer>
      </S_Section>
    </S_Page>
  )
}

export default Etchasketch

const S_Page = styled.main`
  width: 100%;
  height: 100vh;

  h1 {
    margin: 0;
  }
`

const S_Section = styled.div`
  width: 100%;
  margin: 1rem 0;
`

const S_GridContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 256px;
  height: 256px;
  margin: 0 auto 2rem auto;

  div {
    width: ${(p: Props) => p.grid === 64 ? '30px' : p.grid === 256 ? '14px' : null};
    height: ${(p: Props) => p.grid === 64 ? '30px' : p.grid === 256 ? '14px' : null};
    background: #777777;
    border: 1px solid #7b1919;
  }
`

const S_ButtonContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;

  button {
    padding: 1rem;
    margin-right: 1rem;
    border-radius: 1rem;
    border: none;
    
  }
`
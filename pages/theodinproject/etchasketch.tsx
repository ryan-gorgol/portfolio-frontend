import styled from 'styled-components'
import { useState, useEffect } from 'react'
import handler from '../api/hello'

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
    <>
      <h1>etchasketch</h1>
      <S_GridContainer grid={grid.length}>
        {
          grid.map((index) => <div key={index} onMouseEnter={(e) => changeBackground(e)} className={'square'}></div>)
        }
      </S_GridContainer>
      <button onClick={() => handleEightbyEight()}>8x8</button>
      <button onClick={() => handleSixteenBySixteen()}>16x16</button>
    </>
  )
}

export default Etchasketch

const S_GridContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 400px;
  height: 400px;

  div {
    width: ${(p: Props) => p.grid === 64 ? '47px' : p.grid === 256 ? '22px' : null};
    height: ${(p: Props) => p.grid === 64 ? '47px' : p.grid === 256 ? '22px' : null};
    background: #777777;
    border: 1px solid #7b1919;
  }
`
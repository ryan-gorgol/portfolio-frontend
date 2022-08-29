import styled from 'styled-components'
import { useEffect, useState } from 'react';
import { equal } from 'assert';


const Calculator = () => {

  const [inputCount, setInputCount] = useState<number>(0);
  const [firstNumber, setFirstNumber] = useState<number>(-1);
  const [secondNumber, setSecondNumber] = useState<number>(-1)
  const [operator, setOperator] = useState('a')
  const [result, setResult] = useState<Number>(0)
  const [hideResult, setHideResult] = useState(true)

  function add(a: number, b: number): number {
    const first = Number(a)
    const second = Number(b)

    let result = first + second
    return result
  }
  const subtract = (a: number, b: number) => a - b
  const multiply = (a: number, b: number) => a * b
  const divide = (a: number, b: number) => a / b

  const clearCalculator = () => {
    setInputCount(0)
    setFirstNumber(-1)
    setSecondNumber(-1)
    setOperator('a')
    setResult(0)
    setHideResult(true)
  }

  const handleDelete = () => {
    return
  }

  const computeResult = () => {
    switch (operator) {
      case '+':
        setResult(add(firstNumber, secondNumber))
        break;
      case '-':
         setResult(subtract(firstNumber, secondNumber))
        break;
      case 'x':
         setResult(multiply(firstNumber, secondNumber))
        break;
      case '/':
         setResult(divide(firstNumber, secondNumber))
        break;
    } 

    setHideResult(false)
  }

  const handleSubmit = () => {
    computeResult()
  }

  const handleInput = (e: React.MouseEvent<HTMLButtonElement>) => {
    const numberRegEx = /^\d+$/;
    const operatorRegEx = /[^=]/;
    const equalsRegEx = /[=]/;
    const target = e.target as HTMLInputElement;
    
    if (inputCount === 0) {
      setInputCount(inputCount + 1)

      numberRegEx.test(target.value)
         ? setFirstNumber(target.value)
         : setInputCount(0)

    } else if (inputCount === 1) {
      setInputCount(inputCount + 1)

      operatorRegEx.test(target.value)
         ? setOperator(target.value)
         : setInputCount(1)

    } else if (inputCount === 2) {
      setInputCount(inputCount + 1)

      numberRegEx.test(target.value)
         ? setSecondNumber(target.value)
         : setInputCount(2)
    } else if (inputCount === 3) {
      setInputCount(0)
      setFirstNumber(-1)
      setSecondNumber(-1)
      setOperator('a')
      setHideResult(true)
    } 
  }

  return (
    <S_Page>
      <h2>calculator</h2>
      <S_Calculator >
        <div>
          <S_View>
            <>
              {
                firstNumber === -1
                  ? <h6></h6>
                  : <h6>{ firstNumber }</h6>
              }
            </>
            <>
              {
                operator === 'a'
                  ? <h6></h6>
                  : <h6>{ operator }</h6>
              }
            </>
            <>
              {
                secondNumber === -1
                  ? <h6></h6>
                  : <h6>{ secondNumber }</h6>
              }
            </>
          </S_View>
          <S_View>
            <>
              {
                hideResult
                  ? <h6></h6>
                  : <div>{ result }</div>
              }
            </>
          </S_View>
          <S_TopRow>
            <button
                id="clearBtn"
                onClick={() => clearCalculator()}
            >
              CLEAR
            </button>
            <button
              onClick={() => null}
            >
              DELETE
            </button>
          </S_TopRow>
          <S_BottomQuadrant>
            <button onClick={(e) => handleInput(e)} value={7}>7</button>
            <button onClick={(e) => handleInput(e)} value={8}>8</button>
            <button onClick={(e) => handleInput(e)} value={9}>9</button>
            <button onClick={(e) => handleInput(e)} value={'/'}>÷</button>

            <button onClick={(e) => handleInput(e)} value={4}>4</button>
            <button onClick={(e) => handleInput(e)} value={5}>5</button>
            <button onClick={(e) => handleInput(e)} value={6}>6</button>
            <button onClick={(e) => handleInput(e)} value={'x'}>×</button>

            <button onClick={(e) => handleInput(e)} value={1}>1</button>
            <button onClick={(e) => handleInput(e)} value={2}>2</button>
            <button onClick={(e) => handleInput(e)} value={3}>3</button>
            <button onClick={(e) => handleInput(e)} value={'-'}>−</button>

            <button onClick={(e) => handleInput(e)} value={'.'}>.</button>
            <button onClick={(e) => handleInput(e)} value={0}>0</button>
            <button onClick={(e) => handleSubmit()} value={'='}>=</button>
            <button onClick={(e) => handleInput(e)} value={'+'}>+</button>
          </S_BottomQuadrant>
        </div>
      </S_Calculator>
    </S_Page>
  )
}

export default Calculator

const S_Page = styled.main`
  width: 100vw;
  height: 100vh;
  background: var(--white);

  h2 {
    margin: 0;
    padding: 2rem;
    font-weight: 200;
    font-size: 2rem;
  }
`

const S_Calculator = styled.div`
  width: 100%;
  height: 100%;
`

const S_View = styled.div`
  height: 3rem;
  padding: 1rem;
  display: flex;
  justify-content: flex-end;
  color: var(--black);

  h6 {
    margin: 0;
    font-size: 1.2rem;
    font-weight: 300;
    letter-spacing: 0.5rem;
  }

  h5 {
    margin: 0;
    font-size: 2rem;
  }

  div {
    font-size: 2.8rem;
    padding-bottom: 0;
    margin-bottom: 1rem;
  }
`

const S_TopRow = styled.div`
  display: flex;
  justify-content: center;
  padding: 0.25rem 0.5rem;

  button {
    margin: 0;
    flex-basis: 1;
    width: 100%;
  }
`

const S_BottomQuadrant = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 0.25rem 0.25rem;

  button {
    width: 22.99%;
  }
`
import styled from 'styled-components'
import { useEffect, useState } from 'react';
import { equal } from 'assert';
import { setTarget } from 'framer-motion/types/render/utils/setters';


const Calculator = () => {

  const numberRegEx = /^\d+$/;
  const decimalRegEx = /[\.]/;
  const operatorRegEx = /[x+-/]/;
  const equalsRegEx = /[=]/;

  const [inputCount, setInputCount] = useState<number>(0);

  const [firstNumber, setFirstNumber] = useState('');
  const [secondNumber, setSecondNumber] = useState('')
  const [operator, setOperator] = useState('a')
  const [result, setResult] = useState<Number>(0)
  const [hideResult, setHideResult] = useState(true)

  useEffect(() => console.log(firstNumber, 'firstNumber'))
  useEffect(() => console.log(secondNumber, 'secondNumber'))
  useEffect(() => console.log(inputCount, 'inputCount'))

  const add = (a: string, b: string): number => Number(a) + Number(b)
  const subtract = (a: string, b: string): number => Number(a) - Number(b)
  const multiply = (a: string, b: string) => Number(a) * Number(b)
  const divide = (a: string, b: string) => Number(a) / Number(b)



  //   inputCount --> 
  //0: no entry
  //1: numerical input
  //2: decimal
  //3: numerical input
  //4: operator (x,-,+)
  //5: numerical input
  //6: decimal
  //7: numerical input
  //8: operator (=)

  const handleFirstInput = (value: string) => {
    setFirstNumber(value)
    setInputCount(1)
  }

  const handleSecondInput = (value: string) => {
    setSecondNumber(secondNumber + value)

    switch (inputCount) {
      case 5:
        setInputCount(6)
    }
  }

  const handleMultiDigit = (value: string) => {
    switch (inputCount) {
      case 1:
        setFirstNumber(firstNumber + value)
        break;
      case 2:
        setFirstNumber(firstNumber + value)
        break;
      case 6:
        setSecondNumber(secondNumber + value)
      case 7:
        setSecondNumber(secondNumber + value)

    }
  }

  const handleDecimal = (value: string) => {
    switch (inputCount) {
      case 1:
        setFirstNumber(firstNumber + value)
        setInputCount(2)
        break;
      case 5:
        setSecondNumber(value)
        setInputCount(7)
        break;
      case 6:
        setSecondNumber(secondNumber + value)
        setInputCount(7)
        break;
    }
  }

  const handleOperator = (value: string) => {
    setOperator(value)
    setInputCount(5)
  }

  const handleClear = () => {
    setInputCount(0)
    setFirstNumber('')
    setSecondNumber('')
    setOperator('a')
    setResult(0)
    setHideResult(true)
  }

  const handleDelete = () => {
    switch (inputCount) {
      case 1:
        setFirstNumber('')
        setInputCount(0)
        break;
      case 2:
        setFirstNumber(firstNumber.slice(0, -1))
        setInputCount(1)
        break;
      case 3:
        setFirstNumber(firstNumber.slice(0, -1))
        setInputCount(2)
        break;
      case 5:
        setOperator('a')
        setInputCount(3)
        break;
      case 6:
        setSecondNumber(secondNumber.slice(0, -1))
        setInputCount(5)
      case 7:
        setSecondNumber(secondNumber.slice(0, -1))
        setInputCount(6)
    }
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
    switch (inputCount) {
      case 6:
        computeResult()
        break;
      case 7:
        computeResult()
        break;
    }
  }

  const handleInput = (e: React.MouseEvent<HTMLButtonElement>) => {
    const target = e.target as HTMLInputElement;

    switch (inputCount) {
      case 0:
        numberRegEx.test(target.value)
          ? handleFirstInput(target.value)
          : null
        break;
      case 1:
        numberRegEx.test(target.value)
          ? handleMultiDigit(target.value)
          : decimalRegEx.test(target.value)
            ? handleDecimal(target.value)
            : operatorRegEx.test(target.value)
              ? handleOperator(target.value)
              : null
        break;
      case 2:
        numberRegEx.test(target.value)
          ? handleMultiDigit(target.value)
          : operatorRegEx.test(target.value)
            ? handleOperator(target.value)
            : null
          
        break;
      case 3:
        numberRegEx.test(target.value)
          ? handleMultiDigit(target.value)
          : operatorRegEx.test(target.value)
            ? handleOperator(target.value)
            : null
        break;
      case 4:
        break;
      case 5:
        numberRegEx.test(target.value)
          ? handleSecondInput(target.value)
          : null 
        // there is an opportunity to extend case 5: to create the string '0.' upon the decimal button being selected
      case 6:
        numberRegEx.test(target.value)
          ? handleMultiDigit(target.value)
          : decimalRegEx.test(target.value)
            ? handleDecimal(target.value)
            : null
        break;
      case 7:
        numberRegEx.test(target.value)
          ? handleMultiDigit(target.value)
          : null
    } 
  }

  // setInputCount(0)
  //     setFirstNumber('')
  //     setSecondNumber('')
  //     setOperator('a')
  //     setHideResult(true)

  return (
    <S_Page>
      <h2>calculator</h2>
      <S_Calculator >
        <div>
          <S_View>
            <>
              {
                firstNumber === ''
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
                secondNumber === ''
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
                  : <div>
                    {
                      result.toFixed(8)
                    }
                    </div>
              }
            </>
          </S_View>
          <S_TopRow>
            <button
                id="clearBtn"
                onClick={() => handleClear()}
            >
              CLEAR
            </button>
            <button
              onClick={() => handleDelete()}
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
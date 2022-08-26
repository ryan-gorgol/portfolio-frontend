import styled from 'styled-components'

const calculator = () => {
  return (
    <S_Page>
      <h2>calculator</h2>
      <S_Calculator >
        <div>
          <S_View>
            <h6>DEMO 4 X</h6>
            <h5>0</h5>
          </S_View>
          <S_TopRow>
            <button
                id="clearBtn"
                onClick={() => null}
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
            <button onClick={() => null} data-number>7</button>
            <button onClick={() => null} data-number>8</button>
            <button onClick={() => null} data-number>9</button>
            <button onClick={() => null} data-operator>÷</button>

            <button onClick={() => null} data-number>4</button>
            <button onClick={() => null} data-number>5</button>
            <button onClick={() => null} data-number>6</button>
            <button onClick={() => null} data-operator>×</button>

            <button onClick={() => null} data-number>1</button>
            <button onClick={() => null} data-number>2</button>
            <button onClick={() => null} data-number>3</button>
            <button onClick={() => null} data-operator>−</button>

            <button onClick={() => null} id="pointBtn">.</button>
            <button onClick={() => null} data-number>0</button>
            <button onClick={() => null} id="equalsBtn">=</button>
            <button onClick={() => null} data-operator>+</button>
          </S_BottomQuadrant>
        </div>
      </S_Calculator>
    </S_Page>
  )
}

export default calculator

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
  height: 4rem;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  color: var(--black);

  h6 {
    margin: 0;
    font-size: 1.2rem;
  }

  h5 {
    margin: 0;
    font-size: 2rem;
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
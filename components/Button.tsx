import styled from 'styled-components'


interface Props {
  children: JSX.Element,

}

const Button = ({children}: Props) => {
  return (
    <S_Button>{children}</S_Button>
  )
}

export default Button

const S_Button = styled.div`
  width: calc(100% - var(--page_border_margin_total));
  height: 2rem;
  padding: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid var(--white);
  border-radius: 0.5rem;
  margin-bottom: 1rem;
`
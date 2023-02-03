import styled from 'styled-components'


interface Props {
  title: string,
  href?: string
}

const Button = ({title, href}: Props) => {
  return (
    <S_Button>{title}</S_Button>
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

  &:hover {
    border: 1px solid var(--gray);
    transition: 0.25s;
  }
`
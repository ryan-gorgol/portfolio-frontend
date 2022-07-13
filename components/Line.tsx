import styled from 'styled-components'


interface Props {
  content: string,
  children?: JSX.Element
}

function Line({content, children}: Props) {
  return (
    <S_Line>
      {content}
      {children}
    </S_Line>
  )
}

export default Line

// consistent with ContactSection styling
const S_Line = styled.div`
  font-size: calc(1.2rem + var(--vw_50));
  line-height: auto;
  font-weight: 300;
  letter-spacing: 0.15px;
  text-align: right;
  padding-bottom: 0.5rem;
`
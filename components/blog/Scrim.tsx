import styled from 'styled-components'

interface Props {
  menuOpen: boolean,
  children: any
}

const Scrim = ({menuOpen, children}: Props) => {
  return (
    <S_Scrim menuOpen={menuOpen}>{children}</S_Scrim>
  )
}

export default Scrim

const S_Scrim = styled.div<Props>`
  width: 100%;
  position: relative;
  display: block;
  opacity: ${props => props.menuOpen ? 0 : 1};
  background: #a54141;
`
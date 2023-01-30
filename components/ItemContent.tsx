import styled from 'styled-components'
import { SnackContentType } from '../data/data'

interface Props {
  content: SnackContentType
}

const ItemContent = ({content}: Props) => {
  return (
    <S.Container>
      <S.LeadLine>
       {content?.hook}
      </S.LeadLine>
      <S.Copy>
        {content?.bait}
      </S.Copy>
    </S.Container>
  )
}

export default ItemContent

const S = {
  Container: styled.div`
    width: 100%;
  `,
  LeadLine: styled.h2`
    font-weight: 200;
    padding-bottom: 2rem;
    margin: 0;
  `,
  Copy: styled.div`
    font-weight: 200;
    letter-spacing: .9px;
  `
}
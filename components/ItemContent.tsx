import { motion } from 'framer-motion'
import styled from 'styled-components'
import { SnackContentType } from '../data/data'


interface Props {
  content: SnackContentType
}

const ItemContent = ({ content }: Props) => {

  return (
    <S.Container>
      <S.LeadLine>
       {content?.hook}
      </S.LeadLine>
      <S.Bait>
        {content?.bait}
      </S.Bait>
    </S.Container>
  )
}



export default ItemContent

const S = {
  Container: styled(motion.div)`
    width: 100%;
  `,
  LeadLine: styled.h2`
    font-weight: 400;
    padding-bottom: 2rem;
    margin: 0;
    color: var(--white);
  `,
  Bait: styled.div`
    font-weight: 200;
    letter-spacing: .9px;
    color: var(--light_gray);
  `
}
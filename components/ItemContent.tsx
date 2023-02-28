import { motion } from 'framer-motion'
import styled from 'styled-components'
import { SnackContentType } from '../data/data'


const variants = {
  start: {
    opacity: [0, 1],
    scale: [0.99, 1],
    x: [1, 0]
  },
  end: {
    opacity: [1, 0],
    scale: [1, .98],
  },
  onload: {
    opacity:[0,0]
  }
}

interface Props {
  content: SnackContentType,
  triggerAnimation: boolean
}

const ItemContent = ({ content, triggerAnimation }: Props) => {

  return (
    <S.Container
      variants={variants}
      initial='onload'
      animate={triggerAnimation ? 'end' : 'start'}
      transition={{ duration: .5 }}
    >
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
    width: calc(100% - 2rem);
    padding: 1rem;
  `,
  LeadLine: styled.h2`
    font-weight: 600;
    letter-spacing: .25px;
    padding-bottom: 2rem;
    margin: 0;
    color: var(--white_plus);
  `,
  Bait: styled.div`
    font-weight: 200;
    letter-spacing: .8px;

    color: var(--white);
  `
}
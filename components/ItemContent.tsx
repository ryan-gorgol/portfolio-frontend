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
        {
          content?.bait?.map((text, index) => {
            return <p key={index}>{text}</p>
          })
        }
      </S.Bait>
    </S.Container>
  )
}



export default ItemContent

const S = {
  Container: styled(motion.div)`
    width: calc(100% - 1rem);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  `,
  LeadLine: styled.h2`
    max-width: 500px;
    font-weight: 200;
    letter-spacing: .25px;
    padding-bottom: 1rem;
    margin: 0;
    color: var(--red);
  `,
  Bait: styled.p`
    width: 100%;
    max-width: 500px;
    margin: 0;
    font-weight: 200;
    font-size: 1rem;
    line-height: 1.75rem;
    letter-spacing: 0.9px;
    color: var(--white);
  `
}
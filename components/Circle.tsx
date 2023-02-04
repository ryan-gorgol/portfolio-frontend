import styled from 'styled-components'
import { motion } from 'framer-motion'

const variants = {
  down: {
    scale: [1, 0.85, 1],
  },
  up: {
    scale: [ 1, 0.85, 1],
  }
}

interface Props {
  triggerAnimation: boolean
}

const Circle = ({triggerAnimation}: Props) => {
  return (
    <S_Circle
      variants={variants}
      initial='down'
      animate={!triggerAnimation ? 'up' : 'down'}
      transition={{ duration: 1 }}
    />
  )
}

export default Circle

const S_Circle = styled(motion.div) <{
}>`
  width: max(100vmin, 50px);
  height: max(100vmin, 50px);
  border-radius: 50%;
  background: radial-gradient(circle, var(--red), #ec6c6c88, #ec6c6c13);
  position: absolute;
  right: -20vmax;
  bottom: -20vmax;
  z-index: 1;
`
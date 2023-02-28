import styled from 'styled-components'
import { motion } from 'framer-motion'

const variants = {
  up: {
    opacity: [0, 1]
  },
  down: {
    scale: [1, 0.85, 1],
    opacity: [1, 0]
  }
}

interface Props {
  triggerAnimation: boolean
}

const Circle = ({triggerAnimation}: Props) => {
  return (
    <S_Circle
      variants={variants}
      initial='up'
      animate={triggerAnimation ? 'down' : 'up'}
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
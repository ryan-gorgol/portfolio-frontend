import styled from 'styled-components'
import { motion } from 'framer-motion'

const variants = {
  down: {
    scale: [1, 0.7, 1],
    x: [0 , 50 , 0]
    
  },
  up: {
    scale: [ 1, 0.7, 1],
    x: [0 , 50 , 0]
  }
}

const Circle = ({ripple}) => {
  return (
      <S_Circle
        ripple={ripple}
        variants={variants}
        initial='down'
        animate={ripple ? 'up' : 'down'}
        transition={{ duration: 1.2 }}
      />
  )
}

export default Circle

const S_Circle = styled(motion.div)`
  width: max(100vmin, 50px);
  height: max(100vmin, 50px);
  border-radius: 50%;
  background: radial-gradient(circle, var(--red), #ec6c6c88, #ec6c6c25);
  position: absolute;
  left: 4rem;
  z-index: 1;
`


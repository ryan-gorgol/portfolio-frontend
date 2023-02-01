import styled from 'styled-components'
import { motion } from 'framer-motion'

const variants = {
  down: {
    scale: [1, 0.75, 1],
  },
  up: {
    scale: [ 1, 0.75, 1],
  }
}

interface Props {
  ripple: boolean,
  isMenuOpen: boolean
}

const Circle = ({ripple, isMenuOpen}: Props) => {
  return (
      <S_Circle
        variants={variants}
        initial='down'
        animate={ripple ? 'up' : 'down'}
        transition={{ duration: 1 }}
        isMenuOpen={isMenuOpen}
      />
  )
}

export default Circle

const S_Circle = styled(motion.div) <{
  isMenuOpen: boolean
}>`
  width: max(100vmin, 50px);
  height: max(100vmin, 50px);
  border-radius: 50%;
  background: ${props => props.isMenuOpen ? 'radial-gradient(circle, var(--red), #ec6c6c88, #ec6c6c13)' : 'radial-gradient(circle, var(--red), #ec6c6c28, #ec6c6c0)'};
  position: absolute;
  right: -20vmax;
  bottom: -20vmax;
  z-index: 1;
`
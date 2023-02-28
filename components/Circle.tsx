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
  let radialGradients = [
    'radial-gradient(circle, var(--red), hsl(0, 77%, 67%, 5%) 0% ,hsl(0, 0%, 0%, 1%) 100%)',
    'radial-gradient(circle, var(--red), hsl(0, 77%, 67%, 25%) 0% ,hsl(0, 0%, 0%, 1%) 100%)',
    'radial-gradient(circle, var(--red), hsl(0, 77%, 67%, 45%) 0% ,hsl(0, 0%, 0%, 1%) 100%)'
  ]

  return (
    <>
      {
        radialGradients.map((gradient, index) => {
          return (
            <S_Circle
              key={index}
              variants={variants}
              initial='up'
              animate={triggerAnimation ? 'down' : 'up'}
              transition={{ duration: 1, delay: 0.1}}
              gradient={gradient}
            />
          )
        })
      }
      
    </>
  )
}

export default Circle

const S_Circle = styled(motion.div) <{
  gradient: string
}>`
  width: max(100vmin, 50px);
  height: max(100vmin, 50px);
  border-radius: 50%;
  background: ${props => props.gradient};
  position: absolute;
  right: -20vmax;
  bottom: -20vmax;
  z-index: 1;
`
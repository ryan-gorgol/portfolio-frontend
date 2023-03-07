import styled from 'styled-components'
import { motion } from 'framer-motion'

const variants = {
  present: {
    opacity: [0, 1],
    scale: [0.75, 1]
  },
  down: {
    scale: [1, 0.75, 1],
    opacity: [1, 0]
  },
  ripple: {
    scale: [1, 0.98, 0.95, 0.98, 1],

  }
}

interface Props {
  triggerAnimation: boolean,
  isMenuOpen?: boolean
}

const Circle = ({triggerAnimation, isMenuOpen}: Props) => {
  let radialGradients = [
    'radial-gradient(circle, var(--red), hsl(0, 77%, 67%, 35%) 0% ,hsl(0, 0%, 0%, 1%) 100%)',
    'radial-gradient(circle, var(--red), hsl(0, 77%, 67%, 25%) 0% ,hsl(0, 0%, 0%, 1%) 100%)',
    'radial-gradient(circle, var(--red), hsl(0, 77%, 67%, 15%) 0% ,hsl(0, 0%, 0%, 1%) 100%)'
  ]

  return (
    <>
      {
        radialGradients.map((gradient, index) => {
          let delay = index === 0 ? 0 : index * 2
          return (
            <S_Circle
              key={index}
              variants={variants}
              initial={false}
              animate={
                triggerAnimation
                  ? isMenuOpen
                    ? 'down'
                    : 'present'
                  : 'ripple'
              }
              // animate={
              //   triggerAnimation
              //     ? 'down'
              //     : 'present'
              // }
              transition={{
                duration:
                  triggerAnimation
                    ? isMenuOpen
                      ? 1
                      : 1
                    : 6,
                delay: delay,
                repeat: Infinity
              }}
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
import styled from 'styled-components'
import { motion } from 'framer-motion'
import Card from '../Card'

interface Props {

}

const links = [
  {
    href: '/eventcharm',
    title: 'EventCharm',
    subtitle: 'UX Design / UI Develop'
  },
  {
    href: '/daybyday',
    title: 'Day By Day',
    subtitle: 'Full Stack Website'
  },
  {
    href: '/counterservice',
    title: 'CounterService',
    subtitle: 'Full Stack Web App'
  },
  {
    href: '/theodinproject',
    title: 'The Odin Project',
    subtitle: 'Full Stack Education'
  }
]

const PortfolioSection = (props: Props) => {
  return (
    <S_Portfolio
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.9 }}
    >
      <ul>
        {
          links.map((link, index) => (
            <Card
              key={index}
              href={link.href}
              title={link.title}
              subtitle={link.subtitle}
              index={index}
            />
          ))}
      </ul>
      
    </S_Portfolio>
  )
}

export default PortfolioSection

const S_Portfolio = styled(motion.section)`
  display: block;
  position: relative;
  z-index: 10;
  display: flex;
  justify-content: end;
  text-align: right;
  padding-right: 1rem;
`
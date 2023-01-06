import styled from "styled-components"
import { motion } from 'framer-motion'

interface Props {
  onClick?: any
}

const HomeSection = ({onClick}: Props) => {

  return (
    <S_Home
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.9 }}
      onClick={onClick}
    >
      <div>I enjoy</div>
      <div>DESIGNING experiences</div>
      <div>DEVELOPING ideas</div>
      <div>DEPLOYING products</div>
         
      
    </S_Home>
  )
}

export default HomeSection

const S_Home = styled(motion.section)`
  display: block;
  position: relative;
  z-index: 10;
  padding-right: 1rem;
`
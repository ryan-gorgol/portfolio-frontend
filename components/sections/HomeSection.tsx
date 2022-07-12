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
      <S_Line>I enjoy</S_Line>
      <S_Line>DESIGNING experiences</S_Line>
      <S_Line>DEVELOPING ideas</S_Line>
      <S_Line>DEPLOYING products</S_Line>
         
      
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

const S_Line = styled.div`
  font-size: 1.2rem;
  line-height: auto;
  font-weight: 300;
  letter-spacing: 0.15px;
  text-align: right;
  padding-bottom: 0.5rem;
`
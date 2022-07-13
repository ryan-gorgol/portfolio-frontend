import styled from "styled-components"
import { motion } from 'framer-motion'

import Line from '../Line'

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
      <Line content='I enjoy'></Line>
      <Line content='DESIGNING experiences'></Line>
      <Line content='DEVELOPING ideas'></Line>
      <Line content='DEPLOYING products'></Line>
         
      
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
import styled from 'styled-components'
import { motion } from 'framer-motion'

import Line from '../Line'

interface Props {

}

const InfoSection = (props: Props) => {
  return (
    <S_Info
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.9 }}
    >
      <div>
        <S_SpanTitle>What I Do</S_SpanTitle>
        <Line content='User Experience'/>
        <Line content='User Interface'/>
        <Line content='Wireframing'/>
        <Line content='Rapid Prototyping'/>
        <Line content='CI/CD'/>
        <Line content='Full Stack Development'/>
      </div>
      
      
    </S_Info>
  )
}

export default InfoSection

const S_Info = styled(motion.div)`
  width: 100%;
  position: relative;
  z-index: 10;
  display: flex;
  justify-content: right; 
  align-items: flex-end;

  div {
    padding-right: 1rem;
    display: flex;
    flex-direction: column;
    justify-content: right; 
    align-items: flex-end;
  }
`

const S_SpanTitle = styled.div`
  display: block;
  position: relative;
  padding: 0 0 .5rem 0;
  line-height: calc(65px + var(--vw_50));
  text-transform: uppercase;
  font-size: calc(1.6rem + var(--vw_25));
  font-weight: 400;
`
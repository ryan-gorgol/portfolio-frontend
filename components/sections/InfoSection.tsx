import styled from 'styled-components'
import { motion } from 'framer-motion'

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
        <S_Span> User Interface </S_Span>
        <S_Span> User Experience </S_Span>
        <S_Span> Wireframing </S_Span>
        <S_Span>Rapid Prototyping</S_Span>
        <S_Span>CI/CD</S_Span>
        <S_Span>Headless CMS</S_Span>
        <S_Span>E-Commerce</S_Span>
      </div>
      
      
    </S_Info>
  )
}

export default InfoSection

const S_Info = styled(motion.div)`
  width: 100%;
  height: 100%;
  position: relative;
  z-index: 10;
  display: flex;
  justify-content: right; 
  align-items: flex-end;

  div {
    padding-right: 1rem;
  }
`

const S_SpanTitle = styled.div`
  display: block;
  position: relative;
  padding-top: .25rem;
  text-transform: uppercase;
  font-size: var(--font_size_portfolio_section_title);
  font-weight: 600;
`

const S_Span = styled.div`
  display: block;
  position: relative;
  padding-top: .25rem;
  text-transform: uppercase;
  font-size: var(--font_size_info_section);
`
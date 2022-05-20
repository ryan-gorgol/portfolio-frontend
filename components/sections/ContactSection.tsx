import styled from 'styled-components'
import { motion } from 'framer-motion'

interface Props {

}

const ContactSection = (props: Props) => {
  return (
    <S_Contact
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 0.5, delay: 0.9 }}
    >
      <S_Line href="mailto: ryangorgol@gmail.com">email</S_Line>
      <S_Line href="https://www.linkedin.com/in/ryan-gorgol/">linkedIn</S_Line>
      <S_Line href="https://github.com/ryan-gorgol">gitHub</S_Line>
      
    </S_Contact>
  )
}

export default ContactSection

const S_Contact = styled(motion.div)`
  position: relative;
  margin-top: 50%;
  margin-left: 50%;
`

const S_Line = styled(motion.a)`
  display: block;
  font-size: 1.2rem;
  line-height: 2rem;
  font-weight: 300;
  letter-spacing: 0.15px;
`
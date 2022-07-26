import styled from 'styled-components'
import { motion } from 'framer-motion'

import Line from '../Line'

interface Props {

}

const ContactSection = (props: Props) => {
  return (
    <S_Contact
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 0.5, delay: 0.9 }}
    >
      <div>
        <S_Link href="mailto: ryangorgol@gmail.com">EMAIL</S_Link>
        <S_Link href="https://www.linkedin.com/in/ryan-gorgol/">LINKEDIN</S_Link>
        <S_Link href="https://github.com/ryan-gorgol">GITHUB</S_Link>
      </div>
      
    </S_Contact>
  )
}

export default ContactSection

const S_Contact = styled(motion.div)`
  position: relative;
  z-index: 10;
  display: flex;
  justify-content: right; 
  align-items: flex-end;

  div {
    display: flex;
    flex-direction: column;
    padding-right: 1rem;
  }
`

const S_Link = styled(motion.a)`
  // consistent with Line component styling
  font-size: calc(1.2rem + var(--vw_50));
  line-height: auto;
  font-weight: 300;
  letter-spacing: 0.15px;
  text-align: right;
  padding-bottom: 0.5rem;

  &:hover {
    transition: 0.25s;
    color: var(--red);
  }
`
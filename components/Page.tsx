import { useEffect, useRef } from 'react'
import styled from 'styled-components'

interface Props {
  children: JSX.Element,
  isOpen: boolean
}


const Page = ({ children, isOpen }: Props) => {
  
  const pageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (pageRef.current) {

      const style = getComputedStyle(pageRef.current);
      const pageHeight = style.getPropertyValue('--page_height');
      console.log('Page Height:', pageHeight);
    }
  }, [])

  return (
    <S_Page ref={pageRef} isOpen={isOpen}>
      { children }
    </S_Page>
  )
}

export default Page

const S_Page = styled.div<{
  isOpen: boolean
}>`
  width: var(--page_width);
  height: var(--page_height);
  display: flex;
  justify-content: center;
  align-items: center;
  background: #303030;
  margin: ${props => props.isOpen ? ` 1rem auto` : 'var(--page_border_margin_content)'};
  color: var(--white);
  background: var(--black);
`


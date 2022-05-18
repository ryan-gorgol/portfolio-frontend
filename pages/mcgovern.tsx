import styled from 'styled-components'
import { useState } from 'react'

import BlogHeader from '../components/blog/BlogHeader'
import BlogMenuButton from '../components/blog/BlogMenuButton'
import BlogMenu from '../components/blog/BlogMenu'
import Scrim from '../components/blog/Scrim'
import StoryTitle from '../components/blog/StoryTitle'
import { fetchAPI } from '../lib/api'
import ReactMarkdown from 'react-markdown'

interface Props {
  mcgovern: any
}

const McGovern = ({ mcgovern }: Props) => {

  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <S_MG>
      <BlogHeader>
        <BlogMenuButton
          onClick={() => setMenuOpen(!menuOpen)}
          menuOpen={menuOpen}
        />
      </BlogHeader>
      <Scrim menuOpen={menuOpen}>
        <StoryTitle
          title={mcgovern.attributes.title}
          subtitle={mcgovern.attributes.subtitle}
          imgSrc={'/McGovern_Design.jpg'}
          imgAlt={'Design, the art of redesigning from a users perspective'}
        /> 
        <CopyWrap>
          <MG_Copy>
            
            <ReactMarkdown>
              {mcgovern.attributes.content}
            </ReactMarkdown>
          </MG_Copy>


        </CopyWrap>
        
      </Scrim>
      <BlogMenu menuOpen={menuOpen}/>
    </S_MG>
  )
}

export default McGovern

export async function getStaticProps() {
  const [mcgovernRes] = await Promise.all([
    fetchAPI("/mcgovern", {
      populate: {
        mcgovern: "*",
      },
    }),
  ]);

  return {
    props: {
      mcgovern: mcgovernRes.data,
    },
    revalidate: 1,
  };
}

const S_MG = styled.main`
  width: 100vw;
  height: 200vh;
  background: white;
`

const CopyWrap = styled.div`
  width: 100%;
  display: flex;
  justify-content: right;
`

const MG_Copy = styled.div`
  width: 100%;
  background: white;
  padding: 0 1rem;
`


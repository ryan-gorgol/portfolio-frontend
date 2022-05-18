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

      <ContentWrap>
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
      </ContentWrap>
      
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
  background: white;
`

const ContentWrap = styled.div`
  position: relative;
  width: 100%;
  height: 100%
`

const CopyWrap = styled.div`
  max-width: 800px;
  margin: 2rem auto 0 auto;
  padding-bottom: 4rem;
`

const MG_Copy = styled.div`
  width: 100%;
  background: white;
  padding: 0 1rem;
`


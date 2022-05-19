import styled from 'styled-components'
import { useState } from 'react'

import BlogHeader from '../components/blog/BlogHeader'
import BlogMenuButton from '../components/blog/BlogMenuButton'
import Scrim from '../components/blog/Scrim'
import StoryTitle from '../components/blog/StoryTitle'
import BlogMenu from '../components/blog/BlogMenu'
import ReactMarkdown from 'react-markdown'
import { fetchAPI } from '../lib/api'

interface Props {
  menuOpen: boolean,
  daybyday: any
}


const DayByDay = ({daybyday}: Props) => {

  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <S_DBD>
      <BlogHeader>
        <BlogMenuButton
          onClick={() => setMenuOpen(!menuOpen)}
          menuOpen={menuOpen}
        />
      </BlogHeader>

      <StoryTitle
        title={daybyday.attributes.title}
        subtitle={daybyday.attributes.subtitle}
        imgSrc={'/DBD_Design.jpg'}
        imgAlt={'Design, the art of redesigning from a users perspective'}
      />

      <DBD_Copy>
        <ReactMarkdown>
          
          {daybyday.attributes.content}
          
        </ReactMarkdown>
      </DBD_Copy>

      <BlogMenu menuOpen={menuOpen} />
      
    </S_DBD>
  )
}

export default DayByDay

export async function getStaticProps() {
  const [daybydayRes] = await Promise.all([
    fetchAPI("/daybyday", {
      populate: {
        daybyday: "*",
      },
    }),
  ]);

  return {
    props: {
      daybyday: daybydayRes.data,
    },
    revalidate: 1,
  };
}

const S_DBD = styled.main`
  width: 100vw;
  background: white;
`

const DBD_Copy = styled.div`
  max-width: 800px;
  background: white;
  padding: 1rem 1rem 4rem 1rem;
`

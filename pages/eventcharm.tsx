import styled from 'styled-components'
import { useEffect, useState } from 'react'
import ReactMarkdown from "react-markdown"

import BlogMenuButton from '../components/blog/BlogMenuButton'
import BlogHeader from '../components/blog/BlogHeader'
import Scrim from '../components/blog/Scrim'
import StoryTitle from '../components/blog/StoryTitle'
import BlogMenu from '../components/blog/BlogMenu'

import { fetchAPI } from '../lib/api'

interface Props {
  menuOpen: boolean,
  eventcharm: any
}

const EventCharm = ({eventcharm}: Props) => {

  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => console.log(eventcharm))
  return (
    <S_EC>
      <BlogHeader>
        <BlogMenuButton
          onClick={() => setMenuOpen(!menuOpen)}
          menuOpen={menuOpen}
        />
      </BlogHeader>
      <Scrim menuOpen={menuOpen}>

      <ContentWrap>
        <StoryTitle
            title={eventcharm.attributes.title}
            subtitle={eventcharm.attributes.subtitle}
            imgSrc={'/EC_Design.jpg'}
            imgAlt={'Design, the art of redesigning from a users perspective'}
        />
        <CopyWrap>
          <EC_Copy>
            <ReactMarkdown>
              
              {eventcharm.attributes.content}
              
            </ReactMarkdown>
          </EC_Copy>
        </CopyWrap>
      </ContentWrap>
                  
      </Scrim>
      <BlogMenu menuOpen={menuOpen} />
    </S_EC>
  )
}

export default EventCharm

export async function getStaticProps() {
  const [eventcharmRes] = await Promise.all([
    fetchAPI("/eventcharm", {
      populate: {
        eventcharm: "*",
      },
    }),
  ]);

  return {
    props: {
      eventcharm: eventcharmRes.data,
    },
    revalidate: 1,
  };
}


const S_EC = styled.main`
  width: 100%;
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

const EC_Copy = styled.div`
  width: 100%;
  background: white;
  padding: 0 1rem;
`
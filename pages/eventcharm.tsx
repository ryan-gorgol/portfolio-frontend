import styled from 'styled-components'
import { useEffect, useState } from 'react'

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
            <p>{eventcharm.attributes.content}</p>
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
  width: 100vw;
  height: 200vh;
  background: white;
`

const ContentWrap = styled.div`
  position: relative;
  max-width: 900px;
`

const CopyWrap = styled.div`
  width: calc(100vw  - 2rem);
  margin: 2rem auto;
  background: #66f2c37b;
  
  display: flex;
  justify-content: right;
`

const EC_Copy = styled.div`
  width: 85%;
  background: white;
  padding-left: 1rem;

`
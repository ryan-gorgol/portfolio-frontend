import styled from 'styled-components'
import { useEffect, useState } from 'react'
import ReactMarkdown from "react-markdown"

import BlogMenuButton from '../components/blog/BlogMenuButton'
import BlogHeader from '../components/blog/BlogHeader'
import Scrim from '../components/blog/Scrim'
import StoryTitle from '../components/blog/StoryTitle'
import BlogMenu from '../components/blog/BlogMenu'

import { fetchAPI } from '../lib/api'
import Article from '../components/blog/Article'

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

      <Article
        title={eventcharm.attributes.title}
        subtitle={eventcharm.attributes.subtitle}
        body={eventcharm.attributes.body}
      />

      <BlogMenu menuOpen={menuOpen} />

    </S_EC>
  )
}

export default EventCharm

export async function getStaticProps() {
  const [eventcharmRes] = await Promise.all([
    fetchAPI("/eventcharm", {
      populate: "*"
    }),
  ]);

  return {
    props: {
      eventcharm: eventcharmRes.data,
    },
    revalidate: 1,
  };
}


const S_EC = styled.div`
  width: 100vw;
  background: white;
`
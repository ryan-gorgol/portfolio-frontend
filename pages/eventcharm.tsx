import styled from 'styled-components'
import { useEffect, useState } from 'react'

import BlogHeader from '../components/blog/BlogHeader'
import BlogMenu from '../components/blog/BlogMenu'
import Article from '../components/blog/Article'
import Page from '../components/blog/Page'

import { fetchAPI } from '../lib/api'

interface Props {
  menuOpen: boolean,
  eventcharm: any
}

const EventCharm = ({eventcharm}: Props) => {

  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => console.log(eventcharm))
  return (
    <Page>
      <>
        <BlogHeader
          onClick={() => setMenuOpen(!menuOpen)}
          menuOpen={menuOpen}
        />
        <Article
          title={eventcharm.attributes.title}
          subtitle={eventcharm.attributes.subtitle}
          body={eventcharm.attributes.body}
          imgSrc={'/EC_Design.jpg'}
          imgAlt={'Design, the art of redesigning from a users perspective'}
        />
        <BlogMenu menuOpen={menuOpen} />
      </>
    </Page>
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
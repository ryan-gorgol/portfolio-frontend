import styled from 'styled-components'
import { useState } from 'react'

import BlogHeader from '../components/blog/BlogHeader'
import Article from '../components/blog/Article'
import BlogMenu from '../components/blog/BlogMenu'
import Page from '../components/blog/Page'
import { fetchAPI } from '../lib/api'
import LinkButton from '../components/blog/LinkButton'

interface Props {
  menuOpen: boolean,
  daybyday: any
}


const DayByDay = ({daybyday}: Props) => {

  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <Page>
      <>
        <BlogHeader
          onClick={() => setMenuOpen(!menuOpen)}
          menuOpen={menuOpen}
        />
        <Article
          title={daybyday.attributes.title}
          subtitle={daybyday.attributes.subtitle}
          body={daybyday.attributes.body}
          imgSrc={'/DBD_Design.jpg'}
          imgAlt={'Design, the art of redesigning from a users perspective'}
        />
        <LinkButton
          href={'https://daybydayaesthetics.com/'}
          content={'Visit Day By Day'}
        />
        <BlogMenu menuOpen={menuOpen} />
      </>
    </Page>
  )
}

export default DayByDay

export async function getStaticProps() {
  const [daybydayRes] = await Promise.all([
    fetchAPI("/dbd", {
      populate: "*",
    }),
  ]);

  return {
    props: {
      daybyday: daybydayRes.data,
    },
    revalidate: 1,
  };
}
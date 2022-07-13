import { useState } from 'react'

import BlogHeader from '../components/blog/BlogHeader'
import BlogMenu from '../components/blog/BlogMenu'
import { fetchAPI } from '../lib/api'
import Article from '../components/blog/Article'
import Page from '../components/blog/Page'

interface Props {
  mcgovern: any
}

const McGovern = ({ mcgovern }: Props) => {

  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <Page>
      <>
        <BlogHeader
          onClick={() => setMenuOpen(!menuOpen)}
          menuOpen={menuOpen}
        />
        <Article
          title={mcgovern.attributes.title}
          subtitle={mcgovern.attributes.subtitle}
          body={mcgovern.attributes.body}
          imgSrc={'/McGovern_Design.jpg'}
          imgAlt={'Design, the art of redesigning from a users perspective'}
        /> 
        <BlogMenu menuOpen={menuOpen} />
      </>
    </Page>
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


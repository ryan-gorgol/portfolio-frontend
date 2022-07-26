// libs
import { useState } from 'react'
import { fetchAPI } from '../lib/api'

//components 
import BlogHeader from '../components/blog/BlogMenu'
import BlogMenu from '../components/blog/BlogMenu'
import Article from '../components/blog/Article'
import Page from '../components/blog/Page'

// FOR SOME REASON: BlogHeader only expects menuOpen: Props, onClick is not a part of this type ON THIS PAGE... WHY?

const CounterService = ({counterservice}) => {

  const [menuOpen, setMenuOpen] = useState(false);
  

  return (
    <Page>
      <>
        <BlogHeader
          onClick={() => setMenuOpen(!menuOpen)}
          menuOpen={menuOpen}
        />
        <Article
          title={`counterservice.attributes.title`}
          subtitle={`counterservice.attributes.subtitle`}
          body={`counterservice.attributes.body`}
          imgSrc={'/EC_Design.jpg'}
          imgAlt={'Design, the art of redesigning from a users perspective'}
        />
        <BlogMenu menuOpen={menuOpen} />
      </>
    </Page>
  )
}

export default CounterService

export async function getStaticProps() {
  const [counterserviceRes] = await Promise.all([
    fetchAPI("/counterservice", {
      populate: "*"
    }),
  ]);

  return {
    props: {
      counterservice: counterserviceRes.data,
    },
    revalidate: 1,
  };
}
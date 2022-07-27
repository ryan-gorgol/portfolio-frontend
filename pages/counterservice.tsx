// libs
import { useEffect, useState } from 'react'
import styled from 'styled-components'
import { fetchAPI } from '../lib/api'

//components 
import BlogHeader from '../components/blog/BlogHeader'
import BlogMenu from '../components/blog/BlogMenu'
import Article from '../components/blog/Article'
import Page from '../components/blog/Page'
import Link from 'next/link'
import LinkButton from '../components/blog/LinkButton'

interface Props {
  counterservice: any
}

const CounterService = ({counterservice}: Props) => {

  const [menuOpen, setMenuOpen] = useState(false);
  
  useEffect(() => {
    console.log(counterservice, 'counterservice')
  }, [counterservice])

  return (
    <Page>
      <>
        <BlogHeader
          onClick={() => setMenuOpen(!menuOpen)}
          menuOpen={menuOpen}
        />
        <Article
          title={counterservice.attributes.title}
          subtitle={counterservice.attributes.subtitle}
          body={counterservice.attributes.body}
          imgSrc={'/counterservice_large.jpg'}
          imgAlt={'Design, the art of redesigning from a users perspective'}
        />
        <LinkButton
          href={'https://counterservice-grgl.netlify.app'}
          content={'Visit CounterService'}
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

const S_Link = styled.div`
  margin: 0 auto;
  padding-bottom: 4rem;
  text-align: center;

  a {
    border: 1px solid var(--black);
    border-radius: 0.5rem;
    padding: 1rem;
    font-size: var(--font_size_home_section + var(--vw_50));
  }
`
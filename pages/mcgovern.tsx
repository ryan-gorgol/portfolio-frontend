import styled from 'styled-components'
import { useState } from 'react'

import BlogHeader from '../components/blog/BlogHeader'
import BlogMenuButton from '../components/blog/BlogMenuButton'
import BlogMenu from '../components/blog/BlogMenu'
import Scrim from '../components/blog/Scrim'
import StoryTitle from '../components/blog/StoryTitle'



const McGovern = () => {

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
        <StoryTitle
          title={'McGovern & Company'}
          subtitle={'E-Commerce'}
          imgSrc={'/McGovern_Design.jpg'}
          imgAlt={'Design, the art of redesigning from a users perspective'}
        /> 
        <CopyWrap>
          <MG_Copy>
            <p>
              McGovern & Company needed help bringing their site back to life. After a single meeting it was obvious that the site had performance issues. After evaluating the Lighthouse scores, saying the performance was OK would have been generous. There was clearly opportunity to enliven the e-commerce brand by reinvigorating the site.
            </p>
            <p>
              The overall problem reared its head quickly. The theme upon which this Shopify site depended on, was out of date. Oh and it was deprecated, that too. Shopify had just announced the introduction of Online Store 2.0, a large step forward in how Shopify enables themes to be built and maintained. But this announcement made the already out-dated theme a living dinosaur, just waiting to go extinct.
            </p>
            <p>
              So we came up with a plan. Because of key business concerns, the site couldnt be redone or upgraded immediately. There simply wasnt enough bandwith for the business to handle a marketing/branding excercise in the midst of peak in-store retail season. So while we put the updated theme on hold, I went to work patching up the leaky ship. 
            </p>
          </MG_Copy>
        </CopyWrap>
        
      </Scrim>
      <BlogMenu menuOpen={menuOpen}/>
    </S_MG>
  )
}

export default McGovern

const S_MG = styled.main`
  width: 100vw;
  height: 200vh;
  background: white;
`

const CopyWrap = styled.div`
  width: calc(100vw  - 2rem);
  margin: 2rem auto;
  background: #C0DDDD;
  display: flex;
  justify-content: right;
`

const MG_Copy = styled.div`
  width: 85%;
  background: white;
  padding-left: 1rem;

`


import styled from 'styled-components'
import { useState } from 'react'

import BlogHeader from '../components/blog/BlogHeader'
import BlogMenuButton from '../components/blog/BlogMenuButton'
import Scrim from '../components/blog/Scrim'
import StoryTitle from '../components/blog/StoryTitle'
import BlogMenu from '../components/blog/BlogMenu'

interface Props {
  menuOpen: boolean
}


const DayByDay = () => {

  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <S_DBD>
      <BlogHeader>
        <BlogMenuButton
          onClick={() => setMenuOpen(!menuOpen)}
          menuOpen={menuOpen}
        />
      </BlogHeader>
      <Scrim menuOpen={menuOpen}>
        <StoryTitle
          title={'Day By Day Aesthetics'}
          subtitle={'Full Stack Development'}
          imgSrc={'/DBD_Design.png'}
          imgAlt={'Design, the art of redesigning from a users perspective'}
        />
        <CopyWrap>
          <DBD_Copy>
            <p>
              Day By Day Aesthetics needed to advance its cause with a website. After multiple interviews & designs, the website specs became apparent. The site needed to to serve as a digital business card, only allow users to the ability to text for a consultation or visit an external site to learn more about Rett Awareness. Furthermore, the sites hosting was limited to a particular hosting solution. 
            </p>
            <p>A Next.js Frontend with a Strapi headless CMS as a backend enabled a robust, and expandable website architecture. Next also allowed static site generation, which was critical for delivering production code to the osting solution.</p>
          </DBD_Copy>
        </CopyWrap>
        
      </Scrim>
      <BlogMenu menuOpen={menuOpen} />
    </S_DBD>
  )
}

export default DayByDay

const S_DBD = styled.main`
  width: 100vw;
  height: 200vh;
  background: white;
`

const DBD_Title = styled.div`
  padding: 1rem;
  font-size: var(--font_size_blog_title);
  font-weight: 500;
`

const DBD_Subtitle = styled.div`
  padding-left: 1rem;
  padding-bottom: 2rem;
  font-size: var(--font_size_blog_subtitle);
  font-weight: 200;
`

const ImgWrap = styled.div`
  width: calc(100vw  - 2rem);
  height: calc((100vw - 2rem) * 0.5625);
  position: relative;
  margin: 0 auto;
`

const CopyWrap = styled.div`
  width: calc(100vw  - 2rem);
  margin: 2rem auto;
  background: #d1bee5a7;
  display: flex;
  justify-content: right;
`

const DBD_Copy = styled.div`
  width: 85%;
  background: white;
  padding-left: 1rem;

`

const Menu = styled.div<Props>`
  width: 100%;
  position: fixed;
  top: 8rem;
  display: ${props => props.menuOpen ? 'block' : 'none'};
  opacity: ${props => props.menuOpen ? '1' : '0'};
  transition: 0.25s;

  ul {
    padding: 1rem;
  }
`

const S_Card = styled.div`
  width; 100%;
  margin-bottom: 1rem;
  box-sizing: border-box;

  &:hover {
    color: var(--red);
  }
`

const S_Title = styled.div`
  font-size: 1.75rem;
  font-weight: 100;
  text-align: left;
`

const S_SubTitle = styled.div`
  font-size: 0.8rem;
  font-weight: 600;
  text-align: left;
`
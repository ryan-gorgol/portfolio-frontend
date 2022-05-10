import styled from 'styled-components'

import Image from 'next/image'

interface Props {
  title: string,
  subtitle: string,
  imgSrc: string,
  imgAlt: string,

}

const StoryTitle = ({title, subtitle, imgSrc, imgAlt}: Props) => {
  return (
    <S_StoryTitle>
      <S_Title>{title}</S_Title>
      <S_Subtitle>{subtitle}</S_Subtitle>
        <ImgWrap>
          <Image
            src={imgSrc}
            alt={imgAlt}
            layout='fill'
          />
        </ImgWrap>
    </S_StoryTitle>
  )
}

export default StoryTitle

const S_StoryTitle = styled.div`
  width: 100%;
`

const S_Title = styled.div`
  padding: 1rem;
  font-size: var(--font_size_blog_title);
  font-weight: 500;
`

const S_Subtitle = styled.div`
  padding-left: 1rem;
  padding-bottom: 2rem;
  font-size: var(--font_size_blog_subtitle);
  font-weight: 200;
`

const ImgWrap = styled.div`
  width: calc(100vw  - 2rem);
  height: calc((100vw - 2rem) * 0.5625);
  display: block;
  position: relative;
  margin: 0 auto;
`
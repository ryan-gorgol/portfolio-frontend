import styled from 'styled-components'

import Image from 'next/image'

interface Props {
  title: string,
  subtitle: string,
  imgSrc: string,
  imgAlt: string,
}

const StoryImage = ({title, subtitle, imgSrc, imgAlt}: Props) => {
  return (
    <S_StoryImage>
      <ImgWrap>
        <Image
          height={540}
          width={960}
          src={imgSrc}
          alt={imgAlt}
          layout='responsive'
        />
      </ImgWrap>
    </S_StoryImage>
  )
}

export default StoryImage

const S_StoryImage = styled.div`
  width: 100%;
`

const ImgWrap = styled.div`
  position: relative;
  margin: 0 auto;
  width: 100%;
`
// LIBS
import styled from 'styled-components'

// COMPONENTS
import StoryImage from './StoryImage'
import ReactMarkdown from 'react-markdown'

interface Props {
  title: string,
  subtitle: string,
  body: string,
  imgSrc: string,
  imgAlt: string
}

function Article({ title, subtitle, body, imgSrc, imgAlt }: Props) {
  

  return (
    <S_Article>
      <StoryImage
          title={title}
          subtitle={subtitle}
          imgSrc={imgSrc}
          imgAlt={imgAlt}
      />

      <Copy>
        <S_Title>{title}</S_Title>
        <S_Subtitle>{subtitle}</S_Subtitle>
        <ReactMarkdown
          components={{
            p: ({ node, ...props }) => <p style={{
              lineHeight: 'calc(1.6rem + 0.25vw)',
              fontSize: 'calc(1rem + 0.25vw)',
            }} {...props} />
          }}
        >
          
          {body}
          
        </ReactMarkdown>
      </Copy>
    </S_Article>
  )
}

export default Article

const S_Article = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const Copy = styled.div`
  max-width: 800px;
  background: white;
  padding: 1rem 1rem 4rem 1rem;
`

const S_Title = styled.div`
  margin-top: 1rem;
  padding: 1rem 0;
  font-size: var(--font_size_blog_title);
  font-weight: 500;
`

const S_Subtitle = styled.div`
  padding-bottom: 2rem;
  font-size: var(--font_size_blog_subtitle);
  font-weight: 200;
`
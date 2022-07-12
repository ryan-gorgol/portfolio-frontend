// LIBS
import styled from 'styled-components'

// COMPONENTS
import StoryTitle from '../blog/StoryTitle'
import ReactMarkdown from 'react-markdown'

interface Props {
  title: string,
  subtitle: string,
  body: string
}

function Article({title, subtitle, body}: Props) {
  return (
    <S_Article>
      <StoryTitle
          title={title}
          subtitle={subtitle}
          imgSrc={'/EC_Design.jpg'}
          imgAlt={'Design, the art of redesigning from a users perspective'}
      />

      <Copy>
        <ReactMarkdown>
          
          {body}
          
        </ReactMarkdown>
      </Copy>
    </S_Article>
  )
}

export default Article

const S_Article = styled.div`
  
`

const Copy = styled.div`
  max-width: 800px;
  background: white;
  padding: 1rem 1rem 4rem 1rem;
`
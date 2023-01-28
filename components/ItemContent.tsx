import styled from 'styled-components'

const ItemContent = () => {
  return (
    <S.Container>
      <S.LeadLine>
        I would like to use minimal text to express maximal ideas.
      </S.LeadLine>
      <S.Copy>
        This topic should not be terribly long. Maybe we could have about three to four short sentences. It would be best if we could limit the amount of words needed to convey the idea. Like, wow, we need to talk to this guy because of the work.
      </S.Copy>
    </S.Container>
  )
}

export default ItemContent

const S = {
  Container: styled.div`
    width: 100%;
  `,
  Title: styled.h1`
    color: #bcdbff;
    font-weight: 400;
    padding: 1rem 0;
  `,
  LeadLine: styled.h2`
    font-weight: 300;
  `,
  Copy: styled.div`
    font-weight: 200;
    letter-spacing: .5px;
  `
}
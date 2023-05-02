import React from 'react'
import styled from 'styled-components'

interface Props {
  date: string
  venue: string
  weather: string
  firstPitch: string
  excitementScore: number
}

const Matchup = ({date, venue, weather, firstPitch, excitementScore}: Props) => {
  return (
    <S.EventInfo>

      <S.Overview>
        <S.Date>{date.slice(0, date.length)}</S.Date>
        <S.Venue>{venue.slice(0, venue.length - 1)}</S.Venue>
        <S.Weather>{weather.slice(0, weather.length - 1)}</S.Weather>
        <S.FirstPitch>{firstPitch.slice(0, firstPitch.length - 1)}</S.FirstPitch>

      </S.Overview>

      <S.Score>
        <h6>Overall Action</h6>
        <div>{excitementScore}</div>
      </S.Score>

    </S.EventInfo>
  )
}

export default Matchup

const S = {
  EventInfo: styled.div`
    width: 100%;
    height: 12rem;
    background: #0E3386;
    color: white;
    display: flex;
    flex-direction: column;
    padding: 1rem 0.5rem;
    box-shadow: inset 0px -1px 5px #0b2561,
                inset 0px 02px 10px #0b2561;
  `,
  Overview: styled.div`
    
  `,
  Date: styled.h2`
    margin: 0;
    padding: 0 1rem;
    color: #e5e5e5;
  `,
  Venue: styled.div`
    margin: 0;
    padding: 1rem 1rem 0.5rem 1rem;
    color: #e5e5e5;
    font-weight: 200;
    font-size: 1rem;
    text-transform: uppercase;
  `,
  Weather: styled.div`
    margin: 0;
    padding: 0 1rem;
    color#e5e5e5;
    font-weight: 100;
    font-size: 0.75rem;

  `,
  FirstPitch: styled.div`
    margin: 0;
    padding: 0.5rem 1rem;
    color#e5e5e5;
    font-weight: 100;
    font-size: 0.75rem;
  `,
  Score: styled.div`
    margin-top: 0.5rem;
    padding: 0.5rem;
    width: calc(100% - 2rem);
    height: 6rem;
    diplay: flex;
    flex-wrap: nowrap;

    h6 {
      margin: 0;
      margin-left: 0.5rem;
      margin-bottom: 0.5rem;
    }

    div {
      box-sizing: border-box;
      margin-left: 0.5rem;
      display: flex;
      border: 1px solid #CC3433;
      border-radius: 0.25rem;
      width: fit-content;
      padding: 0.5rem;
    }
`
}
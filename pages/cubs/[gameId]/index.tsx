// pages/cubs/[gameId].js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Page from '../../../components/Page';
import styled from 'styled-components';

const BoxScore = ({ boxScore }: any) => {

  console.log(boxScore, 'box')

  const homeTeamName = boxScore?.teams?.home?.team?.clubName;
  const awayTeamName = boxScore?.teams?.away?.team?.clubName;

  const homeStartingPitcherId = boxScore?.teams?.home?.pitchers?.[0];
  const awayStartingPitcherId = boxScore?.teams?.away?.pitchers?.[0];

  const [homeStartingPitcher, setHomeStartingPitcher] = useState('')
  const [awayStartingPitcher, setAwayStartingPitcher] = useState('')
  const [gameOffenseScore, setGameOffenseScore] = useState({ home: 0, away: 0 });
  const [gameDefenseScore, setGameDefenseScore] = useState({ home: 0, away: 0 });

  useEffect(() => {
    const fetchPitcherData = async (id: number) => {
      const apiUrl = `https://statsapi.mlb.com/api/v1/people/${id}`;
      try {
        const response = await axios.get(apiUrl);
        const playerData = response.data.people[0];
        return `${playerData?.firstName} ${playerData?.lastName}`;
      } catch (error) {
        console.error(error);
        return '';
      }
    };

    if (homeStartingPitcherId) {
      fetchPitcherData(homeStartingPitcherId).then((name) => setHomeStartingPitcher(name));
    }
    if (awayStartingPitcherId) {
      fetchPitcherData(awayStartingPitcherId).then((name) => setAwayStartingPitcher(name));
    }
  }, [homeStartingPitcherId, awayStartingPitcherId]);
  

  useEffect(() => {
    const gameEventAnalysis = () => {
      const homeTeamStats = boxScore?.teams?.home?.teamStats;
      const awayTeamStats = boxScore?.teams?.away?.teamStats;

      const homeTeam = boxScore?.teams?.home;

      const isCubsHome = homeTeam?.team?.abbreviation === 'CHC';
      const cubsStats = isCubsHome ? homeTeamStats : awayTeamStats;
      const opponentStats = isCubsHome ? awayTeamStats : homeTeamStats;

      const battingWeights = {
        homeRuns: [1, 2],
        hits: [0.25, 0.5],
        doubles: [0.5, 1],
        triples: [0.75, 1.5],
        stolenBases: [1, 2],
        rbi: [1, 2]
      };

      const pitchingWeights = {
        strikeOuts: [0.5, 1],
        groundOuts: [0.25, 0.5],
        airOuts: [0.25, 0.5]
      };

      const calculateBattingScore = (team1Stats: any, team2Stats: any, weights: any) => {
        let homeScore = 0;
        let awayScore = 0;
        for (const factor in weights) {
          const team1Weight = isCubsHome ? weights[factor][1] : weights[factor][0];
          const team2Weight = isCubsHome ? weights[factor][0] : weights[factor][1];

          homeScore += (homeTeamStats.batting[factor] || homeTeamStats.fielding[factor] || 0) * team1Weight;
          awayScore += (awayTeamStats.batting[factor] || awayTeamStats.fielding[factor] || 0) * team2Weight;
        }
        return { homeScore, awayScore };
      };

      const calculatePitchingScore = (team1Stats: any, team2Stats: any, weights: any) => {
        let homeScore = 0;
        let awayScore = 0;
        for (const factor in weights) {
          const team1Weight = isCubsHome ? weights[factor][1] : weights[factor][0];
          const team2Weight = isCubsHome ? weights[factor][0] : weights[factor][1];

          homeScore += (homeTeamStats.pitching[factor] || 0) * team1Weight;
          awayScore += (awayTeamStats.pitching[factor] || 0) * team2Weight;
        }
        return { homeScore, awayScore };
      };

      const battingScores = calculateBattingScore(opponentStats, cubsStats, battingWeights);
      const pitchingScores = calculatePitchingScore(opponentStats, cubsStats, pitchingWeights);

      return { battingScores, pitchingScores };
    };

    const { battingScores, pitchingScores } = gameEventAnalysis();
    setGameOffenseScore({ home: battingScores.homeScore, away: battingScores.awayScore });
    setGameDefenseScore({ home: pitchingScores.homeScore, away: pitchingScores.awayScore });

  }, [boxScore]);



  return (
      <S.Page>
        <S.Team>
          <S.TeamName>{awayTeamName}</S.TeamName>
          <S.Pitcher>SP {awayStartingPitcher}</S.Pitcher>
        <S.Scores>
          <div>
            <h4>Offense</h4>
            
            <S.Badge>{gameOffenseScore.away}</S.Badge>
          </div>
          
          <div>
            <h4>Defense</h4>
            <S.Badge>{gameDefenseScore.away}</S.Badge>
          </div>
          </S.Scores> 
        </S.Team>
        <S.Team>
          <S.TeamName>{homeTeamName}</S.TeamName>
          <S.Pitcher>SP {homeStartingPitcher}</S.Pitcher>
        <S.Scores>
          <div>
            <h4>Offense</h4>
            <S.Badge>{gameOffenseScore.home}</S.Badge>
          </div>
          <div>
            <h4>Defense</h4>
            <S.Badge>{gameDefenseScore.home}</S.Badge>
            </div>
          </S.Scores> 
        </S.Team>
      </S.Page>
  )
};

export default BoxScore

export async function getServerSideProps(context: any) {

  const gameId = context.query.gameId
  const apiUrl = `http://statsapi.mlb.com/api/v1/game/${gameId}/boxscore`

  try {
    const response = await axios.get(apiUrl)
    const boxScore = response.data

    return {
      props: {
        boxScore: boxScore,
      }
    }
  } catch (error) {
    console.error(error)

    return {
      props: {  
        boxScore: {},
      }
    }
  }
}

const S = {
  Page: styled.main`
    width: 100%;
    height: var(--vh_full_height);
    background: white;
    color: black;
    display: flex;
    
  `,
  Team: styled.div`
    width: 100%;
    height: 6rem;
    padding: 1rem;
  `,
  TeamName: styled.h1`
    margin: 0;
  `,
  Pitcher: styled.h2`
    margin: 0;
    color: gray;
    font-weight: 300;
  `,
  Scores: styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;

    div {
      display: flex;
      align-items: center;
      width: 5rem;
    }

    h4 {
      min-width: 5rem;
    }
  `,
  Badge: styled.div`
    border: 2px solid blue; 
    border-radius: 0.25rem;
    padding: 0.5rem;
    min-width: 1rem;
    min-height: 1rem;
    display: flex;
    justify-content: center;
    align-items: center;

  `
}

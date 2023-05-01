// pages/cubs/[gameId].tsx
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';

const BoxScore = ({ boxScore, lineScore }: any) => {

  console.log(lineScore)

  // gather key data
  const homeTeamName = boxScore?.teams?.home?.team?.clubName;
  const awayTeamName = boxScore?.teams?.away?.team?.clubName;
  const homeScore = boxScore?.teams?.home?.teamStats?.batting?.runs
  const awayScore = boxScore?.teams?.away?.teamStats?.batting?.runs

  // calculate these variables as data returned by the api is inconsistent
  let weather = '';
  let venue = '';
  let firstPitch = '';
  let date = '';

  boxScore?.info.forEach((item: any, index: number, array: any[]) => {

    if (index === array.length - 1) {
      date = item.label
    }

    switch (item.label) {
      case 'Weather':
        weather = item.value
        break
      case 'Venue':
        venue = item.value
        break
      case 'First pitch':
        firstPitch = item.value
        break
      default:
        break
    }
  })

  // startingPitcher's need a seperate API call
  const homeStartingPitcherId = boxScore?.teams?.home?.pitchers?.[0];
  const awayStartingPitcherId = boxScore?.teams?.away?.pitchers?.[0];

  const [homeStartingPitcher, setHomeStartingPitcher] = useState('')
  const [awayStartingPitcher, setAwayStartingPitcher] = useState('')

  // state for UI rendering
  const [gameOffenseScore, setGameOffenseScore] = useState({ home: 0, away: 0 });
  const [gameDefenseScore, setGameDefenseScore] = useState({ home: 0, away: 0 });
  const [competitiveGame, setCompetitiveGame] = useState(0);
  const [isGameScoreVisible, setIsGameScoreVisible] = useState(false);

  const calculateExcitementScore = () => {
    const offenseScore = (gameOffenseScore.home + gameOffenseScore.away) / 2;
    const defenseScore = (gameDefenseScore.home + gameDefenseScore.away) / 2;

    const excitementScore =  (competitiveGame + offenseScore + defenseScore) / 2
    return excitementScore;
  };

  const calculateCompetitiveGame = () => {
    const homeTeamAbbreviation = boxScore?.teams?.home?.team?.abbreviation;
    const isCubsHome = homeTeamAbbreviation === 'CHC';
    const cubsScore = isCubsHome ? homeScore : awayScore;
    const opponentScore = isCubsHome ? awayScore : homeScore;

    const calculateLeadChanges = (lineScore) => {
      let leadChanges = 0;
      let previousLead: 'home' | 'away' | 'tied' | null = null;
      let homeTotalRuns = 0;
      let awayTotalRuns = 0;

      for (const inning of lineScore.innings) {
        awayTotalRuns += parseInt(inning.away.runs, 10);
        const currentLeadAfterTopInning = homeTotalRuns === awayTotalRuns ? 'tied' : (homeTotalRuns > awayTotalRuns ? 'home' : 'away');

        if (previousLead !== null && previousLead !== currentLeadAfterTopInning) {
          leadChanges += 1;
        }

        previousLead = currentLeadAfterTopInning;

        if (inning.home.runs !== undefined) {
          homeTotalRuns += parseInt(inning.home.runs, 10);
          const currentLeadAfterBottomInning = homeTotalRuns === awayTotalRuns ? 'tied' : (homeTotalRuns > awayTotalRuns ? 'home' : 'away');

          if (previousLead !== null && previousLead !== currentLeadAfterBottomInning) {
            leadChanges += 1;
          }

          previousLead = currentLeadAfterBottomInning;
        }
      }

      return leadChanges;
    };

    const isPitchingDuel = (boxScore) => {
      const homePitchers = Object.values(boxScore?.teams?.home?.players || {});
      const awayPitchers = Object.values(boxScore?.teams?.away?.players || {});

      const allPitchers = [...homePitchers, ...awayPitchers];

      const startingPitchers = allPitchers.filter(
        (player: any) => player.stats.pitching.inningsPitched >= 5
      );

      console.log(startingPitchers, 'SPs')

      return startingPitchers.every((pitcher: any) => {
        const inningsPitched = pitcher.stats.pitching.inningsPitched;
        const earnedRuns = pitcher.stats.pitching.earnedRuns;

        const ERA = (earnedRuns / inningsPitched) * 9;

        return ERA <= 2.5;
      });
    };


    let competitiveness = 0;

    // Scoring margin
    const margin = cubsScore - opponentScore;
    if (margin >= 3) {
      competitiveness += 35;
    } else if (margin >= 1 && margin <= 2) {
      competitiveness += 25;
    } else if (margin >= -2 && margin <= -1) {
      competitiveness += 5;
    } else if (margin >= -5 && margin <= -3) {
      competitiveness -= 10;
    } else if (margin <= -6) {
      competitiveness -= 15;
    }

    // Overall scoring
    const totalRuns = cubsScore + opponentScore;
    if (totalRuns > 12) {
      competitiveness += 30;
    } else if (totalRuns > 8) {
      competitiveness += 20;
    } else if (totalRuns > 5) {
      competitiveness += 10;
    }

    // Lead changes
    const leadChanges = calculateLeadChanges(lineScore);
    if (leadChanges >= 7) {
      competitiveness += 75;
    } else if (leadChanges >= 4) {
      competitiveness += 50;
    } else if (leadChanges >= 1) {
      competitiveness += 25;
    }

    // Pitching duel
    if (isPitchingDuel(boxScore)) {
      competitiveness += 30;
    }

    setCompetitiveGame(competitiveness)
  };

useEffect(() => {
    calculateCompetitiveGame()
}, [])

  const handleToggleGameScoreVisibility = () => {
    if (isGameScoreVisible) {
      setIsGameScoreVisible(false);
    } else {
      if (window.confirm('Reveal data?')) {
        setIsGameScoreVisible(true);
      }
    }
  };

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

    const offenseWeights = {
      rbi: 3,
      homeRuns: 3,
      hits: 1,
      doubles: 2,
      triples: 3,
      stolenBases: 5,
      atBats: 0.5,
      baseOnBalls: 2,
      hitByPitch: 5,
      flyOuts: 1.5,
      groundOuts: 1.5,
      sacBunts: 10,
      sacFlies: 6.5
    };

    const defenseWeights = {
      assists: 1.8,
      caughtStealing: 8,
      errors: 5,
      passedBall: 10,
      groundOuts: 3.5,
      airOuts: 3.5,
      strikeOuts: 5,
      completedGames: 10
    };

    const calculateScore = (homeTeamStats: any, awayTeamStats: any, weights: any, statCategories: string[]) => {
      let homeScore = 0;
      let awayScore = 0;
      for (const factor in weights) {
        for (const statCategory of statCategories) {
          homeScore += (homeTeamStats[statCategory][factor] || 0) * weights[factor];
          awayScore += (awayTeamStats[statCategory][factor] || 0) * weights[factor];
        }
      }
      return { homeScore: Math.ceil(homeScore), awayScore: Math.ceil(awayScore) };
    };


    const offenseScores = calculateScore(homeTeamStats, awayTeamStats, offenseWeights, ['batting']);
    const defenseScores = calculateScore(homeTeamStats, awayTeamStats, defenseWeights, ['pitching', 'fielding']);

    return { offenseScores, defenseScores };
  };

  const { offenseScores, defenseScores } = gameEventAnalysis();
  setGameOffenseScore({ home: offenseScores.homeScore, away: offenseScores.awayScore });
  setGameDefenseScore({ home: defenseScores.homeScore, away: defenseScores.awayScore });

}, [boxScore])



  return (
    <>
      <S.EventInfo>
        <S.Date>{date.slice(0, date.length)}</S.Date>
        <S.Venue>{venue.slice(0, venue.length - 1)}</S.Venue>
        <S.Weather>{weather.slice(0, weather.length - 1)}</S.Weather>
        <S.FirstPitch>{firstPitch.slice(0, firstPitch.length - 1)}</S.FirstPitch>
        <S.ExcitementScore>
          <h2>Action Score</h2>
          <S.Badge>{calculateExcitementScore()}</S.Badge>
        </S.ExcitementScore>
      </S.EventInfo>

      <S.Page>
        <S.Team>
          <S.TeamName>{awayTeamName}</S.TeamName>
          <S.Pitcher>SP {awayStartingPitcher}</S.Pitcher>
          <S.Scores>
            <div>
              <h4>Offense Action</h4>
              
              <S.Badge>{gameOffenseScore.away}</S.Badge>
            </div>
            
            <div>
              <h4>Defense Action</h4>
              <S.Badge>{gameDefenseScore.away}</S.Badge>
            </div>
          </S.Scores> 

          <S.GameScore onClick={handleToggleGameScoreVisibility}>
            {isGameScoreVisible && (
              <>
                <h4>{awayScore}</h4>
              </>
            )}
          </S.GameScore>

        </S.Team>
        <S.Team>
          <S.TeamName>{homeTeamName}</S.TeamName>
          <S.Pitcher>SP {homeStartingPitcher}</S.Pitcher>
          <S.Scores>
            <div>
              <h4>Offense Action</h4>
              <S.Badge>{gameOffenseScore.home}</S.Badge>
            </div>
            <div>
              <h4>Defense Action</h4>
              <S.Badge>{gameDefenseScore.home}</S.Badge>
            </div>
          </S.Scores> 

          <S.GameScore onClick={handleToggleGameScoreVisibility}>
            {isGameScoreVisible && (
              <>
                <h4>{homeScore}</h4>
              </>
            )}
          </S.GameScore>

        </S.Team>
      </S.Page>
    </>
  )
};

export default BoxScore

export async function getServerSideProps(context: any) {
  const gameId = context.query.gameId;
  const boxScoreApiUrl = `http://statsapi.mlb.com/api/v1/game/${gameId}/boxscore`;
  const lineScoreApiUrl = `http://statsapi.mlb.com/api/v1/game/${gameId}/linescore`;

  try {
    const [boxScoreResponse, lineScoreResponse] = await Promise.all([
      axios.get(boxScoreApiUrl),
      axios.get(lineScoreApiUrl),
    ]);

    const boxScore = boxScoreResponse.data;
    const lineScore = lineScoreResponse.data;

    return {
      props: {
        boxScore: boxScore,
        lineScore: lineScore,
      },
    };
  } catch (error) {
    console.error(error);

    return {
      props: {
        boxScore: {},
        lineScore: {},
      },
    };
  }
}

const S = {
  EventInfo: styled.div`
    width: 100%;
    height: 100%;
    background: #0E3386;
    color: white;
    display: flex;
    flex-direction: column;
    padding: 1rem 0.5rem;
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
  Page: styled.main`
    width: var(--vw_full_width);
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
    border: 2px solid #0E3386; 
    border-radius: 0.25rem;
    padding: 0.5rem;
    min-width: 2rem;
    max-width: 3rem;
    min-height: 2rem;
    max-height: 3rem;
    display: flex;
    justify-content: center;
    align-items: center;

  `,
  GameScore: styled.div`
    margin-top: 1rem;
    padding: 1rem;
    width: calc(100% - 2rem);
    height: 10rem;
    border: 2px solid #0E3386;
    border-radius: 0.25rem;
  `,
  ExcitementScore: styled.div`
    margin-top: 0.5rem;
    padding: 0.5rem;
    width: calc(100% - 2rem);
    height: 5rem;
    diplay: flex;
    flex-wrap: nowrap;

    h2 {
      margin: 0;
      padding-left: 0.25rem;
      color: #e5e5e5;
    }

    div {
      display: flex;
    }
  `
}

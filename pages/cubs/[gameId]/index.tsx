// pages/cubs/[gameId].tsx
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';

const BoxScore = ({ boxScore, lineScore }: any) => {

  console.log(boxScore)

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
      date = item.label;
      console.log(date, 'date')
    }

    switch (item.label) {
      case 'Weather':
        weather = item.value;
        break;
      case 'Venue':
        venue = item.value;
        break;
      case 'First pitch':
        firstPitch = item.value;
        break;
      default:
        break;
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

    const excitementScore = competitiveGame + offenseScore + defenseScore;
    return excitementScore;
  };

  const calculateCompetitiveGame = () => {
    const homeTeamAbbreviation = boxScore?.teams?.home?.team?.abbreviation;
    const isCubsHome = homeTeamAbbreviation === 'CHC';
    const cubsScore = isCubsHome ? homeScore : awayScore;
    const opponentScore = isCubsHome ? awayScore : homeScore;

    const calculateLeadChanges = (lineScore) => {
      let leadChanges = 0
      let previousLead: 'home' | 'away' | null = null

      for (const inning of lineScore.innings) {
        const homeRuns = parseInt(inning.home.runs, 10);
        const awayRuns = parseInt(inning.away.runs, 10);

        const currentLead = homeRuns > awayRuns ? 'home' : 'away';
        if (previousLead && previousLead !== currentLead) {
          leadChanges += 1;
        }
        previousLead = currentLead
      }

      return leadChanges
    }

    const isPitchingDuel = (boxScore) => {
      const homePitchers = Object.values(boxScore?.teams?.home?.players || {});
      const awayPitchers = Object.values(boxScore?.teams?.away?.players || {});
      const allPitchers = [...homePitchers, ...awayPitchers];

      const startingPitchers = allPitchers.filter(
        (player: any) => player.stats.pitching && player.stats.pitching.note === 'W'
      );

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
      competitiveness += 2;
    } else if (margin >= 1 && margin <= 2) {
      competitiveness += 2;
    } else if (margin >= -2 && margin <= -1) {
      competitiveness += 1;
    } else if (margin >= -5 && margin <= -3) {
      competitiveness += 0;
    } else if (margin <= -6) {
      competitiveness -= 1;
    }


    // Overall scoring
    const totalRuns = cubsScore + opponentScore;
    if (totalRuns > 12) {
      competitiveness += 1.25;
    } else if (totalRuns > 8) {
      competitiveness += 0.75;
    } else if (totalRuns > 5) {
      competitiveness += 0.5;
    }


    // Lead changes
    const leadChanges = calculateLeadChanges(lineScore);
    if (leadChanges >= 7) {
      competitiveness += 0.75;
    } else if (leadChanges >= 4) {
      competitiveness += 0.5;
    } else if (leadChanges >= 1) {
      competitiveness += 0.25;
    }


    // Pitching duel
    if (isPitchingDuel(boxScore)) {
      competitiveness += 1;
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
      homeRuns: 3.3,
      hits: 0.9,
      doubles: 2.2,
      triples: 15,
      stolenBases: 10,
      atBats: 0.3,
      baseOnBalls: 2,
      hitByPitch: 10,
      flyOuts: 1.5,
      groundOuts: 1.5,
      sacBunts: 10,
      sacFlies: 6.5
    };

    const defenseWeights = {
      assists: 1.8,
      caughtStealing: 8,
      chances: 0.3,
      errors: 5,
      passedBall: 10,
      groundOuts: 3.5,
      airOuts: 3.5,
      strikeOuts: 4,
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
        <span>{date}</span>
        <span>{venue}</span>
        <span>{weather}</span>
        <span>{firstPitch}</span>
        <S.ExcitementScore>
          <h4>Excitement Score:</h4>
          <S.Badge>{calculateExcitementScore()}</S.Badge>
        </S.ExcitementScore>
      </S.EventInfo>
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
              <h4>Offense</h4>
              <S.Badge>{gameOffenseScore.home}</S.Badge>
            </div>
            <div>
              <h4>Defense</h4>
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
    background: blue;
    color: white;
    display: flex;
    flex-direction: column;

    span {
      padding: 0.5rem;
      width: 15rem;
    }
  `,
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
    border: 2px solid blue;
    border-radius: 0.25rem;
  `,
  ExcitementScore: styled.div`
    padding: 0.5rem;
    width: calc(100% - 2rem);
    height: 5rem;
    border: 2px solid blue;
    border-radius: 0.25rem;
    diplay: flex;
    flex-wrap: nowrap;

    h4 {
      width: 10rem;
      margin: 0;
    }
  `
}

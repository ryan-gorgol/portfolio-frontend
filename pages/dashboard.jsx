import React from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { useRouter } from 'next/router';

import Page from '../components/Page';

const Dashboard = ({ cubsGames }) => {

  const router = useRouter();

  const handleClick = (gameId) => {
    console.log(gameId, 'gameId')
    router.push(`/cubs/${gameId}`);
  };

  // Filter concluded games and sort them by date
  const concludedCubsGames = cubsGames
    .filter((game) => game.status.detailedState === 'Final')
    .sort((a, b) => {
      const dateA = new Date(a.gameDate);
      const dateB = new Date(b.gameDate);
      return dateB - dateA;
    });

  return (
    <Page isOpen>
      <S.Container>
        {concludedCubsGames.map((game) => {
          const gameDate = new Date(game.gameDate).toLocaleDateString();
          const gameTime = new Date(game.gameDate).toLocaleTimeString();
          const awayScore = game.teams.away.score;
          const homeScore = game.teams.home.score;

          return (
            <S.Game
            key={game.gamePk}
            onClick={() => handleClick(game.gamePk)}
            >
              <h1>{gameDate}</h1>
              <h2>
                {game.teams.away.team.name} 
              </h2>
              <h2>
                {game.teams.home.team.name}
              </h2>
              <p>{gameTime}</p>
            </S.Game>
          );
        })}
      </S.Container>
    </Page>
  );
};

export default Dashboard;

export async function getServerSideProps() {

  const startDate = '2023-03-01';
  const endDate = '2023-10-01';
  const teamId = 112; // Chicago Cubs team ID
  const apiUrl = `http://statsapi.mlb.com/api/v1/schedule?sportId=1&team_ids=${teamId}&startDate=${startDate}&endDate=${endDate}`;

  try {
    const response = await axios.get(apiUrl);
    const allGames = response.data.dates.flatMap((date) => date.games);
    
    // Filter games for only Chicago Cubs games
    const cubsGames = allGames.filter(
      (game) =>
        game.teams.away.team.id === teamId || game.teams.home.team.id === teamId
    );

    return {
      props: {
        cubsGames: cubsGames,
      },
    };
  } catch (error) {
    console.error(error);

    return {
      props: {
        cubsGames: [],
      },
    };
  }
}

const S = {
  Container: styled.div`
    width: 100%;
    height: 100%;
  `,
  Game: styled.div`
    margin-bottom: 1rem;
  `,
};
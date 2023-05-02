import React from 'react'
import axios from 'axios'
import Game from '../../../components/cubs/Game'

export default function BoxScore({ boxScore, lineScore }: any) {
  return (
    <Game boxScore={boxScore} lineScore={lineScore} />
  );
}

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

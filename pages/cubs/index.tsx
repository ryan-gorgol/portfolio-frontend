// pages/cubs/[gameId].js
import React from 'react';
import axios from 'axios';
import Page from '../../components/Page';

const BoxScore = ({ boxScore }: any) => {
  // Render the box score data as needed

  console.log(boxScore, 'box')

  return (
    <Page isOpen>
      <div>
       
      </div>
    </Page>
  );
};

export default BoxScore;

export async function getServerSideProps(context: any) {
  const gameId = context.params.gameId;
  const apiUrl = `http://statsapi.mlb.com/api/v1/game/${gameId}/boxscore`;

  try {
    const response = await axios.get(apiUrl);
    const boxScore = response.data;

    return {
      props: {
        boxScore: boxScore,
      },
    };
  } catch (error) {
    console.error(error);

    return {
      props: {
        boxScore: {},
      },
    };
  }
}

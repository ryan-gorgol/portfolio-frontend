// pages/api/boxscore.js
import axios from 'axios';

export default async function handler(req, res) {
  const gameId = req.query.gameId;
  const apiUrl = `http://statsapi.mlb.com/api/v1/game/${gameId}/boxscore`;

  try {
    const response = await axios.get(apiUrl);
    const boxScore = response.data;

    console.log("Box score data from MLB API:", boxScore);

    res.status(200).json(boxScore);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to fetch box score data' });
  }
}

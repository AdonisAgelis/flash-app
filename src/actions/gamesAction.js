import axios from 'axios';
import { popularGamesURL, newGamesURL, upcomingGamesURL } from '../api';

// Action Creator
export const loadGames = () => async dispatch => {
  // Fetch using axios
  const popularData = await axios.get(popularGamesURL());
  const newData = await axios.get(newGamesURL());
  const upcomingData = await axios.get(upcomingGamesURL());

  dispatch({
    type: 'FETCH_GAMES',
    payload: {
      popular: popularData.data.results,
      new: newData.data.results,
      upcoming: upcomingData.data.results,
    },
  });
};

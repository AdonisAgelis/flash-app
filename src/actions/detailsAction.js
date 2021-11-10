import axios from 'axios';
import { gameDetailsURL, screenshotsURL } from '../api';

export const loadDetails = id => async dispatch => {
  dispatch({
    type: 'LOADING_DETAILS',
  });

  const detailsData = await axios.get(gameDetailsURL(id));
  const screenshotsData = await axios.get(screenshotsURL(id));

  dispatch({
    type: 'FETCH_GAMES_DETAILS',
    payload: {
      details: detailsData.data,
      screenshots: screenshotsData.data,
    },
  });
};

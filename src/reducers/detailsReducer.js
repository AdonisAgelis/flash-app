const initialState = {
  gameDetails: {},
  gameScreenshots: {},
};

const detailsReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_GAMES_DETAILS':
      return {
        ...state,
        gameDetails: action.payload.details,
        gameScreenshots: action.payload.screenshots,
      };
    default:
      return { ...state };
  }
};

export default detailsReducer;

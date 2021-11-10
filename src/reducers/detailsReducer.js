const initialState = {
  gameDetails: {},
  gameScreenshots: {},
  isLoading: true,
};

const detailsReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_GAMES_DETAILS':
      return {
        ...state,
        gameDetails: action.payload.details,
        gameScreenshots: action.payload.screenshots,
        isLoading: false,
      };
    case 'LOADING_DETAILS':
      return {
        ...state,
        isLoading: true,
      };
    default:
      return { ...state };
  }
};

export default detailsReducer;

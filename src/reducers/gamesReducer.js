const initialState = {
  popularGames: [],
  newGames: [],
  upcomingGames: [],
  searchedGames: [],
};

const gamesReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_GAMES':
      return {
        ...state,
        popularGames: action.payload.popular,
        newGames: action.payload.new,
        upcomingGames: action.payload.upcoming,
      };
    case 'SEARCH_GAMES':
      return {
        ...state,
        searchedGames: action.payload.searched,
      };
    case 'CLEAR_SEARCH':
      return {
        ...state,
        searchedGames: [],
      };
    default:
      return { ...state };
  }
};

export default gamesReducer;

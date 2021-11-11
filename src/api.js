// BASE URL
const base_url = `https://api.rawg.io/api/games?key=${process.env.REACT_APP_API_KEY}`;

// Get date
const getCurrentMonth = () => {
  const month = new Date().getMonth() + 1;
  return month < 10 ? `0${month}` : month;
};

const getCurrentDay = () => {
  const day = new Date().getDate();
  return day < 10 ? `0${day}` : day;
};

// Current day/month/year
const currentYear = new Date().getFullYear();
const currentMonth = getCurrentMonth();
const currentDay = getCurrentDay();
const currentDate = `${currentYear}-${currentMonth}-${currentDay}`;
const lastYear = `${currentYear - 1}-${currentMonth}-${currentDay}`;
const nextYear = `${currentYear + 1}-${currentMonth}-${currentDay}`;

// Popular games
const popularGames = `&dates=${lastYear},${currentDate}&ordering=-rating&page_size=12`;
const newGames = `&dates${lastYear},${currentDate}&ordering=-released&page_size=12`;
const upcomingGames = `&dates=${currentDate},${nextYear}&ordering=-added&page_size=12`;

// API calls for games
export const popularGamesURL = () => `${base_url}${popularGames}`;
export const newGamesURL = () => `${base_url}${newGames}`;
export const upcomingGamesURL = () => `${base_url}${upcomingGames}`;
// API call for games' details
export const gameDetailsURL = game_id =>
  `https://api.rawg.io/api/games/${game_id}?key=${process.env.REACT_APP_API_KEY}`;
// API call for games' screenshots
export const screenshotsURL = game_id =>
  `https://api.rawg.io/api/games/${game_id}/screenshots?key=${process.env.REACT_APP_API_KEY}`;
// API call to search games
export const searchGamesURL = game_name =>
  `${base_url}&search=${game_name}&page_size=12`;

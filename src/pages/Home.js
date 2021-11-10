import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import GameDetails from '../components/GameDetails';
// Redux
import { useDispatch, useSelector } from 'react-redux';
import { loadGames } from '../actions/gamesAction';
// Components
import Game from '../components/Game';
// Styles and animations
import styled from 'styled-components';
import { motion, AnimatePresence, AnimateSharedLayout } from 'framer-motion';

const Home = () => {
  // Get current location
  const location = useLocation();
  const pathId = location.pathname.split('/')[2];

  // Fetch games
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadGames());
  }, [dispatch]);

  const { popularGames, newGames, upcomingGames } = useSelector(
    state => state.gamesReducer
  );

  return (
    <GameList>
      <AnimateSharedLayout type="crossfade">
        <AnimatePresence>
          {pathId && <GameDetails pathId={pathId} />}
        </AnimatePresence>
        <h2>Popular Games</h2>
        <Games>
          {popularGames.map(game => (
            <Game
              name={game.name}
              releaseDate={game.released}
              image={game.background_image}
              id={game.id}
              key={game.id}
            />
          ))}
        </Games>
        <h2>New Games</h2>
        <Games>
          {newGames.map(game => (
            <Game
              name={game.name}
              releaseDate={game.released}
              image={game.background_image}
              id={game.id}
              key={game.id}
            />
          ))}
        </Games>
        <h2>Upcoming Games</h2>
        <Games>
          {upcomingGames.map(game => (
            <Game
              name={game.name}
              releaseDate={game.released}
              image={game.background_image}
              id={game.id}
              key={game.id}
            />
          ))}
        </Games>
      </AnimateSharedLayout>
    </GameList>
  );
};

const GameList = styled(motion.div)`
  padding: 0rem 5rem;
  h2 {
    padding: 5rem 0rem;
  }
`;

const Games = styled(motion.div)`
  min-height: 80vh;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));
  grid-column-gap: 3rem;
  grid-row-gap: 5rem;
`;

export default Home;

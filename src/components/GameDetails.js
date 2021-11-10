import React from 'react';
// Styles and animations
import styled from 'styled-components';
import { motion } from 'framer-motion';
// Redux
import { useSelector } from 'react-redux';

const GameDetails = () => {
  // Get data
  const { gameDetails, gameScreenshots, isLoading } = useSelector(
    state => state.detailsReducer
  );

  return (
    <>
      {!isLoading && (
        <CardShadow>
          <Details>
            <Stats>
              <div className="rating">
                <h3>{gameDetails.name}</h3>
                <p>Rating: {gameDetails.rating}</p>
              </div>
              <Info>
                <h3>Platforms</h3>
                <Platforms>
                  {gameDetails.platforms.map(data => (
                    <h3 key={data.platform.id}>{data.platform.name}</h3>
                  ))}
                </Platforms>
              </Info>
            </Stats>
            <Media>
              <img
                src={gameDetails.background_image}
                alt={gameDetails.background_image}
              />
            </Media>
            <Description>
              <p>{gameDetails.description_raw}</p>
            </Description>
            <div className="gallery">
              {gameScreenshots.results.map(data => (
                <img key={data.id} src={data.image} alt={data.image} />
              ))}
            </div>
          </Details>
        </CardShadow>
      )}
    </>
  );
};

const CardShadow = styled(motion.div)`
  width: 100%;
  min-height: 100vh;
  overflow-y: scroll;
  background: rgba(0, 0, 0, 0.5);
  position: fixed;
  top: 0;
  left: 0;
  &::-webkit-scrollbar {
    width: 0.5rem;
  }
  &::-webkit-scrollbar-thumb {
    background-color: #ee4e0f;
  }
  &::-webkit-scrollbar-track {
    background: white;
  }
`;

const Details = styled(motion.div)`
  width: 80%;
  border-radius: 1rem;
  padding: 2rem 5rem;
  background: white;
  position: absolute;
  left: 10%;
  color: black;
  img {
    width: 100%;
  }
`;

const Stats = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Info = styled(motion.div)`
  text-align: center;
`;

const Platforms = styled(motion.div)`
  display: flex;
  justify-content: space-evenly;
  img {
    margin-left: 3rem;
  }
`;

const Media = styled(motion.div)`
  margin-top: 5rem;
  img {
    width: 100%;
  }
`;

const Description = styled(motion.div)`
  margin: 5rem 0rem;
`;

export default GameDetails;

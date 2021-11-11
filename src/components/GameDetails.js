import React from 'react';
import { useHistory } from 'react-router-dom';
import { smallImage } from '../util';
// Styles and animations
import styled from 'styled-components';
import { motion } from 'framer-motion';
// Redux
import { useSelector } from 'react-redux';
// Platform icons
import playstation from '../img/playstation.svg';
import xbox from '../img/xbox.svg';
import steam from '../img/steam.svg';
import nintendo from '../img/nintendo.svg';
import apple from '../img/apple.svg';
import gamepad from '../img/gamepad.svg';
// Star ratings
import starEmpty from '../img/star-empty.png';
import starFull from '../img/star-full.png';

const GameDetails = ({ pathId }) => {
  const history = useHistory();
  // Get game data
  const { gameDetails, gameScreenshots, isLoading } = useSelector(
    state => state.detailsReducer
  );
  // Exit Details Card
  const exitDetailsHandler = e => {
    const element = e.target;
    if (element.classList.contains('shadow')) {
      document.body.style.overflow = 'auto';
      history.push('/');
    }
  };
  // Configure platform icons
  const getPlatform = platform => {
    switch (platform) {
      case 'PlayStation 4':
        return playstation;
      case 'PlayStation 5':
        return playstation;
      case 'Xbox Series S/X':
        return xbox;
      case 'Xbox S':
        return xbox;
      case 'Xbox One':
        return xbox;
      case 'PC':
        return steam;
      case 'Nintendo Switch':
        return nintendo;
      case 'iOS':
        return apple;
      case 'macOS':
        return apple;
      default:
        return gamepad;
    }
  };
  // Configure star ratings
  const getRating = () => {
    const stars = [];
    const rating = Math.round(gameDetails.rating);
    for (let i = 1; i <= 5; i++) {
      if (i <= rating) {
        stars.push(<img src={starFull} alt="star" key={i}></img>);
      } else {
        stars.push(<img src={starEmpty} alt="star" key={i}></img>);
      }
    }
    return stars;
  };

  return (
    <>
      {!isLoading && (
        <CardShadow className="shadow" onClick={exitDetailsHandler}>
          <Details layoutId={pathId}>
            <Stats>
              <div className="rating">
                <motion.h3 id="gameName" layoutId={`title ${pathId}`}>
                  {gameDetails.name}
                </motion.h3>
                <p>Rating: {gameDetails.rating}</p>
                {getRating()}
              </div>
              <Info>
                <h3>Platforms</h3>
                <Platforms>
                  {gameDetails.platforms.map(data => (
                    <img
                      title={data.platform.name}
                      key={data.platform.id}
                      src={getPlatform(data.platform.name)}
                      alt={data.platform.name}></img>
                  ))}
                </Platforms>
              </Info>
            </Stats>
            <Media>
              <motion.img
                layoutId={`image ${pathId}`}
                src={smallImage(gameDetails.background_image, 1280)}
                alt={gameDetails.background_image}
              />
            </Media>
            <Description>
              <p>{gameDetails.description_raw}</p>
            </Description>
            <div className="gallery">
              {gameScreenshots.results.map(data => (
                <img
                  key={data.id}
                  src={smallImage(data.image, 1280)}
                  alt={data.image}
                />
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
  z-index: 5;
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
  z-index: 10;
  img {
    width: 100%;
  }
`;

const Stats = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  #gameName {
    font-size: 2rem;
  }
  img {
    width: 2rem;
    height: 2rem;
    display: inline;
  }
`;

const Info = styled(motion.div)`
  text-align: right;
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

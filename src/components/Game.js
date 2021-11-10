import React from 'react';
import { Link } from 'react-router-dom';
// Styles and animations
import styled from 'styled-components';
import { motion } from 'framer-motion';
// Redux
import { useDispatch } from 'react-redux';
import { loadDetails } from '../actions/detailsAction';

const Game = ({ name, releaseDate, image, id }) => {
  // Load game details
  const dispatch = useDispatch();

  const loadDetailsHandler = () => {
    document.body.style.overflow = 'hidden';
    dispatch(loadDetails(id));
  };

  return (
    <StyledGame onClick={loadDetailsHandler}>
      <Link to={`game/${id}`}>
        <h3>{name}</h3>
        <p>{releaseDate}</p>
        <img src={image} alt={name} />
      </Link>
    </StyledGame>
  );
};

const StyledGame = styled(motion.div)`
  min-height: 30vh;
  box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.2);
  text-align: center;
  border-radius: 1rem;
  overflow: hidden;
  cursor: pointer;
  img {
    width: 100%;
    height: 40vh;
    object-fit: cover;
  }
`;

export default Game;

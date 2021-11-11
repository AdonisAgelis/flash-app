import React, { useState } from 'react';
// Animations
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { fadeIn } from '../animations';
// Redux and Routes
import { searchGames } from '../actions/gamesAction';
import { useDispatch } from 'react-redux';

const Nav = () => {
  const [textInput, setTextInput] = useState('');
  const dispatch = useDispatch();

  const inputHandler = e => {
    setTextInput(e.target.value);
  };

  const submitSearch = e => {
    e.preventDefault();
    dispatch(searchGames(textInput));
    setTextInput('');
  };

  const clearSearch = () => {
    dispatch({
      type: 'CLEAR_SEARCH',
    });
  };

  return (
    <StyledNav variants={fadeIn} initial="hidden" animate="show">
      <h1 onClick={clearSearch}>Flash</h1>
      <form className="search">
        <input onChange={inputHandler} value={textInput} type="text" />
        <button onClick={submitSearch} type="submit">
          Search
        </button>
      </form>
    </StyledNav>
  );
};

const StyledNav = styled(motion.div)`
  h1 {
    font-family: 'Outfit', sans-serif;
    font-size: 3rem;
    color: #ee4e0f;
    cursor: pointer;
  }
  padding: 3rem 5rem;
  text-align: center;
  input {
    width: 30%;
    font-size: 1.5rem;
    padding: 0.5rem;
    border: none;
    margin-top: 1rem;
    box-shadow: 0px 0px 30px rgba(0, 0, 0, 0.2);
    font-weight: bold;
  }
  button {
    font-size: 1.5rem;
    border: none;
    padding: 0.5rem 2rem;
    cursor: pointer;
    background: #ee4e0f;
    color: white;
  }
`;

export default Nav;

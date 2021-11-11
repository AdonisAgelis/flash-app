import React from 'react';
import { Route } from 'react-router-dom';
import Home from './pages/Home';
import Nav from './components/Nav';
import GlobalStyles from './components/GlobalStyles';

const App = () => {
  return (
    <div className="App">
      <GlobalStyles />
      <Nav />
      <Route path={['/details/:id', '/']}>
        <Home />
      </Route>
    </div>
  );
};

export default App;

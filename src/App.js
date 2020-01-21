import React from 'react';
import AppContainer from './AppContainer';
import Board from './components/Board';
import Timer from './components/Timer';
import { connect } from 'react-redux';
import Grids from './components/Grids';

function App(props) {
  return (
    <Grids />
/*     <AppContainer>
      <h1>Game of Life</h1>
      <Board />
      <Timer />
    </AppContainer> */
  );
}

export default connect(state => state)(App);

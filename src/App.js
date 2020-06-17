import React from 'react';
import { connect } from 'react-redux';
import AppContainer from './AppContainer';
import Board from './components/Board';
import Controls from './components/Controls';
import Game from './tutorial/Game';

function App(props) {
  return (
    // <Game />
    <AppContainer>
      <h1>Game of Life</h1>
      <Board />
      <Controls />
    </AppContainer>
  );
}

export default connect(state => state)(App);

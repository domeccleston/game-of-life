import React from 'react';
import AppContainer from './AppContainer';
import Board from './components/Board';
import Timer from './components/Timer';
import { connect } from 'react-redux';

function App(props) {
  return (
    <AppContainer>
      <h1>Test of Test</h1>
      <Board />
      <Timer />
    </AppContainer>
  );
}

export default connect(state => state)(App);

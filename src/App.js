import React from 'react';
import './App.css';
import Board from './components/Board';
import Timer from './components/Timer';
import { connect } from 'react-redux';

function App(props) {
  return (
    <div className="App">
      <h1>Game of Life</h1>
      <Board />
      <Timer />
    </div>
  );
}

export default connect(state => state)(App);

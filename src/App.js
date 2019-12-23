import React from 'react';
import './App.css';
import Board from './components/Board';
import { connect } from 'react-redux';

function App(props) {
  return (
    <div className="App">
      <h1>Game of Life</h1>
      <Board />
    </div>
  );
}

export default connect(state => state)(App);

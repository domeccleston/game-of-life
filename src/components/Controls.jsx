import React, { useEffect } from 'react';
import { incrementCount, randomizeBoard } from '../state/actions';
import { connect } from 'react-redux';
import { runIteration } from '../state/actions';


const Slider = ( { speed, onSpeedChange }) => {
  const handleChange = e => onSpeedChange(e.target.value)

  return (
      <input
          type='range'
          min='50'
          max='1000'
          step='50'
          value={speed}
          onChange={handleChange}
          />
  );
};

const runStopButton = () => {
  return (
    <button></button>
  )
}

const Timer = ({ incrementCount, ticks, board, runIteration, randomizeBoard }) => {
  const handleClick = () => {
    runIteration(board);
    incrementCount();
  }
  return (
    <div>
      <h3>Ticks: {ticks}</h3>
      <button onClick={handleClick}>Tick</button>
      <button onClick={randomizeBoard}>Seed</button>
      <Slider />
    </div>
  );
};

const mapStateToProps = state => ({
  ticks: state.tickReducer,
  board: state.boardReducer
});

export default connect(mapStateToProps, { incrementCount, runIteration, randomizeBoard })(Timer);

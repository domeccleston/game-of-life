import React, { useEffect } from 'react';
import { incrementCount } from '../state/actions';
import { connect } from 'react-redux';
import { runIteration } from '../state/actions';

const Timer = ({ incrementCount, ticks, board, runIteration }) => {
  const handleClick = () => {
    runIteration(board);
    incrementCount();
  }
  return (
    <div>
      <h3>Ticks: {ticks}</h3>
      <button onClick={handleClick}>Tick</button>
    </div>
  );
};

const mapStateToProps = state => ({
  ticks: state.tickReducer,
  board: state.boardReducer
});

export default connect(mapStateToProps, { incrementCount, runIteration })(Timer);

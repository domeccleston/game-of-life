import React from 'react';
import { connect } from 'react-redux';
import { isEqual } from 'lodash'; // faster than using JSON.stringify to deep compare arrays
import { BinaryCell } from './cellStyles';
import { mod } from '../utils/utils';
import { setBoard } from '../state/actions';

const Cell = ({ board, setBoard, x, y }) => {
  const handleClick = () => {
    setBoard(board, x, y);
    console.log(board[x][y])
  };  

  return <BinaryCell onClick={() => setBoard(board, x, y)} active={board[x][y]}/>;
};

const mapStateToProps = state => ({
  board: state.boardReducer
});

export default connect(mapStateToProps, { setBoard })(Cell);

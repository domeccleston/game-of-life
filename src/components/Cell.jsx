import React from 'react';
import { connect } from 'react-redux';
import { BinaryCell } from './cellStyles';
import { setBoard, isAlive } from '../state/actions';

const Cell = ({ board, x, y, setBoard, isAlive, cell }) => {
  const handleClick = () => {
    console.log(board);
  };  

  return <BinaryCell onClick={() => handleClick()} active={board[x][y]}>{board[x][y] === true ? '1' : '0'}</BinaryCell>;
};

const mapStateToProps = state => ({
  board: state.boardReducer,
  cell: state.cellReducer,
});

export default connect(mapStateToProps, { setBoard, isAlive })(Cell);

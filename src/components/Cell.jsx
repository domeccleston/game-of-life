import React from 'react';
import { connect } from 'react-redux';
import { BinaryCell } from './cellStyles';
import { setBoard, isAlive, checkNeighbours } from '../state/actions';

const Cell = ({ board, x, y, setBoard, isAlive, checkNeighbours, cell }) => {
  const handleClick = () => {
    console.log(board);
  };  

  return <BinaryCell onClick={() => handleClick()} active={board[x][y]}/>;
};

const mapStateToProps = state => ({
  board: state.boardReducer,
  cell: state.cellReducer,
});

export default connect(mapStateToProps, { setBoard, isAlive, checkNeighbours })(Cell);

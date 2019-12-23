import React from 'react';
import { connect } from 'react-redux';
import { isEqual } from 'lodash'; // faster than using JSON.stringify to deep compare arrays
import { BinaryCell } from './cellStyles';
import { mod } from '../utils/utils';
import { setBoard } from '../state/actions';

const Cell = ({ board, setBoard, x, y }) => {
  const handleClick = () => {
    setBoard(board, x, y);
  };

  /* 
const width_max = 10;
const height_max = 10;

const isAlive = (arr, x, y) => {
	const north = arr[mod(x - 1, width_max)][y]
	const south = arr[mod(x + 1, width_max)][y]
	const east = arr[x][mod(y + 1, height_max)]
	const west = arr[x][mod(y - 1, height_max)]
	const ne = arr[mod(x - 1, width_max)][mod(y + 1, height_max)]
	const nw = arr[mod(x - 1, width_max)][mod(y - 1, height_max)]
	const se = arr[mod(x + 1, width_max)][mod(y + 1, height_max)]
	const sw = arr[mod(x + 1, width_max)][mod(y - 1, height_max)]
    const surroundings = [north, ne, east, se, south, sw, west, nw];
    const count = surroundings.filter(el => el).length;

    if (boardState[x][y] === false) {
        if (count === 3) {
            return true;
        } else {
            return false;
        }
    } else {
        if (count === 2 || count === 3) {
            return true;
        } else {
            return false;
        }
    } 
  }; */

  return <BinaryCell onClick={handleClick} active={board[x][y]}/>;
};

const mapStateToProps = state => ({
  board: state.boardReducer
});

export default connect(mapStateToProps, { setBoard })(Cell);

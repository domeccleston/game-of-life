import { BASE_HEIGHT, BASE_WIDTH } from './reducers';
import { mod } from '../utils/utils';

export const LOG_TITLE = 'LOG_TITLE';
export const RANDOMIZE_BOARD = 'RANDOMIZE_BOARD';
export const SET_BOARD = 'SET_BOARD';
export const INCREMENT_COUNT = 'INCREMENT_COUNT';
export const IS_ALIVE = 'IS_ALIVE';
export const CHECK_NEIGHBOURS = 'CHECK_NEIGHBOURS';

export const randomizeBoard = () => {
  return { type: RANDOMIZE_BOARD };
};

export const setBoard = (board, x, y) => {
  return {
    type: SET_BOARD,
    payload: {
      board,
      x,
      y
    }
  };
};

export const calculateNeighbours = (board, x, y) => {
  const north = board[mod(x - 1, BASE_WIDTH)][y];
  const south = board[mod(x + 1, BASE_WIDTH)][y];
  const east = board[x][mod(y + 1, BASE_HEIGHT)];
  const west = board[x][mod(y - 1, BASE_HEIGHT)];
  const ne = board[mod(x - 1, BASE_WIDTH)][mod(y + 1, BASE_HEIGHT)];
  const nw = board[mod(x - 1, BASE_WIDTH)][mod(y - 1, BASE_HEIGHT)];
  const se = board[mod(x + 1, BASE_WIDTH)][mod(y + 1, BASE_HEIGHT)];
  const sw = board[mod(x + 1, BASE_WIDTH)][mod(y - 1, BASE_HEIGHT)];
  const surroundings = [north, ne, east, se, south, sw, west, nw];
  const count = surroundings.filter(el => el).length;
  return count;
};

export const isAlive = (board, x, y) => {
  const neighbours = calculateNeighbours(board, x, y);
  return {
    type: IS_ALIVE,
    payload: neighbours
  };
};

/* 
const BASE_WIDTH = 10;
const BASE_HEIGHT = 10;

const isAlive = (arr, x, y) => {
	const north = arr[mod(x - 1, BASE_WIDTH)][y]
	const south = arr[mod(x + 1, BASE_WIDTH)][y]
	const east = arr[x][mod(y + 1, BASE_HEIGHT)]
	const west = arr[x][mod(y - 1, BASE_HEIGHT)]
	const ne = arr[mod(x - 1, BASE_WIDTH)][mod(y + 1, BASE_HEIGHT)]
	const nw = arr[mod(x - 1, BASE_WIDTH)][mod(y - 1, BASE_HEIGHT)]
	const se = arr[mod(x + 1, BASE_WIDTH)][mod(y + 1, BASE_HEIGHT)]
	const sw = arr[mod(x + 1, BASE_WIDTH)][mod(y - 1, BASE_HEIGHT)]
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

export const incrementCount = () => {
  return { type: INCREMENT_COUNT };
};

export const checkNeighbours = (board, x, y) => ({
  type: CHECK_NEIGHBOURS,
  payload: {
    board,
    x,
    y
  }
});

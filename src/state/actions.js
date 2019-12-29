import { BASE_HEIGHT, BASE_WIDTH } from './reducers';
import { mod } from '../utils/utils';

export const LOG_TITLE = 'LOG_TITLE';
export const RANDOMIZE_BOARD = 'RANDOMIZE_BOARD';
export const SET_BOARD = 'SET_BOARD';
export const INCREMENT_COUNT = 'INCREMENT_COUNT';
export const IS_ALIVE = 'IS_ALIVE';
export const CHECK_NEIGHBOURS = 'CHECK_NEIGHBOURS';
export const ALTERNATE_BOARD = 'ALTERNATE_BOARD';

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

export const incrementCount = () => {
  return { type: INCREMENT_COUNT };
};

export const alternateBoard = () => {
  return { type: ALTERNATE_BOARD };
}

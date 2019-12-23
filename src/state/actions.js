export const LOG_TITLE = 'LOG_TITLE';
export const RANDOMIZE_BOARD = 'RANDOMIZE_BOARD';
export const SET_BOARD = 'SET_BOARD';
export const INCREMENT_COUNT = 'INCREMENT_COUNT';

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

export const incrementCount = () => {
  return { type: INCREMENT_COUNT };
};

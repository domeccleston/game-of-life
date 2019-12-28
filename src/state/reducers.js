import * as types from './actions.js';
import { isEqual } from 'lodash'; // faster than using JSON.stringify to deep compare arrays
import { calculateNeighbours } from './actions';
export const BASE_HEIGHT = 20;
export const BASE_WIDTH = 20;
const STARTING_POPULATION = 0.6;

const populateBoard = cellState => {
  return Array(BASE_HEIGHT)
    .fill(null)
    .map(() =>
      Array(BASE_WIDTH)
        .fill(null)
        .map(() => cellState)
    );
};

const setRandomBoard = () => {
  return Array(BASE_HEIGHT)
    .fill(null)
    .map(() =>
      Array(BASE_WIDTH)
        .fill(null)
        .map(() => Math.random() > STARTING_POPULATION)
    );
};

function create2dArray(height, width) {
  return Array(height)
    .fill()
    .map((yEl, yI) => {
      return Array(width)
        .fill()
        .map((xEl, xI) => yI * 10 + xI);
    });
}

function createRandomBoard(height, width) {
  return Array(height)
    .fill()
    .map((yEl, yI) => {
      return Array(width)
        .fill()
        .map((xEl, xI) => Math.random() > 0.5);
    });
}

function isAlive(cell, neighboursCount) {
  // if cell is alive
  if (cell === true) {
    if (neighboursCount < 2) {
      // die by underpopulation
      return false;
    }
    if (neighboursCount === 2 || neighboursCount === 3) {
      // live on to next generation
      return true;
    }
    if (neighboursCount > 2) {
      // die by overpopulation
      return false;
    }
  } else {
    // if cell is dead
    if (neighboursCount === 3) {
      // become a live cell
      return true;
    }
  }
  return false;
}

const calculateNeighbours = (arr, y, x) => {
  const north = arr[mod(y - 1, BASE_WIDTH)][x];
  const south = arr[mod(y + 1, BASE_WIDTH)][x];
  const east = arr[y][mod(x + 1, BASE_HEIGHT)];
  const west = arr[y][mod(x - 1, BASE_HEIGHT)];
  const ne = arr[mod(y - 1, BASE_WIDTH)][mod(x + 1, BASE_HEIGHT)];
  const nw = arr[mod(y - 1, BASE_WIDTH)][mod(x - 1, BASE_HEIGHT)];
  const se = arr[mod(y + 1, BASE_WIDTH)][mod(x + 1, BASE_HEIGHT)];
  const sw = arr[mod(y + 1, BASE_WIDTH)][mod(x - 1, BASE_HEIGHT)];
  const surroundings = [north, ne, east, se, south, sw, west, nw];
  const count = surroundings.filter(el => el).length;
  return isAlive(arr[y][x], count);
};

let count = 0;

const initialBoardState = populateBoard(false);

export const boardReducer = (state = initialBoardState, action) => {
  switch (action.type) {
    default:
    case types.RANDOMIZE_BOARD:
      return setRandomBoard();
    case types.SET_BOARD:
      return action.payload.board.map((el, xIndex) => {
        return action.payload.board[xIndex].map((el, yIndex) => {
          return isEqual([xIndex, yIndex], [action.payload.x, action.payload.y])
            ? !el
            : el;
        });
      });
  }
};

export const tickReducer = (state = 0, action) => {
  switch (action.type) {
    default:
      return state;
    case types.INCREMENT_COUNT:
      return state + 1;
  }
};

export const cellReducer = (state = false, action) => {
  switch (action.type) {
    default:
      return state;
    case types.IS_ALIVE:
      return action.payload === 0;
  }
};

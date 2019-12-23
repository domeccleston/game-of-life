import * as types from './actions.js';
import { isEqual } from 'lodash';

const BASE_HEIGHT = 10;
const BASE_WIDTH = 10;
const STARTING_POPULATION = 0.8;

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

const initialBoardState = populateBoard(false);

export const boardReducer = (state = initialBoardState, action) => {
  switch (action.type) {
    default:
      return state;
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
  console.log('tickReducer')
  switch (action.type) {
    default:
      return state;
    case types.INCREMENT_COUNT:
      return state + 1;
  } 
}
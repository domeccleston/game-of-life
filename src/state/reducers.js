import * as types from './actions.js';

const baseHeight = 10;
const baseWidth = 10;

const populateBoard = (cellState) => {
    return Array(baseHeight).fill(cellState).map(() => Array(baseWidth).fill(null).map(() => cellState))
}

const initialBoardState = populateBoard(false);

export const boardReducer = (state = initialBoardState, action) => {
  switch (action.type) {
    default:
      return state;
    case types.RANDOMIZE_BOARD:
        return populateBoard(Math.random > 0.8);
  }
};

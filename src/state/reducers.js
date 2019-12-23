import * as types from './actions.js';
import { isEqual } from 'lodash';

const baseHeight = 10;
const baseWidth = 10;

const populateBoard = cellState => {
  return Array(baseHeight)
    .fill(cellState)
    .map(() =>
      Array(baseWidth)
        .fill(null)
        .map(() => cellState)
    );
};

const initialBoardState = populateBoard(false);

export const boardReducer = (state = initialBoardState, action) => {
  switch (action.type) {
    default:
      return state;
    case types.RANDOMIZE_BOARD:
      return populateBoard(Math.random > 0.8);
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

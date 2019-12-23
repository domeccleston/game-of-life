export const LOG_TITLE = 'LOG_TITLE';
export const RANDOMIZE_BOARD = 'RANDOMIZE_BOARD';
export const SET_BOARD = 'SET_BOARD';

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

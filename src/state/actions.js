import { calculateNeighbours } from "../game/game";

export const LOG_TITLE = "LOG_TITLE";
export const RANDOMIZE_BOARD = "RANDOMIZE_BOARD";
export const SET_BOARD = "SET_BOARD";
export const INCREMENT_COUNT = "INCREMENT_COUNT";
export const IS_ALIVE = "IS_ALIVE";
export const CHECK_NEIGHBOURS = "CHECK_NEIGHBOURS";
export const ALTERNATE_BOARD = "ALTERNATE_BOARD";
export const RUN_ITERATION = "RUN_ITERATION";
export const START_GAME = "START_GAME";
export const STOP_GAME = "STOP_GAME";
export const SET_SPEED = "SET_SPEED";
export const CLEAR_BOARD = "CLEAR_BOARD";

export const setBoard = (board, x, y) => {
  return {
    type: SET_BOARD,
    payload: {
      board,
      x,
      y,
    },
  };
};

export const isAlive = (board, x, y) => {
  const neighbours = calculateNeighbours(board, x, y);
  return {
    type: IS_ALIVE,
    payload: neighbours,
  };
};

export const randomizeBoard = () => {
  return { type: RANDOMIZE_BOARD };
};

export const incrementCount = () => {
  return { type: INCREMENT_COUNT };
};

export const alternateBoard = () => {
  return { type: ALTERNATE_BOARD };
};

export const startGame = () => {
  return { type: START_GAME };
};

export const stopGame = () => {
  return { type: STOP_GAME };
};

export const clearBoard = () => {
  return { type: CLEAR_BOARD };
};

export const runIteration = (board) => {
  return { type: RUN_ITERATION, payload: board };
};

export const setSpeed = (speed) => {
  return { type: SET_SPEED, payload: speed };
};

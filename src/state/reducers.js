import * as types from "./actions.js";
import { runIteration, setBoard } from "../game/index";
export const BASE_HEIGHT = 30;
export const BASE_WIDTH = 30;
const STARTING_POPULATION = 0.8;

const populateBoard = (cellState) => {
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
    case types.CLEAR_BOARD:
      return populateBoard(false);
    case types.RUN_ITERATION:
      return runIteration(action.payload);
    case types.RANDOMIZE_BOARD:
      return setRandomBoard();
    case types.SET_BOARD:
      return setBoard(action.payload.board, action.payload.x, action.payload.y);
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

const initialGameState = {
  running: false,
  speed: 100,
  generation: 0,
};

export const runStateReducer = (state = initialGameState, action) => {
  switch (action.type) {
    default:
      return state;
    case types.INCREMENT_COUNT:
      return { ...state, generation: state.generation + 1 };
    case types.START_GAME:
      return { ...state, running: true };
    case types.STOP_GAME:
      return { ...state, running: false };
    case types.SET_SPEED:
      return { ...state, speed: action.payload };
  }
};

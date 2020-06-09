import { mod } from '../utils/utils';
import { BASE_HEIGHT, BASE_WIDTH } from '../state/reducers';

// this is the core algorithm that determines the state of the game

function isAlive(cell, neighboursCount) {
  if (cell === true) {
    if (neighboursCount < 2) {
      return false;
    }
    if (neighboursCount === 2 || neighboursCount === 3) {
      return true;
    }
    if (neighboursCount > 2) {
      return false;
    }
  } else {
    if (neighboursCount === 3) {
      return true;
    }
  }
  return false;
}

const calculateNeighbours = (arr, y, x) => {
  console.log(arr, x, y);
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

export function runIteration(board) {
  return board.map((yEl, yI) =>
    board[yI].map((xEl, xI) => calculateNeighbours(board, yI, xI))
  );
}

import mod from '../utils/utils';
import { BASE_HEIGHT, BASE_WIDTH } from '../state/reducers'

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

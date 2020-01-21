import React from "react";
import "./Grids.css";

const CELL_SIZE = 20;
const WIDTH = 800;
const HEIGHT = 600;

const Grids = () => {
  const [cells, setCells] = React.useState([]);
  const cols = WIDTH / CELL_SIZE;
  const rows = HEIGHT / CELL_SIZE;

  /* const populateBoard = cellState => {
  return Array(BASE_HEIGHT)
    .fill(null)
    .map(() =>
      Array(BASE_WIDTH)
        .fill(null)
        .map(() => cellState)
    );
}; */

  const makeEmptyBoard = () => {
    return Array(rows).x  
  };
  return (
    <div>
      <div
        className="Grids"
        style={{
          width: WIDTH,
          height: HEIGHT,
          backgroundSize: `${CELL_SIZE}px ${CELL_SIZE}px`
        }}
      ></div>
    </div>
  );
};

export default Grids;

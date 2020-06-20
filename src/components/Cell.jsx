import React from "react";
import { connect } from "react-redux";
import { setBoard, isAlive } from "../state/actions";

const Cell = ({ board, x, y, setBoard }) => {
  const handleClick = () => {
    setBoard(board, x, y);
  };

  return (
    <td
      onClick={handleClick}
      className={board[x][y] ? "alive" : "dead"}
    ></td>
  );
};

const mapStateToProps = (state) => ({
  board: state.boardReducer,
  cell: state.cellReducer,
});

export default connect(mapStateToProps, { setBoard, isAlive })(Cell);

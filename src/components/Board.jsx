import React from "react";
import { connect } from "react-redux";
import Cell from "./Cell";
import { randomizeBoard, alternateBoard } from "../state/actions";

const Board = ({ board }) => {
  const rows = [];
  for (let r = 0; r < board.length; r++) {
    const columns = [];
    for (let c = 0; c < board[0].length; c++) {
      columns.push(<Cell key={`${r}, ${c}`} x={c} y={r} />);
    }
    rows.push(<tr key={r}>{columns}</tr>);
  }

  return (
    <table>
      <tbody>{rows}</tbody>
    </table>
  );
};

const mapStateToProps = (state) => ({
  board: state.boardReducer,
});

export default connect(mapStateToProps, { randomizeBoard, alternateBoard })(
  Board
);

import React from "react";
import { connect } from "react-redux";
import Board from "./components/Board";
import Controls from "./components/Controls";

function App(props) {
  return (
    <>
      <h1>Game of Life</h1>
      <Board />
      <Controls />
    </>
  );
}

export default connect((state) => state)(App);

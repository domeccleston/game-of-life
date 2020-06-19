import React, { useEffect } from "react";
import {
  incrementCount,
  randomizeBoard,
  runIteration,
  startGame,
  stopGame,
  setSpeed,
} from "../state/actions";
import { connect } from "react-redux";
import { useInterval } from "../utils/utils";

const Timer = ({
  ticks,
  board,
  game,
  incrementCount,
  runIteration,
  randomizeBoard,
  startGame,
  stopGame,
  speed,
  setSpeed,
}) => {
  const handleClick = () => {
    runIteration(board);
    incrementCount();
  };

  console.log(game);

  const handleSpeedChange = (e) => {
    setSpeed(e.target.value)
  }

  const handleStartStop = () => {
    game.running ? stopGame() : startGame();
  };

  useInterval(
    () => {
      incrementCount();
      runIteration(board);
    },
    game.running ? game.speed : null
  );

  return (
    <div>
      <h3>Ticks: {game.generation}</h3>
      <button onClick={handleClick}>Tick</button>
      <button onClick={randomizeBoard}>Seed</button>
      <input
        type="range"
        min="50"
        max="1000"
        step="50"
        value={speed}
        onChange={handleSpeedChange}
      />
      <button onClick={handleStartStop}>
        {game.running ? "Stop" : "Start"}
      </button>
    </div>
  );
};

const mapStateToProps = (state) => ({
  board: state.boardReducer,
  game: state.runStateReducer,
});

export default connect(mapStateToProps, {
  incrementCount,
  runIteration,
  randomizeBoard,
  startGame,
  stopGame,
  setSpeed,
})(Timer);

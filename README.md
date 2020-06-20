
## Conway's Game of Life in React Hooks & Redux

A simple implementation of John Conway's famous cellular automaton. Click on cells to spawn them,
or press 'seed' to generate a random board. This implementation is toroidal, so the left border
overflows onto the right side and so on.

## Rules
The cells will then live or die according to the following rules: 

1. Any live cell with fewer than two live neighbours dies, as if by underpopulation.
2. Any live cell with two or three live neighbours lives on to the next generation.
3. Any live cell with more than three live neighbours dies, as if by overpopulation.
4. Any dead cell with exactly three live neighbours becomes a live cell, as if by reproduction.

## Fun fact

The game of life is Turing complete, so can simulate any computer. This means that it is possible to 
implement the game of life in the game of life (have a [look!]('https://www.youtube.com/watch?v=xP5-iIeKXE8))
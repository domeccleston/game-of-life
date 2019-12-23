// modulo operator % in javascript can return a negative number; we need an implementation that always returns positive in order to wrap
// around array indices at the ends of the board
export function mod(n, m) {
  return ((n % m) + m) % m;
}

// set up a timer
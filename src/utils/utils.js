import { useRef, useEffect } from "react";

// modulo operator % in javascript can return a negative number; we need an implementation that always returns positive in order to wrap
// around array indices at the ends of the board
export function mod(n, m) {
  return ((n % m) + m) % m;
}

// set up a timer

export function useInterval(callback, delay) {
  const savedCallback = useRef();

  // Remember the latest function.
  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  // Set up the interval.
  useEffect(() => {
    function tick() {
      savedCallback.current();
    }
    if (delay !== null) {
      let id = setInterval(tick, delay);
      return () => clearInterval(id);
    }
  }, [delay]);
}
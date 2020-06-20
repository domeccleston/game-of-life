import { useRef, useEffect } from "react";

// Custom hook to set up a declarative timer. Thanks to Dan Abramov's useful blog post on using 
// setInterval with React Hooks: https://overreacted.io/making-setinterval-declarative-with-react-hooks/
export function useInterval(callback, delay) {
  const savedCallback = useRef();

  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

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

// Modulo operator % in javascript can return a negative number; we need an implementation that always returns positive in order to wrap
// around array indices at the ends of the board
export function mod(n, m) {
  return ((n % m) + m) % m;
}

import React from 'react'
import useWindowSize from "./useWindowSize";

export default function Hello() {
  const [width, height] = useWindowSize();
  return <div>
    <h1>Resize the window</h1>
    <div>Current window size: {width} x {height}</div>
  </div>
};

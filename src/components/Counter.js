import React, { useState } from "react";


function Counter() {
  const [count, setCount] = useState(0);

  function increment() {
    // setCount(count + 1);
    setCount((currentCount) => currentCount + 1);
    setCount((currentCount) => currentCount + 1);
    // using a callback function to update the state
    // setting state is an asynchronous operation
  }

  return <button onClick={increment}>I have been clicked {count} times</button>;
}

export default Counter;
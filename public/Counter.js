import React, { useState } from "react";

// Increment and decrement a counter value
const Counter = () => {
  const [count, setCount] = useState(0); // State to store the counter value

  return (
    <div>
      <h1>Counter: {count}</h1>
      <button onClick={() => setCount(count + 1)}>Increment</button>{" "}
      {/* Increment the counter */}
      <button onClick={() => setCount(count - 1)}>Decrement</button>{" "}
      {/* Decrement the counter */}
    </div>
  );
};

export default Counter;

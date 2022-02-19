import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount((previous) => previous + 1);
  };

  function handleDecrement(params) {
    console.log(params);
    if (count === 0) return;
    setCount(count - 1);
  }

  return (
    <div className="container">
      <h1>Counter</h1>
      <div className="container-fluid bg-dark text-white mb-3">
        Jumlah : {count}
      </div>
      <button onClick={handleIncrement} className="btn btn-primary">
        Increment
      </button>
      <button
        onClick={() => handleDecrement("kurangin")}
        className="btn btn-danger"
      >
        Decrement
      </button>
    </div>
  );
};

export default Counter;

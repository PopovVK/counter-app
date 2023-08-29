import React, { useState } from 'react';
import './Counter.css';

function Counter({ initialValue }) {
  const [count, setCount] = useState(initialValue);

  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleDecrement = () => {
    setCount(count - 1);
  };

  const handleReset = () => {
    setCount(initialValue);
  };

  return (
    <div className="counter">
      <div className="counter-content">
        <div className="button square" onClick={handleDecrement}>-</div>
        <div className="count">{count}</div>
        <div className="button square" onClick={handleIncrement}>+</div>
      </div>
      <div className="reset-button-container">
        <button className="reset-button" onClick={handleReset}>Reset</button>
      </div>
    </div>
  );
}

export default Counter;

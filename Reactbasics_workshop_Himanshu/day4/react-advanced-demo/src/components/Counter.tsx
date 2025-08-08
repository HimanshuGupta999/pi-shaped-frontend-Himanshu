import React, { useState, useMemo } from 'react';

const expensiveCalculation = (num: number) => {
  console.log('Calculating...');
  return num * 2;
};

const Counter = React.memo(() => {
  const [count, setCount] = useState(0);

  const computedValue = useMemo(() => expensiveCalculation(count), [count]);

  return (
    <div>
      <p>Count: {count}</p>
      <p>Computed: {computedValue}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
});

export default Counter;

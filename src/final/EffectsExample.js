import React, { useState, useEffect } from 'react';

const EffectsExample = () => {
  const [count, setCount] = useState(0);

  // Similar to componentDidMount and componentDidUpdate:
  useEffect(() => {
    document.title = `You clicked ${count} times`;
  });

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)} className="nes-btn">
        Click me
      </button>
    </div>
  );
};

export default EffectsExample;

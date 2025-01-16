'use client';

import { useState } from 'react';

export default function JSComponent() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState('Click me!');

  const handleClick = () => {
    setCount(count + 1);
    setText('Clicked!');
  };

  return (
    <div>
      <h1>JavaScript Component</h1>
      <p>Count: {count}</p>
      <button onClick={handleClick}>{text}</button>
    </div>
  );
}

import React, { useState, useRef, useCallback, useEffect } from 'react';

const SimpleHabit = () => {
  const [count, setCount] = useState(0); //[count라는변수, count를 업데이트할수있는함수]
  const spanRef = useRef();

  const handleIncrement = useCallback(() => {
    setCount(count + 1);
  });

  useEffect(() => {
    console.log(`mounted & updated!: ${count}`);
  }, []);
  return (
    <li className="habit">
      <span ref={spanRef} className="habit-name">Reading</span>
      <span className="habit-count">{count}</span>
      <button className="habit-button habit-increase" onClick={handleIncrement}>
        <i className="fas fa-plus-square"></i>
      </button>
    </li>
  );
};

export default SimpleHabit;

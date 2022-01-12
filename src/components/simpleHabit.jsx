import React, { useState, useRef, useCallback, useEffect } from 'react';

const SimpleHabit = () => {
  const [count, setCount] = useState(0); //[count라는변수, count를 업데이트할수있는함수]
  const spanRef = useRef(); //createRef와는다르게 한번만 만들고 재사용가능하도록 메모리에 저장

  const handleIncrement = useCallback(() => {  //usecallback은 콜백함수를 재사용가능하도록 메모리에 저장
    setCount(count + 1);
  });

  useEffect(() => {
    console.log(`mounted & updated!: ${count}`);}, []); //[]넣으면 처음에만 호출
 // console.log(`mounted & updated!: ${count}`);}, [count]);  count가 변경될때마다 띄우기
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

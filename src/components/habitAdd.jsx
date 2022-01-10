import React, { memo } from 'react';

//함수형이기에 this가 필요없다.
const HabitAdd = memo(props => {

  const inputRef = React.createRef(); //React는 가상dom을 사용하여 dom을 직접사용하지않기 때문에 ref이용
  const formRef = React.createRef();
  
  const onSubmit = event => {
    event.preventDefault(); //submit이 실행되면 리로드되는데 리로드를 막기위한 함수
    //console.log(this.inputRef.current.value);
    const name = inputRef.current.value;
    name && props.onAdd(name); //name있으면  props에 name 전달
    //this.inputRef.current.value = ''; //입력값 초기화 방법1
    formRef.current.reset(); //입력값 초기화 방법2
  };
  return(
    <form ref={formRef} className='add-form' onSubmit={onSubmit}>
        <input ref={inputRef} type="text" className='add-input' placeholder='Habit' />
        <button className='add-button'>Add</button>
    </form>
);
});


export default HabitAdd;
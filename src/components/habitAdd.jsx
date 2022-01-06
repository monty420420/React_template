import React, { Component } from 'react';


class HabitAdd extends Component {
    inputRef = React.createRef(); //React는 가상dom을 사용하여 dom을 직접사용하지않기 때문에 ref이용
    formRef = React.createRef();
    onSubmit = event => {
      event.preventDefault(); //submit이 실행되면 리로드되는데 리로드를 막기위한 함수
      //console.log(this.inputRef.current.value);
      const name = this.inputRef.current.value;
      name && this.props.onAdd(name); //name있으면  props에 name 전달
      //this.inputRef.current.value = ''; //입력값 초기화 방법1
      this.formRef.current.reset(); //입력값 초기화 방법2
  }
  render() {
      
    return(
        <form ref={this.formRef} className='add-form' onSubmit={this.onSubmit}>
            <input ref={this.inputRef} type="text" className='add-input' placeholder='Habit' />
            <button className='add-button'>Add</button>
        </form>
    );
  }
}


export default HabitAdd;
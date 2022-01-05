import React, { Component } from 'react';


class HabitAdd extends Component {
    inputRef = React.createRef(); //React는 가상dom을 사용하여 dom을 직접사용하지않기 때문에 ref이용
  onSubmit = event => {
      event.preventDefault(); //submit이 실행되면 리로드되는데 리로드를 막기위한 함수
      console.log(this.inputRef.current.value);
  }
  render() {
      
    return(
        <form className='add-form' onSubmit={this.onSubmit}>
            <input ref={this.inputRef} type="text" className='add-input' placeholder='Habit' />
            <button className='add-button'>Add</button>
        </form>
    );
  }
}


export default HabitAdd;
import React, { Component } from "react";
import TodoInput from '../Common/TodoInput/index'
import TodoForm from '../Common/TodoForm/index'
import TodoFooter from "../Common/TodoFooter";
import './styles/style.css';
class TodoContainer extends Component {
  // constructor(props) {
  //   super(props);
  // }
  
  render() {
    return (

      <div >
            <h1>todos</h1>
        <div className='todoapp'>
          <TodoForm >
            <TodoInput 
              type={'text'}
              placeholder={'whats need to be done ?'}
              value='todo'
            />
          </TodoForm>
          <TodoFooter />
          </div>
        </div>
    )
  }
}
export default TodoContainer;
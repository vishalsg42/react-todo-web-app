import React, { Component } from "react";
// import TodoInput from "../TodoInput/index";
import './styles/style.css';

class TodoFooter extends Component {
  // constructor(props) {
  //   super(props);
  // }
  
  render() {
    return (
      <footer>
        <span className='todo-count'>5 item left</span>
        <ul className='filters'>
          <li><a href="#">All</a></li>
          <li><a href="#">Active</a></li>
          <li><a href="#">Completed</a></li>
        </ul>
        
      </footer>
    )
  }
}
export default TodoFooter;
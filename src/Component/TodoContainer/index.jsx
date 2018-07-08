import React, { Component } from "react";

// components
import TodoInput from '../Common/TodoInput/index'
import TodoFooter from "../Common/TodoFooter";
import TodoListItem from '../Common/TodoItem/index';

//Styling
import './styles/style.css';

// redux
import { connect } from 'react-redux';

//actions 
import { getTodoItem } from '../../Actions/index'
class TodoContainer extends Component {
  // constructor(props) {
  //   super(props);
  // }

  componentDidMount(){
    console.log(this.props.getTodoItem('')); 
  }

  getInputValue = (e)=>{
    if(e.keyCode === 13 ){
      this.props.getTodoItem(e.target.value)
      e.target.value='';
    }
  }

//   getItemList = ()=> { 
//     return 
// }
  
  render() {

    return (
      <div >
        <h1>todos</h1>
        <div className='todoapp'>
            <TodoInput 
              type={'text'}
              placeholder={'whats need to be done ?'}
              eventHandler={ (event)=> this.getInputValue(event) }
              textValue = {this.props.isItem ? '': this.props.textValue}
            />
            {
              this.props.isItem ? '' : <ul className='todolist'> {this.props.todoItem.map((item,i) => {
                return  <TodoListItem key={i} item={item}/>
              }) } </ul>
            } 
            {
              this.props.isItem ? '' :
              <TodoFooter todoCount={this.props.todoCount ?  this.props.todoCount : 0} />
            }
          </div>
        </div>
    )
  }
}


const mapStatetoProps = (state)=>{
  console.log('map',state.todoItemList.value);
  return {
    todoItem:state.todoItemList.todoItem,
    todoCount:state.todoItemList.todoCount,
    isItem: state.todoItemList.isItem,
  } 
}
export default connect(mapStatetoProps, { getTodoItem })(TodoContainer);
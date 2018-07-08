import React from "react";
import './styles/style.css';

const TodoListItem = (props)=>{
    return <li>
              <label key={props.index}> {props.item} </label>
              <button className='destroy' ></button>
            </li>   
}
export default TodoListItem;
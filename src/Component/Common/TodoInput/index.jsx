import React, { Component } from "react";
import './styles/style.css';

const TodoInput = (props)=>{
    return <input 
              type={props.type} 
              placeholder={props.placeholder} 
              defaultValue={props.value} 
            />
}
export default TodoInput;
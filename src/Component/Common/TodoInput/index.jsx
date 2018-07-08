import React  from "react";
import './styles/style.css';

const TodoInput = (props)=>{
    return <input 
              type={props.type} 
              placeholder={props.placeholder} 
              onKeyUp={props.eventHandler}
              defaultValue={props.textValue}
            />
}
export default TodoInput;
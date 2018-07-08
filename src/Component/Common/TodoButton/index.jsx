import React from "react";


const TodoButton = (props)=>{
    return <button 
              className={props.class} 
              onClick={props.eventHandler}>
                {props.text} 
            </button>
}
export default TodoButton;
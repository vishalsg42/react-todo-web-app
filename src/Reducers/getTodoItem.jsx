import {  
    TODO_ITEM_SUCCESS,
    TODO_ITEM_FAIL

} from '../Actions/index';

const INITIAL_STATE = {
  todoItem : '',
  todoCount: 0,
  isItem: true,
}

export const  todoItemList   = (state = INITIAL_STATE,action)=> {
    
  switch(action.type) {
        case TODO_ITEM_SUCCESS: 
         return {
           todoItem: action.todoItem,
           todoCount: action.todoCount,
           isItem: action.isItem,
         }
        case TODO_ITEM_FAIL: 
         return {
          isItem: action.isItem
         }
        default:
         return state;
    }
 }


export const TODO_COUNT = 'TODO_COUNT';
export const TODO_ITEM = 'TODO_ITEM';
export const TODO_ITEM_REQUEST = 'TODO_ITEM_REQUEST';
export const TODO_ITEM_SUCCESS = 'TODO_ITEM_SUCCESS';
export const TODO_ITEM_FAIL = 'TODO_ITEM_FAIL';
export const TODO_ACTIVE = 'TODO_ACTIVE';
export const TODO_COMPLETED = 'TODO_COMPLETED';

let itemArray= [];
export const getTodoItem = (value)=>{
  // return value;
  // if(value.length >= 1) {
    // console.log(value.length > 0 );
    
    return dispatch => {
              if(value.length > 0) {
              itemArray.push(value)
              dispatch(getTodoItemSuccess(itemArray,itemArray.length))
              } else {
                dispatch(getTodoItemFail(itemArray));

              }
  }
  // }
}

const getTodoItemSuccess=(todoItem)=> {
  // console.log(data);
    return {
        type: TODO_ITEM_SUCCESS,
        todoItem,
        'todoCount': todoItem.length,
        isItem: false,
    }
}

const getTodoItemFail = (error)=> {
  return {
      type: TODO_ITEM_FAIL,
      isItem: true,
      error
  }
}

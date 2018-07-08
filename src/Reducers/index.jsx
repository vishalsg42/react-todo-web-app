import { createStore,applyMiddleware, combineReducers } from "redux";
import { todoItemList } from './getTodoItem'
import thunk from "redux-thunk";

// const reducers = (state,action)=> {
//    switch(action.type) {

//    }
// }
const rootReducer =  combineReducers({
    todoItemList
})

const store =  createStore(rootReducer,applyMiddleware(thunk));

export default store;  
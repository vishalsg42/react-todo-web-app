import { createStore  } from "redux";


const reducers = ()=> {
    return  {
        hello: 'he'
    }
}
const store =  createStore(reducers);

export default store;  
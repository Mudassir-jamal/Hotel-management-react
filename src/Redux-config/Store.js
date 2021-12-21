import { createStore,applyMiddleware } from "redux";
import LoginRedu from "./Reducers/LoginReducer"
import SignupRedu from "./Reducers/SignupReducer"

import thunk from "redux-thunk";
import { combineReducers } from "redux";


const reducer = combineReducers({
    LoginRedu,
    SignupRedu
})



const store  = createStore(reducer,applyMiddleware(thunk))


export default store;
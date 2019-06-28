import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
//import rootReducer form index.js in reducers
import rootReducer from "./reducers";

const initialState = {};

//A thunk is a function that wraps an expression to delay its evaluation.
//Any return value from the inner function will be available as the return value of dispatch itself. This is convenient for orchestrating an asynchronous control flow with thunk action creators dispatching each other and returning Promises to wait for each other’s completion
const middleware = [thunk];

const store = createStore(
  rootReducer,
  initialState,
  compose(
    applyMiddleware(...middleware),
    //below is for the redux developer tool on chrome
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

export default store;

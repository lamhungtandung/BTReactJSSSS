import { combineReducers, createStore } from "redux";
import { bookSeatReducer } from "./reducer/bookSeatReducer.js";

const rootReducer = combineReducers({
    bookSeatReducer
})

export const store = createStore(
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
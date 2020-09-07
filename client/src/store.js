import { createStore, applyMiddleware } from "redux";
import thunk from "redux-think";
import { composeWithDevTools } from "redux-devtools-extension";
import Reducer from "./Reducer/Reducer.js";

const store = createStore(Reducer, composeWithDevTools(applyMiddleware(thunk)));

export default store;

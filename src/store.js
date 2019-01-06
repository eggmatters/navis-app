import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import metaReducer from './metaReducer'

const store = createStore(
  metaReducer,
  applyMiddleware(thunk)
);

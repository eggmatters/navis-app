import React from 'react';
import ReactDOM from 'react-dom';
import MoviesTable from './movies';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import metaReducer from './metaReducer';

//import "./styles.css";

const store = createStore(
  metaReducer,
  applyMiddleware(thunk)
);

function App() {
  return (
    <div className="App">
      <MoviesTable />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement
);

import React from 'react';
import ReactDOM from 'react-dom';
import Search from './search';
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
      <Search />
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

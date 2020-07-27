import React, {Component} from 'react';
import './App.css';
import TodoList from './components/TodoList';
import { createStore } from 'redux';
import todoApp from "./reducers";
import { Provider } from "react-redux";

const store = createStore(
  todoApp,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

class App extends  Component{
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <TodoList/>
        </div>
      </Provider>
    );
  }
}

export default App;

import React from 'react';
import ReactDOM from 'react-dom/client';
import Counter from './Counter';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import 'bootstrap/dist/css/bootstrap.min.css';

const initialState = {
  count: 0
};

function reducer(state = initialState, action) {
  switch(action.type) {
    case 'INCREMENT':
      return {
        count: state.count + 1
      };
    case 'DECREMENT':
      return {
        count: state.count - 1
      };
      case 'RESET':
        return { ...state, count: 0 };
    default:
      return state;
  }
}

const store = createStore(reducer);

const App = () => (
  <Provider store={store}>
    <Counter />
  </Provider>
);

const container = document.getElementById('root');

const root = ReactDOM.createRoot(container);
root.render(<App />);
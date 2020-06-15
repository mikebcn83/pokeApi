import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { pokeStore } from './store';
import { Provider } from 'react-redux'


ReactDOM.render(
  <React.StrictMode>
    <Provider store={pokeStore}>
    <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);




import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';


import Root from './components/root';
import { applyMiddleware } from 'redux';

document.addEventListener('DOMContentLoaded', () => {
  const preloadedState = localStorage.state ?
    JSON.parse(localStorage.state) : {};
  let store = configureStore(preloadedState);
  // Phase 1: Logging
  // store.dispatch = addLoggingToDispatch(store);
  store = applyMiddlewares(store, addLoggingToDispatch);
  const root = document.getElementById('content');
  ReactDOM.render(<Root store={store} />, root);
});

// Phase 1: Logging
// const addLoggingToDispatch = store => {
//   const OGDispatch = store.dispatch;
//   console.log(store.getState());
//   return action => {
//     console.log(action);
//     OGDispatch(action);
//     console.log(store.getState());
//   };
// };


const addLoggingToDispatch = store = next = action => {
  console.log(store.getState());
  console.log(action);
  next(action);
  console.log(store.getState());
};

const applyMiddlewares = (store, ...middlewares) => {
  let dispatch = store.dispatch;
  middlewares.forEach(middleware => {
    dispatch = middleware(store)(dispatch);
  });
  return Object.assign({}, store, { dispatch });
};

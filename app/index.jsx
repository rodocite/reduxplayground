// Entry File
import React from 'react';
import { createStore } from 'redux';
import App from './components/App';
import { Provider } from 'react-redux';
import messageApp from './reducers/reducers';
import { store } from './store/store';

React.render(
  <Provider store={store}>
    {() => <App />}
  </Provider>, document.getElementById('app')
);

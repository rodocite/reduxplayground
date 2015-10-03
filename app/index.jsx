// Entry File
import React from 'react';
import { createStore } from 'redux';
import App from './components/App';
import { Provider } from 'react-redux';
import messageApp from './reducers/reducers';
import { store } from './store/store';
import { hydrateState } from './actions/actions';
import Firebase from 'firebase';
const ref = new Firebase("https://reduxplayground.firebaseio.com/");

// Uses a dispatcher to hydrate store with data from Firebase
ref.child('messages').on('value', snapshot => {
  store.dispatch(hydrateState(snapshot.val()));
});

// Opens a Redux listener for state changes. Inserts state changes to Firebase.
store.subscribe(() => {
  ref.set(store.getState());
});

React.render(
  <Provider store={store}>
    {() => <App />}
  </Provider>, document.getElementById('app')
);

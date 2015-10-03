import { createStore } from 'redux';
import messageApp from '../reducers/reducers';

export let store = createStore(messageApp);

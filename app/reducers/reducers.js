import { MESSAGE, STATE, hydrateState, submitMessage } from '../actions/actions';

const initialState = {
  messages: [],
}

const messageApp = (state = initialState, action) => {
  switch(action.type) {
    case 'STATE':
      return Object.assign({}, state, {
        messages: action.state,
      });

    case 'MESSAGE':
      return Object.assign({}, state, {
        messages: [
          ...state.messages,
          action.message,
        ]
      });

    default:
      return state;
  }
};

export default messageApp;

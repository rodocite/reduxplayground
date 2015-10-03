import { MESSAGE, submitMessage } from '../actions/actions';

const initialState = {
  messages: [],
}

const messageApp = (state = initialState, action) => {
  switch(action.type) {
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

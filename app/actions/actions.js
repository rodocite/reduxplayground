// Action Types
export const MESSAGE = 'MESSAGE';
export const STATE = 'STATE';

// Action Creators
export const submitMessage = text => {
  return {
    type: MESSAGE,
    message: text,
  }
};

export const hydrateState = state => {
  return {
    type: STATE,
    state: state,
  }
}

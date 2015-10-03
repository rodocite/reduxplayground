// Action Types
export const MESSAGE = 'MESSAGE';

// Action Creators
export const submitMessage = text => {
  return {
    type: MESSAGE,
    message: text,
  }
};

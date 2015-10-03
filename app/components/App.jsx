import React from 'react';
import { connect } from 'react-redux';
import { submitMessage, hydrateState } from '../actions/actions';
import Firebase from 'firebase';
const ref = new Firebase("https://reduxplayground.firebaseio.com/");

class App extends React.Component {
  constructor(props) {
    super(props);
    const { dispatch } = this.props;
    ref.child('messages').once('value', snapshot => dispatch(hydrateState(snapshot.val())));
  }

  handleClick(e) {
    const { dispatch } = this.props;
    let message = React.findDOMNode(this.refs.input);
    dispatch(submitMessage(message.value.trim()));
    message.value = '';
    message.focus();
  }

  render() {
    const { messages } = this.props;
    const messageList = messages.map(message => <li>{message}</li>);
    return (
      <div>
        <ul>{messageList}</ul>
          <input type='text' ref='input'
            onKeyDown={e => {
              if(e.keyCode === 13) this.handleClick(e);
            }}
          />
          <button onClick={e => this.handleClick(e)}>
            Submit Message
          </button>
      </div>
    )
  }
};

export default connect(state => state)(App);

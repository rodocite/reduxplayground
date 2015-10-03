import React from 'react';
import { connect } from 'react-redux';
import { submitMessage } from '../actions/actions';
import '../styles/component_styles/App';

class App extends React.Component {
  constructor(props) {
    super(props);
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
    const messageList = messages.map((message, index) => <li key={index} className='message'>{message}</li>);
    return (
      <div className='container'>
        <ul className='messageList'>{messageList}</ul>
          <input
            onKeyDown={e => {
              if(e.keyCode === 13) this.handleClick(e);
            }}
            type='text'
            placeholder='Say something...'
            ref='input'
            className='inputBox'
          />
          <button
            onClick={e => this.handleClick(e)}
            className='chatButton'
            >
            Submit Message
          </button>
      </div>
    )
  }
};

export default connect(state => state)(App);

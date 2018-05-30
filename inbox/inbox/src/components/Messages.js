import React, {Component} from 'react'
import '../index.css';
import Message from './Message'
import App from '../App'

class Messages extends Component {

constructor(props){
  super(props)
  this.state = {
    messages: this.props.messages
  }
}

render() {
    return (
      <div>
        {this.props.messages.map(({message, starred, read, selected, label}, i) => <Message message={message} starred={starred} read={read} selected={selected} label={label}key={i} />)}
        {/* { this.props.messages.map((el, idx) => <p key={idx}>{el.message}</p>) } */}
    </div>)
  }
}

export default Messages

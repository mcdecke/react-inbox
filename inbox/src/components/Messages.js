import React, {Component} from 'react'
import '../index.css';
import Message from './Message'
import App from '../App'

class Messages extends Component {

// constructor(props){
//   super(props)
//   this.state = {
//     messages: this.props.messages
//   }
// }
//

render() {
console.log(this.props.messages);
    return (
      <div>
        {this.props.messages.map((message, i) => {
          console.log(message)
          return(
          <Message message={message}
          starred={message.starred}
          read={message.read}
          selected={message.selected}
          labels={message.labels}
          key={i}
          onStar={this.props.onStar}
          onSelect={this.props.onSelect}
        />)
        })}
    </div>
    )
  }

}

export default Messages

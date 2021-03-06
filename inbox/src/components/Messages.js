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
    return (
      <div>
        {this.props.messages.map((message, i) => {
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

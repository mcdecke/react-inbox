import React, {Component} from 'react';
import logo from './logo.svg';
// import './App.css';
import './index.css';
import Message from './components/Message'
import Messages from './components/Messages'
import Toolbar from './components/Toolbar'
import json from './data.json'

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      messages: json
    }
  }

  msgCount = () => this.state.messages
  .filter(m => m.read == false).length

  markAsRead = () => {
    const messages = this.state.messages.map(
      message => message.selected
      ? {
        ...message,
        read: true
      }
      : message)

    this.setState({messages: messages})
  }

  markAsUnread = () => {
    const messages = this.state.messages.map(
      message => message.selected
      ? {
        ...message,
        read: false
      }
      : message)

    this.setState({messages: messages})
  }

  deleteMessage = () => {
    const messages = this.state.messages.filter(message => !message.selected)

    this.setState({messages: messages})
  }

  onStar = (mess) => {
    let messages = this.state.messages
    let x = messages.find(message => message.id === mess.id)

    if(!x.starred) {
      x.starred = true
    } else {
      x.starred = !x.starred
    }

    let newMessages = [...messages.slice(0, x.id - 1),
      x,
      ...messages.slice(x.id)
    ]

    this.setState({messages: newMessages})
  }

  onSelect = (mess) => {

    let messages = this.state.messages
    let x = messages.find(message => message.id === mess.id)

    if(!x.selected) {
      x.selected = true
    } else {
      x.selected = !x.selected
    }

    let newMessages = [...messages.slice(0, x.id - 1),
        x,
        ...messages.slice(x.id)
      ]

    this.setState({messages: newMessages})
  }

// selectAll = () => {
//
//   const messages = [...this.state.messages]
//
//   const boxState = 'fa-minus-square-o'
//
//   console.log(messages);
//
//   if (messages.map(message => {
//     console.log(message);
//     if (message.selected === true)
//     {
//     change box to checked
//     this.boxState = 'fa-check-square-o'
//   } else if (messages.map(m => m.selected === true)) {
//     changed box to empty
//     this.boxState = 'fa-square-o'
//     }
//   }))
//   return this.boxState
// }

addLabel = (label) => {
  const messages = [...this.state.messages]
  messages.filter(message => {
    if (message.selected === true && !message.labels.includes(label)) {
      message.labels.push(label)
      message.labels = message.labels.sort()
    }
  })
  this.setState({messages: messages})
}

removeLabel = (label) => {
  const messages = [...this.state.messages]
  messages.filter(message => {
    if (message.selected === true) {
      console.log(`${label} being removed from ${message.labels}`);

    }
  })
  this.setState({messages: messages})
}

render() {
  return (<div className="App">
    <Toolbar messages={this.state.messages}
      msgCount={this.msgCount}
      markAsRead={this.markAsRead} markAsUnread={this.markAsUnread} deleteMessage={this.deleteMessage} selectAll={this.selectAll} addLabel={this.addLabel} removeLabel={this.removeLabel}/>
    <Messages messages={this.state.messages} onStar={this.onStar} onSelect={this.onSelect}/>
  </div>);
}
}

export default App;

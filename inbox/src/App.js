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

  // msgCount = () => this.state.messages
  // .filter(m => m.read == false).length

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

  onStar = () => {
    // console.log('hi');
    const messages = this.state.messages.map(message => {
      console.log('message.starred', message.starred);
      message.starred = !message.starred
    })
  }

  // onSelect = () => {
  //   console.log('hi');
  //   const messages = this.state.messages.map(message => {
  //     console.log(message.selected);
  //     message.selected = !message.selected
  //   })

  onSelect = (mess) => {

    console.log(mess);
    let messages = this.state.messages

    let x = messages.find(message => message.id === mess.id)
    console.log(x);
    x.selected = true

    let newMessages = [...messages.slice(0, x.id - 1),
      x,
      ...messages.slice(x.id)
    ]

    console.log(newMessages);

    this.setState({messages: newMessages})
  }

//   console.log(thing);
//   if (message[thing] === true) {
//     { ...message, `${thing}`: false }
//      message[thing] = false
//   } else if(message[thing] === undefined || message[thing] === false){
//      message[thing] = true
//     { ...message, `${thing}`: true }
//   }
// })
//   console.log(messages);
//
//   this.setState({
//     messages: messages
//   })
// }

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
      console.log(`${label} being added to ${message.labels}`);
      message.labels.push(label)
    }
  })
  this.setState({messages: messages})
}

removeLabel = (label) => {
  const messages = [...this.state.messages]
  messages.filter(message => {
    if (message.selected === true) {
      console.log(`${label} being removed from ${message.labels}`);
      // let fil = message.labels.filter(l => l.label !== label)
      // console.log(fil);
      // message.labels = fil
    }
  })
  this.setState({messages: messages})
}

render() {
  return (<div className="App">
    <Toolbar messages={this.state.messages}
      // msgCount={this.msgCount}
      markAsRead={this.markAsRead} markAsUnread={this.markAsUnread} deleteMessage={this.deleteMessage} selectAll={this.selectAll} addLabel={this.addLabel} removeLabel={this.removeLabel}/>
    <Messages messages={this.state.messages} onStar={this.onStar} onSelect={this.onSelect}/>
  </div>);
}
}

export default App;

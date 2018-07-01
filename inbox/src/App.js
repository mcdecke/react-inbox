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

  composeMessage = (e) => {
    e.preventDefault()
    let subj = document.getElementById('subject').value
    let body = document.getElementById('body').value
    console.log('subject', subj, 'body', body);
    // let newMessage =
  }

  msgCount = () => this.state.messages
  .filter(message => message.read == false).length

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
    console.log('delete left these messages:', messages);

    this.setState({messages: messages})
  }

  onStar = (mess) => {
    let messages = [...this.state.messages]
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

    let messages = [...this.state.messages]
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

  selectAll = () => {
  //   //  let newMessages
  //   const messages = this.state.messages.map(
  //       message => {
  //         console.log(message);
  //   if(!message.selected) {
  //     message.selected = true
  //   } else {
  //     message.selected = true
  //   }
  //   console.log(message);
  // })
  //   // newMessages = [...messages.slice(0, message.id - 1),
  //   //     message,
  //   //     ...messages.slice(message.id)
  //   //   ]
  //   console.log(this.messages);
  //   this.setState({messages: messages})
  }


selectAllChecker = () => {

  const messages = [...this.state.messages]

    let x = messages.every(message => message.selected)
    let y = messages.some(message => message.selected)

    if(x === true) {
      return 'fa-check-square-o'
    } else if(y === true){
      return 'fa-minus-square-o'
    } else return 'fa-square-o'
}

showMessage = () => {
  console.log('hi');
  // console.log(hide);
    // if(hide === false) {
    //   return 'hidden'
    // } else{
    //   return ''
    // }
}

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
    if ((message.labels.includes(label) && message.selected)) {
      let z = message.labels.filter(x => x !== label)
      message.labels = z.sort()
    }
  })
  this.setState({messages: messages})
}

render() {
  return (<div className="App">
    <Toolbar messages={this.state.messages}
      msgCount={this.msgCount}
      markAsRead={this.markAsRead} markAsUnread={this.markAsUnread}
       composeMessage={this.composeMessage} showMessage={this.showMessage} deleteMessage={this.deleteMessage} selectAll={this.selectAll} selectAllChecker={this.selectAllChecker} addLabel={this.addLabel} removeLabel={this.removeLabel}/>
    <Messages messages={this.state.messages} onStar={this.onStar} onSelect={this.onSelect}/>
  </div>);
}
}

export default App;

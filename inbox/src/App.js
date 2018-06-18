import React, { Component } from 'react';
import logo from './logo.svg';
// import './App.css';
import './index.css';
import Message from './components/Message'
import Messages from './components/Messages'
import Toolbar from './components/Toolbar'
import json from './data.json'


class App extends Component {

constructor(props){
  super(props)
    this.state = {
        messages: json
      }
    }

  msgCount = () => this.state.messages
  .filter(m => m.read === false).length

  markAsRead = () => {
    const messages = [...this.state.messages]
    messages.filter(message => {
      if (message.selected === true && message.read === false) {
        console.log(`Message ${message.id} is unread`);
        message.read = true
      }
    })
    this.setState({
      messages: messages
    })
  console.log(messages);
  }

  markAsUnread = () => {
    const messages = [...this.state.messages]
    messages.filter(message => {
      if (message.selected === true && message.read === true) {
        console.log(`Message ${message.id} is read`);
        message.read = false
      }
    })
    this.setState({
      messages: messages
    })
  console.log(messages);
  }

  deleteMessage = () => {
    const messages = [...this.state.messages]
    console.log(messages);
    const filtered = messages.filter(m => m.selected !== true)
    console.log(filtered);
    if (filtered == true) {
      this.setState({
        messages: []
      })
    } else {
      this.setState({
        messages: filtered
        })
      }
    }

  onCheck = (message, thing) => {
    const messages = this.state.messages
    if(!message[thing] || message[thing] === undefined ){
      message[thing] = true
    } else {
      message[thing] = false
    }

    let index = message.id
    this.setState({messages: [
      ...messages.slice(0, index - 1),
      {...message, [thing]: message[thing]},
      ...messages.slice(index)
    ]})
  }

  selectAll = () => {
    const messages = [...this.state.messages]
    const boxState = ''
    if(messages.every(m => m.selected === true)){
      //change box to checked
      this.boxState = 'fa-check-square-o'
    } else if (!messages.find(m => m.selected === true)) {
      //changed box to empty
      this.boxState = 'fa-square-o'
    } else {
      this.boxState = 'fa-minus-square-o'
    }
    return this.boxState
  }

  addLabel = (label) => {
    const messages = [...this.state.messages]
    messages.filter(message => {
      if (message.selected === true && !message.labels.includes(label)) {
        console.log(`${label} being added to ${message.labels}`);
        message.labels.push(label)
      }
    })
    this.setState({
      messages: messages
    })
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
    this.setState({
      messages: messages
    })
  }

  render() {
    return (
      <div className="App">
        <Toolbar messages={this.state.messages} msgCount={this.msgCount} markAsRead={this.markAsRead}
        markAsUnread={this.markAsUnread}
        deleteMessage={this.deleteMessage} selectAll={this.selectAll}
        addLabel={this.addLabel}
        removeLabel={this.removeLabel}
        />
        <Messages
          messages={this.state.messages}
          onStar={this.onStar}
          onCheck={this.onCheck}
        />
      </div>
    );
  }
}

export default App;

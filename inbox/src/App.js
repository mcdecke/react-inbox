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
    // componentDidMount = async () => {
    //     let messages = await json
    //     this.setState({messages: messages})
    // }
  msgCount = () => this.state.messages
  .filter(m => m.read === false).length


  // toggleRead = (readStatus) => {
  //   console.log(readStatus);
  //   const messages = [...this.state.messages]
  //   messages.filter(message => {
  //     if (message.selected === true && message.read === readStatus) {
  //       console.log(`Message ${message.id} is unread`);
  //       message.read = !message.read
  //     }
  //   })
  //   this.setState({
  //     messages: messages
  //   })
  // console.log(messages);
  // }


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
    console.log(message[thing]);
      console.log(thing);
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
      console.log('checked');
      this.boxState = 'fa-check-square-o'
    } else if (!messages.find(m => m.selected === true)) {
      //changed box to empty
      console.log('unchecked');
      this.boxState = 'fa-square-o'
    } else {
      console.log('minus');
      this.boxState = 'fa-minus-square-o'
    }
    return this.boxState
  }

  render() {
    return (
      <div className="App">
        <Toolbar messages={this.state.messages} msgCount={this.msgCount} markAsRead={this.markAsRead}
        markAsUnread={this.markAsUnread}
        toggleRead={this.toggleRead}
        deleteMessage={this.deleteMessage} selectAll={this.selectAll}
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

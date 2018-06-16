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
    // markAsRead = () => {
    //   console.log('hi');
    //     let arr = this.state.messages
    //     let fArr = arr.filter(function(x){
    //       if (x.selected && x.read === 'unread') {
    //         x.read = 'read'
    //       } else if (x.selected && x.read === 'read') {
    //         x.read = 'unread'
    //       }
    //       else{
    //         console.log('he');
    //       }
    //     })
    //     return fArr
    //   }

    deleteMessage = () => {
      const messages = [...this.state.messages]
      const filtered = messages.filter(m => m.selected === false)
      console.log(filtered);
      if (filtered === undefined) {
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
    // let theTargetMsgId = message.id;  // = messages.indexOf(message)
    // for (var i = 0; i < messages.length; i++) {
    //   if( messages[i].id == message.id ) theTargetMsgId = messages[i].id-1;
    // }
    // let newMsgs = this.state.messages.map( (mappedMsg) => {
    // if(message.selected == undefined){
    //   message.selected = true
    // }else{
    //   message.selected = !message.selected
    //   console.log(message.selected);
    // }
    // return mappedMsg.id == message.id ? message : mappedMsg
    // })
    // console.log('newMsgs', newMsgs);
    // this.setState({messages: messages})
  }

  onStar = (message) => {

    const messages = this.state.messages
    console.log('star');

    if(!message.starred || message.starred === undefined ){
      message.starred = true
    } else {
      message.starred = false
    }

    let index = message.id
    this.setState({messages: [
      ...messages.slice(0, index - 1),
      {...message, starred: message.starred},
      ...messages.slice(index)
    ]})

    console.log(`message ${message.id}'s star was changed to ${message.starred}`);
  }

  selectAll = () => {
    console.log('hi');
  }

  render() {
    return (
      <div className="App">
        <Toolbar messages={this.state.messages} msgCount={this.msgCount} msgCounter={this.state.msgCounter} markAsRead={this.markAsRead}
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

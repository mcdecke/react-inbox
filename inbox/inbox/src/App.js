import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Message from './components/Message'
import Messages from './components/Messages'
import Toolbar from './components/Toolbar'
import json from './data.json'


class App extends Component {

constructor(props){
  super(props)
    this.state = {
        messages: []
      }
    }

    componentDidMount() {
        let {messages} = json
        this.setState({messages: messages})
    }


  render() {
    console.log(this.state.messages);
    return (
      <div className="App">
        <Toolbar messages={this.state.messages} />
        <Messages messages={this.state.messages}/>
      </div>
    );
  }
}

export default App;

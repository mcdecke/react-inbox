import React, { Component } from 'react'

class Message extends Component {

  state = {
    message: this.props.message,
    read: this.props.read,
    starred: this.props.starred,
    selected: this.props.selected,
    label: this.props.label,
    checked: this.props.selected
  }

  onClick = async event => {
    event.preventDefault
    event.stopPropagation()
    console.log(this.props.selected);
    if(this.state.selected === 'selected'){
    // let checked = false
    this.setState({selected: 'selected'})
  } else {
    this.setState({selected: 'unselected'})
    // this.checked = true
    }
  }

  onStar = async event => {
    event.preventDefault
    event.stopPropagation()
    if(this.state.starred === 'fa-star'){
      console.log(this.props.starred);
    this.setState({starred: 'fa-star-o'})
  } else {
    this.setState({starred: 'fa-star'})
    }
  }

  onRead = async event => {
    event.preventDefault
    event.stopPropagation()
    if(this.state.read === 'unread'){
    this.setState({read: 'read'})
  } else {
    this.setState({read: 'unread'})
    }
  }

  render() {
    return (
      <div className={`row message read ${this.state.selected} ${this.props.read}`} >
        <div className="col-xs-1">
          <div className="row">
            <div className="col-xs-2">
              <input type="checkbox" onClick={this.onClick} defaultChecked={(this.state.selected === 'selected')}/>
            </div>
            <div className="col-xs-2">
              <i className={`star fa ${this.state.starred}`} onClick={this.onStar}></i>
            </div>
          </div>
        </div>
        <div className="col-xs-11">
          <span className="label label-warning">{this.state.label}</span>
            <a href="#">
              {this.state.message}
            </a>
        </div>
      </div>
    )
  }
}

export default Message

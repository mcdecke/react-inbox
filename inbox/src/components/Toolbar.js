import React, { Component } from 'react'
import '../index.css'
import Message from './Message'

class Toolbar extends Component {

  render () {
    return (
      <div className="row toolbar">
        <div className="col-md-12">
          <p className="pull-right">
            <span className="badge" >{this.props.msgCount()}</span>
              unread messages
          </p>

          <button className="btn btn-default">
            <i className="fa fa-minus-square-o" onClick={this.props.selectAll}></i>
          </button>

          <button className="btn btn-default" onClick={this.props.markAsRead}>
            Mark As Read
          </button>

          <button className="btn btn-default" onClick={this.props.markAsUnread} >
            Mark As Unread
          </button>

          <select className="form-control label-select">
            <option>Apply label</option>
            <option value="dev">dev</option>
            <option value="personal">personal</option>
            <option value="gschool">gschool</option>
          </select>

          <select className="form-control label-select">
            <option>Remove label</option>
            <option value="dev">dev</option>
            <option value="personal">personal</option>
            <option value="gschool">gschool</option>
          </select>

          <button className="btn btn-default">
            <i className="fa fa-trash-o" onClick={this.props.deleteMessage}></i>
          </button>
        </div>
      </div>
    )
  }
}

export default Toolbar

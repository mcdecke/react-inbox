import React, { Component } from 'react'
import '../index.css'
import Message from './Message'

class Toolbar extends Component {

  handleChange(str, event) {
    let label = event.target.value
    console.log(event.target);
    console.log(str);

    if (str === 'add') {
      this.props.addLabel(label)
    }
    if (str === 'del') {
      this.props.removeLabel(label)
    }
  }


  render () {
    return (
      <div className="row toolbar">
        <div className="col-md-12">
          <p className="pull-right">
            <span className="badge">
              {this.props.msgCount()}
            </span>
             unread messages
          </p>

          <button className="btn btn-default" onClick={this.props.selectAll}>
            <i className={`fa ${this.props.selectAllChecker()}`}></i>
          </button>

          <button className="btn btn-default" onClick={this.props.markAsRead}>
            Mark As Read
          </button>

          <button className="btn btn-default" onClick={this.props.markAsUnread} >
            Mark As Unread
          </button>

          <select onChange={(e) => this.handleChange('add', e)} className="form-control label-select ">
            <option>Apply label</option>
            <option value="dev">dev</option>
            <option value="personal">personal</option>
            <option value="gschool">gschool</option>
          </select>

          <select onChange={(e) => this.handleChange('del', e)} className="form-control label-select">
            <option>Remove label</option>
            <option value="dev">dev</option>
            <option value="personal">personal</option>
            <option value="gschool">gschool</option>
          </select>

          <button className="btn btn-default" onClick={this.props.deleteMessage}>
            <i className="fa fa-trash-o" ></i>
          </button>
        </div>
      </div>
    )
  }
}

export default Toolbar

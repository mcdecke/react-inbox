import React, {Component} from 'react'
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

  handleShow() {
      let x = document.getElementById('hider')
      if (x.style.display === "none") {
        x.style.display = "block";
      } else {
        x.style.display = "none";
      }
    }

  render() {
    return (<div className="row toolbar">
      <div className="col-md-12">
        <p className="pull-right">
          <span className="badge">
            {this.props.msgCount()}
          </span>
          unread messages
        </p>

        <a className="btn btn-danger" onClick={this.handleShow}>
          <i className="fa fa-plus"></i>
        </a>

        <button className="btn btn-default" onClick={this.props.selectAll}>
          <i className={`fa ${this.props.selectAllChecker()}`}></i>
        </button>

        <button className="btn btn-default" onClick={this.props.markAsRead}>
          Mark As Read
        </button>

        <button className="btn btn-default" onClick={this.props.markAsUnread}>
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
          <i className="fa fa-trash-o"></i>
        </button>
      </div>

      <div id='hider'>
        <form className="form-horizontal well">
          <div className="form-group">
            <div className="col-sm-8 col-sm-offset-2">
              <h4>Compose Message</h4>
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="subject" className="col-sm-2 control-label">Subject</label>
              <div className="col-sm-8">
                <input type="text" className="form-control" id="subject" placeholder="Enter a subject" name="subject"></input>
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="body" className="col-sm-2 control-label">Body</label>
              <div className="col-sm-8">
                <textarea name="body" id="body" className="form-control"></textarea>
              </div>
            </div>
            <div className="form-group">
              <div className="col-sm-8 col-sm-offset-2">
                <input type="submit" value="Send" className="btn btn-primary" onClick={(e) => this.props.composeMessage(e)}></input>
              </div>
            </div>
          </form>
        </div>
      </div>
    )
  }
}

export default Toolbar

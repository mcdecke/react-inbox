import React, {Component} from 'react'

const Message = ({message, selected, read, starred, onStar, onCheck, labels}) =>  {

return {
render() {
  let selectedClass = selected ? 'selected' : ''
  let readClass = read ? 'read' : 'unread'
  let starredClass = starred ? 'fa-star' : 'fa-star-o'

    return (<div className={`row message ${selectedClass} ${readClass}`}>
      <div className="col-xs-1">
        <div className="row">
          <div className="col-xs-2">
            <input type="checkbox" onClick={() => onCheck(message, 'selected')} defaultChecked={selected}
            />
          </div>
          <div className="col-xs-2">
            <i className={`star fa ${starredClass}`} onClick={() => onCheck(message, 'starred')}></i>
          </div>
        </div>
      </div>
      <div className="col-xs-11">
        { labels.map((label, i) => <span key={i} className="label label-warning">{label}</span>) }
        <a href="#">
          {message.subject}
        </a>
      </div>
    </div>)
  }
  }
}

export default Message

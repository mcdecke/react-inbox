import React, {Component} from 'react'

const Message = ({message, selected, read, starred, onStar, onSelect, labels}) =>  {

  let selectedClass = selected ? 'selected' : ''
  let readClass = read ? 'read' : 'unread'
  let starredClass = starred ? 'fa-star' : 'fa-star-o'
  let labelClass = labels ? labels : []

  // console.log(selectedClass);
  // console.log(selected);

    return (
    <div className={`row message ${selectedClass} ${readClass}`} >
      <div className="col-xs-1">
        <div className="row">
          <div className="col-xs-2">
            <input type="checkbox"  defaultChecked={selected}
            onClick={() => onSelect(message)}
            />
          </div>
          <div className="col-xs-2">
            <i className={`star fa ${starredClass}`} onClick={() => onStar(message)}></i>
          </div>
        </div>
      </div>
      <div className="col-xs-11">
        { labelClass.map((label, i) => <span key={i} className="label label-warning">{label}</span>) }
        <a href="#">
          {message.subject}
        </a>
      </div>
    </div>)
}

export default Message

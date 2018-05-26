import React from 'react';
import Checkbox from './form/Checkbox'
import CloseButton from './utilities/CloseButton'

export default class TaskList extends React.Component {

  TaskLabel (todo) {
    if (todo.completed) {
      return (
        <span>
          <del>
            { todo.task}
          </del>
        </span>
      )
    } else {
      return (
        <span>{ todo.task}</span>
      )
    }
  }
  
  render() {
    return (
      <div>
        { this.props.todos.map((todo, index) => ( 
          <div key={ index } className="clearfix">
            <Checkbox className="float-left" checked={ todo.completed } label={ todo.task } onClick={ this.props.completeTask.bind(this, index) } />
            { this.TaskLabel(todo) }
            <CloseButton className="float-right" />
          </div>
        )) }
      </div>
    )
  }
}
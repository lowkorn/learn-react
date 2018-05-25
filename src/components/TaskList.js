import React from 'react';

export default class TaskList extends React.Component {

  // static propTypes = {
  //     todos: React.PropTypes.array.isRequired
  // }

  render() {
    return (
      <ul>
        { this.props.todos.map((task, index) => {
          return <li key={ index } >{ task.task }</li>
        }) }
      </ul>
    )
  }
}
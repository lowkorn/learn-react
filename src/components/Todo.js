import React from 'react'
import Button from './form/Button'
import TextInput from './form/TextInput'
import TaskList from './TaskList'

export default class Todo extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      text: '',
      todos: [],
      finished: []
    };
  }

  render() {
    return (
      <div>
        <form onSubmit={ this.handleOnSubmit }>
          <div className="input-group mb-3">
            <TextInput placeholder="Enter task" onChange={ this.handleOnChange } value={ this.state.text } />
            <div className="input-group-append">
              <Button className="btn-primary" buttonName="TODO" />
            </div>
          </div>
        </form>
        <div>
          <TaskList todos={ this.state.todos } completeTask={ this.completeTask } deleteTask={ this.deleteTask } />
        </div>
      </div>
    )
  }

  handleOnChange = (event) => {
    this.setState({ text: event.target.value })
    event.target.value = ''
  }

  handleOnSubmit = (event) => {
    event.preventDefault()
    if (this.state.text.length) {
      let newTask = this.state.text
      this.setState({
        todos: [ ...this.state.todos, { task: newTask, 'completed': false } ],
        text: ''
      })
    }
  }

  completeTask = (index, status) => {
    this.setState(
      { todos: this.state.todos.map((todo, key) => {
        return index === key ? { ...todo, completed: status  } : todo
      })}
    )
  }

  deleteTask = (index) => {
    let head = this.state.todos.slice(0, index)
    let tail = this.state.todos.slice(index + 1)
    this.setState({
      todos: [ ...head, ...tail ]
    })
  }
}
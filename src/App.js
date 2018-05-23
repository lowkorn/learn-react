import React, { Component } from 'react';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      text: '',
      todos: [],
      finished: []
    };
  }

  // addTodoList = () => {
  //   console.log($('#todo-input-box')[0].value)
  //   // alert($('#todo-input-box').value)
  //   // this.setState({ todos.push( $('#todo-input-box').value ) })
  // }

  handleOnChange = (e) => {
    this.setState({ text: e.target.value })
  }

  handleOnSubmit = (e) => {
    e.preventDefault()
    if (this.state.text.length) {
      let newTask = this.state.text
      this.setState({
        todos: this.state.todos.concat(newTask),
        text: ''
      })
    }
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-6 offset-md-3">
            <form onSubmit={ this.handleOnSubmit }>
              <div className="input-group mb-3">
                <input type="text" className="form-control" placeholder="Enter task" aria-label="Enter task" aria-describedby="basic-addon2" 
                      onChange={ this.handleOnChange }
                      value={ this.state.text }/>
                <div className="input-group-append">
                  <button className="btn btn-primary">TODO</button>
                </div>
              </div>
            </form>
            <div className="lead">
              <TodoList todos={ this.state.todos } />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

class TodoList extends Component {
  render () {
    return (
      <ul>
        { this.props.todos.map( (todo, index) => (
          <li key={index}>{ todo }</li>
        )) }      
      </ul>
    )
  }
}

export default App;

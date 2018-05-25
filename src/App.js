import React, { Component } from 'react';
import Todo from './components/Todo'

class App extends Component {

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-6 offset-md-3">
            <Todo/>
          </div>
        </div>
      </div>
    );
  }
}

// class TodoList extends Component {
//   render () {
//     return (
//       <ul>
//         { this.props.todos.map( (todo, index) => (
//           <li key={index}>{ todo }</li>
//         )) }      
//       </ul>
//     )
//   }
// }

export default App;

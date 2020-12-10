import React, { Component } from 'react';
import Todos from './components/Todos';

/* function App() {
  return (
    <div className="App">
      <h1>App</h1>
    </div>
  );
} */

class App extends Component{
  state = {
    todos: [
      {
        id: 1,
        title: 'Take out the trash',
        completed: false
      },
      {
        id: 2,
        title: 'Dinner with wife',
        completed: false
      },
      {
        id: 3,
        title: 'Meeting with Boss',
        completed: false
      } 
    ]
  }
  render(){
    return(
      <div className="App"> 
      <Todos todos={this.state.todos} />
      </div>
    );
  }
}

export default App;

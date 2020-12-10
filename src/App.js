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
  render(){
    return(
      <div className="App"> 
      <Todos />
      </div>
    );
  }
}

export default App;

import React from 'react';
import logo from './logo.svg';
import './App.css';

/*
function App(props) {
  return (
  <div class="tests">{props.name}</div>
  );
}
*/

class App extends React.Component {

   render() {
      return (
        <div>{this.props.name}</div>
      );
   }
}

export default App;

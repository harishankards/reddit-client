import React, { Component } from 'react';
import './App.css';
import * as firebase from 'firebase';
import config  from './firebase-config';

class App extends Component {
  constructor(){
    super();
    firebase.initializeApp(config);
  }

  render() {
    return (
      <div className="App">
        Hello World
      </div>
    );
  }
}
export default App;

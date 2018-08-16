import React, { Component } from 'react';
import Contact from './components/Contact';
import './App.css';

// main app component that gets rendered
// to the index.html dom element #root

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>The app component</h1>
        <Contact></Contact>
      </div>
    );
  }
}

export default App;

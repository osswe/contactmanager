import React, { Component } from 'react';
import Contact from './components/Contact';
import Header from './components/Header';
import './App.css';

// main app component that gets rendered
// to the index.html dom element #root

class App extends Component {
  render() {
    
    return (
      <div className="App">
        <Header branding="My new header!" />
        <Contact name="John Doe" email = "jdoe@gmail.com" phone="555-666-7777" />
        <Contact name="Karen Smith" email = "karen@gmail.com" phone="777-666-5555" />
      </div>
    );
  }
}

export default App;

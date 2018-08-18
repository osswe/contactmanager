import React, { Component } from 'react';
import Contacts from './components/Contacts';
import Header from './components/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import { Provider } from './context';

// main app component that gets rendered
// to the index.html dom element #root

class App extends Component {
  render() {

    return (
      <Provider>
        <div className="App">
          <Header branding="Contact Manager" />
          <div className="container">
            <Contacts />
          </div>
        </div>
      </Provider>
    );
  }
}

export default App;

import React, { Component } from 'react';
import Contacts from './components/contacts/Contacts';
import AddContact from './components/contacts/AddContact';
import Header from './components/layout/Header';
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
            <AddContact />
            <Contacts />
          </div>
        </div>
      </Provider>
    );
  }
}

export default App;

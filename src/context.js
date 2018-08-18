import React, { Component } from 'react'

const Context = React.createContext();

export class Provider extends Component {
  state = {
    contacts: [
      {
        id: 1,
        name: 'John Doe',
        email: 'jdoe@gmail.com',
        phone: '555-666-7777'
      },
      {
        id: 2,
        name: 'Karen Williams',
        email: 'kwilliams@gmail.com',
        phone: '888-999-0000'
      },
      {
        id: 3,
        name: 'Henry Johnson',
        email: 'henry@gmail.com',
        phone: '111-222-3333'
      },
    ]
  };

  render() {
    return (
      <Context.Provider value={ this.state }>
        { this.props.children }
      </Context.Provider>
    )
  }
}

export const Consumer = Context.Consumer;

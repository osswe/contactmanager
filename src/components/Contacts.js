import React, { Component } from 'react'
import Contact from './Contact';

class Contacts extends Component {
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
    const { contacts } = this.state;

    return (
      <div>
        { contacts.map(contact =>
          <Contact
            key={ contact.id }
            contact={ contact }
          />
        ) }
      </div>
    )
  }
}


export default Contacts;
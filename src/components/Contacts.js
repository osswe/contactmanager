import React, { Component, Fragment } from 'react'
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
      <Fragment>
        { contacts.map(contact =>
          <Contact
            key={ contact.id }
            contact={ contact }
            deleteClickHandler={ this.deleteContact.bind(this, contact.id) }
          />) }
      </Fragment>
    )
  }

  deleteContact = (id) => {
    // console.log("deleting: " + id);
    const { contacts } = this.state;
    const newContacts = contacts.filter(contact => contact.id !== id);
    this.setState({ contacts: newContacts });
  }
}

export default Contacts;
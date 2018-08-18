import React, { Component, Fragment } from 'react'
import Contact from './Contact';

import { Consumer } from '../context';
class Contacts extends Component {


  render() {
    return (
      <Consumer>
        { value => {
          const { contacts } = value;
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
        } }
      </Consumer>
    );
  }

  deleteContact = (id) => {
    // console.log("deleting: " + id);
    const { contacts } = this.state;
    const newContacts = contacts.filter(contact => contact.id !== id);
    this.setState({ contacts: newContacts });
  }
}

export default Contacts;
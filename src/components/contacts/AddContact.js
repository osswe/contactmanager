import React, { Component } from 'react'
import { Consumer } from '../../context';
import uuid from 'uuid';
import TextInputGroup from '../layout/TextInputGroup';

class AddContact extends Component {
  state = {
    name: '',
    email: '',
    phone: '',
    errors: {}
  }

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  }

  onSubmit = (dispatch, e) => {
    e.preventDefault(); // prevent default submission behavior
    const { name, email, phone } = this.state;

    // check for errors
    if (name === '') {
      this.setState({ errors: { name: 'Name is required' } });
      return;
    }
    if (email === '') {
      this.setState({ errors: { email: 'Email is required' } });
      return;
    }
    if (phone === '') {
      this.setState({ errors: { phone: 'Phone is required' } });
      return;
    }

    const newContact = { id: uuid(), name, email, phone };
    dispatch({
      type: 'ADD_CONTACT',
      payload: newContact
    });

    // clear state
    this.setState({ name: '', email: '', phone: '', errors: {} });

    // redirect to homepage
    this.props.history.push('/');
  }

  render() {
    const { name, email, phone, errors } = this.state;
    return (
      <Consumer>
        { value => {
          const { dispatch } = value;
          return (
            <div className="card mb-3">
              <div className="card-header">Add Contact</div>
              <div className="card-body">
                <form onSubmit={ this.onSubmit.bind(this, dispatch) }>
                  <TextInputGroup error={ errors.name } label="Name" name="name" type="text" placeholder="Enter name..." value={ name } onChange={ this.onChange } />
                  <TextInputGroup error={ errors.email } label="Email" name="email" type="email" placeholder="Enter email..." value={ email } onChange={ this.onChange } />
                  <TextInputGroup error={ errors.phone } label="Phone" name="phone" type="text" placeholder="Enter phone..." value={ phone } onChange={ this.onChange } />
                  <input type="submit" value="Add Contact" className="btn btn-block" />
                </form>
              </div>
            </div>
          )
        } }
      </Consumer>
    )
  }
}

export default AddContact;
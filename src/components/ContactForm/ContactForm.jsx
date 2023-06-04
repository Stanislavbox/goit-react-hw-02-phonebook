import React, { Component } from 'react';

class ContactForm extends Component {
  state = {
    name: '',
    number: ''
  };

  isDuplicateContact = (name) => {
    const { contacts } = this.props;
    return contacts.some((contact) => contact.name.toLowerCase() === name.toLowerCase());
  };

  handleChange = ({ target }) => {
    this.setState({
      [target.name]: target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    if (this.isDuplicateContact(this.state.name)) {
      alert('Contact with the same name already exists!');
      return;
    }
    this.props.userName({
      name: this.state.name,
      number: this.state.number
    });
    this.setState({
      name: '',
      number: ''
    });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor="example name">Name</label>
        <input
        type="text"
        name="name"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
        onChange={this.handleChange}
        value={this.state.name}
        />
    
        <label htmlFor="example number">Number</label>
        <input
        type="tel"
        name="number"
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
        onChange={this.handleChange}
        value={this.state.number}
        />

        <button>Add contact</button>

      </form>
    );
  }
}

    export default ContactForm;
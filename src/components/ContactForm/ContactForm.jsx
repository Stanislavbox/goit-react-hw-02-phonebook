import React, { Component } from 'react';
import PropTypes from 'prop-types';
import css from './ContactForm.module.css'

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
      this.setState({name: '', number: ''})
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
      <form className={css.form_contact} onSubmit={this.handleSubmit}>
        <label className={css.form_lable} htmlFor="example name">Name</label>
        <input
        className={css.form_input}
        type="text"
        name="name"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
        onChange={this.handleChange}
        value={this.state.name}
        />
    
        <label className={css.form_lable} htmlFor="example number">Number</label>
        <input
        className={css.form_input}
        type="tel"
        name="number"
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
        onChange={this.handleChange}
        value={this.state.number}
        />

        <button className={css.form_button}>Add contact</button>

      </form>
    );
  }
}

ContactForm.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ).isRequired,
  userName: PropTypes.func.isRequired,
};

    export default ContactForm;
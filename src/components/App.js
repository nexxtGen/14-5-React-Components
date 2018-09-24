import React from 'react';
import contactsArr from '../data/contactsArr.json';
import Contacts from './Contacts';
import ContactForm from './ContactForm';
  
  const contactForm = {
    firstName: '',
    lastName: '',
    email: '',
    image: ''
  };

var App = React.createClass({
    render: function() {
        return (
            React.createElement('div', {className: 't-header__app--react'},
                React.createElement(ContactForm, {contact: contactForm}),
                React.createElement(Contacts, {items: contactsArr}, {})
            )
        );
    }
});

export default App;
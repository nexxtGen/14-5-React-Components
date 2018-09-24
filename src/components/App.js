import React from 'react';
import contactsArr from '../data/contactsArr.json';
import Contacts from './Contacts';
import ContactForm from './ContactForm';
  
  const contactFormObj = {
    firstName: '',
    lastName: '',
    email: '',
    image: ''
  };

  class App extends React.Component {
    render() {
        return (
            <div className={'t-header__app--react'}> 
                <ContactForm contact={contactFormObj} > </ContactForm>
                <Contacts items={contactsArr} > </Contacts>                
            </div>
        );
    }
  };

export default App;
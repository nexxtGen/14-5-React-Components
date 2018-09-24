import React from 'react';
import Contact from './Contact';

class Contacts extends React.Component {
    propTypes = {
        items: React.PropTypes.array.isRequired,
    }

    render() {
        const contactsVar = this.props.items.map(contactElement => {
            return <Contact item={contactElement} key={contactElement.id}></Contact>            
        });

        return <ul className={'contactsList'}>{contactsVar}</ul>        
    }
};

export default Contacts;
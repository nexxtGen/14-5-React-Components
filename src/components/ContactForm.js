import React from 'react';

class ContactForm extends React.Component {
    static propTypes = {
        contact: React.PropTypes.object.isRequired
    };

    render() {
        return (
            <form className={'contactForm'}>
                <input 
                    type={'text'}
                    placeholder={'Imię'}
                    value={this.props.contact.firstName}>
                </input>
                <input
                    type={'text'}
                    placeholder={'Nazwisko'}
                    value={this.props.contact.lastName}>
                </input>
                <input
                    type={'email'}
                    placeholder={'Email'}
                    value={this.props.contact.email}>
                </input>
                <button type={'submit'}>Dodaj kontakt</button>
            </form>
        )
    }
};

export default ContactForm;
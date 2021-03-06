
var contacts = [
    {
      id: 1,
      firstName: 'Jan',
      lastName: 'Nowak',
      email: 'jan.nowak@example.com',
      image: './images/contacts/man_01.jpg',
    },
    {
      id: 2,
      firstName: 'Natalia',
      lastName: 'Ginter',
      email: 'natiXXD.g1N73R@example.com',
      image: './images/contacts/woman_01.jpg',
    },
    {
      id: 3,
      firstName: 'Adam',
      lastName: 'Kowalski',
      email: 'adam.kowalski@example.com',
      image: './images/contacts/man_02.jpg',
    },
    {
      id: 4,
      firstName: 'Kasia',
      lastName: 'Lochmann',
      email: 'k4s14.h3h3@example.com',
      image: './images/contacts/woman_02.jpg',
    },
    {
      id: 5,
      firstName: 'Zbigniew',
      lastName: 'Koziol',
      email: 'zbigniew.koziol@example.com',
      image: './images/contacts/man_03.jpg',
    },
    {
      id: 6,
      firstName: 'Maja',
      lastName: 'Omuller',
      email: 'majka.omuller@example.com',
      image: './images/contacts/woman_03.jpg',
    }
  ];
  
  var contactForm = {
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
                React.createElement(Contacts, {items: contacts}, {})
            )
        );
    }
});


var Contacts = React.createClass({
    propTypes: {
        items: React.PropTypes.array.isRequired,
    },

    render: function() {
        var contactsVar = this.props.items.map(function(contactElement) {
            return React.createElement(Contact, {item: contactElement, key: contactElement.id})
        });

        return (
            React.createElement('ul', {className: 'contactsList'}, contactsVar)
        );
    }
});
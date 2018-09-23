
var Contact = React.createClass ({
    propTypes: {
        item: React.PropTypes.object.isRequired,
    },

    render: function() {
       return (
           React.createElement('div', {className: 't-header__contactItem'},
                React.createElement('div', {className: 't-header__contactImageContainer'},
                    React.createElement('img', {
                        className: 't-header__contactImage',
                        src: this.props.item.image
                    }),
                ),
                React.createElement('div', {className: 't-header__contactInfoContainer'},
                    React.createElement('p', {className: 'contactlabel'}, 'Imię: ' + this.props.item.firstName ),
                    React.createElement('p', {className: 'contactLabel'}, 'Nazwisko: ' + this.props.item.lastName),
                    React.createElement('a', {className: 'contactEmail', href: 'mailto:' + this.props.item.email}, this.props.item.email)
                )
           )
       ) 
    }
});
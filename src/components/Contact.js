import React from 'react';

class Contact extends React.Component {    
    static propTypes = {
        item: React.PropTypes.object.isRequired,
    };

    render() {
        return (
            <div className={"t-header__contactItem"}>           
                <div className={'t-header__contactImageContainer'}>
                    <img className={'t-header__contactImage'} src={this.props.item.image}/>                    
                </div>
                <div className={'t-header__contactInfoContainer'}>
                    <p className={'contactlabel'}>
                        Imię: {this.props.item.firstName} 
                    </p>
                    <p className={'contactLabel'}>
                        Nazwisko: {this.props.item.lastName}</p>
                    <a className={'contactEmail'} href={'mailto:' + this.props.item.email}>
                        {this.props.item.email}
                    </a>
                </div>
            </div>
        ) 
    }
};

export default Contact;
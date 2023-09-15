import { Component } from 'react';
import ContactListItem from './ContactListItem';

class ContactList extends Component {
  componentDidUpdate = prevProps => {
    if (this.props.contacts !== prevProps.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.props.contacts));
    }
  };

  render() {
    return (
      <ul>
        {this.props.contacts.map(contact => (
          <ContactListItem
            key={contact.id}
            id={contact.id}
            name={contact.name}
            number={contact.number}
            onClick={this.props.onClick}
          />
        ))}
      </ul>
    );
  }
}

export default ContactList;

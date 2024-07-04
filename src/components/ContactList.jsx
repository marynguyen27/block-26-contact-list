import React from 'react';
import ContactRow from './ContactRow';

const ContactList = ({ contacts, setSelectedContactId }) => {
  if (!contacts) {
    return <p>Loading...</p>;
  }

  return (
    <div className='contact-list'>
      {contacts.map((contact) => (
        <div key={contact.id}>
          <p>Name: {contact.name}</p>
          <p>Username: {contact.username}</p>
          <p>Email: {contact.email}</p>
          <p>Address: {contact.address}</p>
          <p>Phone: {contact.phone}</p>
          <p>Website: {contact.website}</p>
          <p>id: {contact.id}</p>
        </div>
      ))}
    </div>
  );
};

export default ContactList;

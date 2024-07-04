import React from 'react';
import ContactRow from './ContactRow';

const ContactList = ({ contacts, setSelectedContactId }) => {
  if (!contacts) {
    return <p>Loading...</p>;
  }

  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Username</th>
          <th>Email</th>
        </tr>
      </thead>
      <tbody>
        {contacts.map((contact) => (
          <ContactRow
            key={contact.id}
            contact={contact}
            setSelectedContactId={setSelectedContactId} // Pass setSelectedContactId to each ContactRow
          />
        ))}
      </tbody>
    </table>
  );
};

export default ContactList;

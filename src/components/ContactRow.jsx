import React from 'react';

const ContactRow = ({ contact, setSelectedContactId }) => {
  return (
    <tr
      onClick={() => {
        setSelectedContactId(contact.id);
      }}
    >
      <td>{contact.name}</td>
      <td>{contact.username}</td>
      <td>{contact.email}</td>
    </tr>
  );
};

export default ContactRow;

import React, { useState, useEffect } from 'react';

export default function SelectedContact({
  selectedContactId,
  setSelectedContactId,
}) {
  const [contact, setContact] = useState(null);

  useEffect(() => {
    if (selectedContactId) {
      fetchContact(selectedContactId);
    }
  }, [selectedContactId]);

  const fetchContact = (id) => {
    fetch(`https://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com/users/${id}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response broke');
        }
        return response.json();
      })
      .then((data) => {
        setContact(data);
      })
      .catch((error) => {
        console.error('Error fetching contact:', error);
        setContact(null);
      });
  };

  if (!selectedContactId) {
    return null;
  }
  if (!contact) {
    return <p>Loading contact details...</p>;
  }

  return (
    <div className='selected-contact'>
      <h2>Contact Details</h2>
      <p>
        <strong>Name:</strong> {contact.name}
      </p>
      <p>
        <strong>Username:</strong> {contact.username}
      </p>
      <p>
        <strong>Email:</strong> {contact.email}
      </p>
      <p>
        <strong>Address:</strong> {contact.address.street},{' '}
        {contact.address.suite}, {contact.address.city},{' '}
        {contact.address.zipcode}
      </p>
      <p>
        <strong>Phone:</strong> {contact.phone}
      </p>
      <p>
        <strong>Website:</strong> {contact.website}
      </p>
      <p>
        <strong>Id:</strong> {contact.id}
      </p>

      <button onClick={() => setSelectedContactId(null)}>Go Back</button>
    </div>
  );
}

import React, { useState, useEffect } from 'react';

export default function SelectedContact({
  selectedContactId,
  setSelectedContactId,
}) {
  const [contact, setContact] = useState(null);

  useEffect(() => {
    if (selectedContactId) {
      fetchContact(selectedContactId); // Call fetchContact function when selectedContactId changes
    }
  }, [selectedContactId]);

  useEffect(() => {
    // This useEffect callback runs once on component mount due to the empty dependency array
    console.log('Component mounted or dependency changed.');
    // Additional logic can go here if needed
  }, []);

  const fetchContact = (id) => {
    fetch(`https://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com/users/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setContact(data);
      })
      .catch((error) => {
        console.error('Error fetching contact:', error);
      });
  };

  console.log('Contact:', contact);

  if (!selectedContactId) {
    return null;
  }

  return (
    <div className='selected-contact'>
      <h2>Contact Details</h2>
      <p>
        <strong>Name:</strong> {contact?.name}
      </p>
      <p>
        <strong>Email:</strong> {contact?.email}
      </p>
      <p>
        <strong>Phone:</strong> {contact?.phone}
      </p>
      <button onClick={() => setSelectedContactId(null)}>Go Back</button>
    </div>
  );
}

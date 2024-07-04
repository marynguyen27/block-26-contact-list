import React, { useState, useEffect } from 'react';
import ContactList from './components/ContactList';
import SelectedContact from './components/SelectedContact';
import './index.css';

export default function App() {
  const [selectedContactId, setSelectedContactId] = useState(null);
  const [contacts, setContacts] = useState(null);

  useEffect(() => {
    fetchContacts();
  }, []);

  const fetchContacts = () => {
    fetch('https://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com/users')
      .then((response) => response.json())
      .then((data) => {
        setContacts(data);
      })
      .catch((error) => {
        console.error('Error fetching contacts:', error);
      });
  };

  console.log('Contacts:', contacts);

  return (
    <div className='app'>
      <h1>Contact List</h1>
      {contacts ? (
        <ContactList
          contacts={contacts}
          setSelectedContactId={setSelectedContactId}
        />
      ) : (
        <p>Loading contacts...</p>
      )}

      {selectedContactId && (
        <SelectedContact
          selectedContactId={selectedContactId}
          setSelectedContactId={setSelectedContactId}
        />
      )}
    </div>
  );
}

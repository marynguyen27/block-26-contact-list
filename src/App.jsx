import React, { useState } from 'react';
import ContactList from './components/ContactList';
import SelectedContact from './components/SelectedContact';

export default function App() {
  const [selectedContactId, setSelectedContactId] = useState(null);
  const [contacts, setContacts] = useState(null);

  return (
    <div className='app'>
      <h1>Contact List</h1>
      <ContactList setSelectedContactId={setSelectedContactId} />

      {/* Render SelectedContact component only if selectedContactId is set */}
      {selectedContactId && (
        <SelectedContact
          selectedContactId={selectedContactId}
          setSelectedContactId={setSelectedContactId}
        />
      )}
    </div>
  );
}

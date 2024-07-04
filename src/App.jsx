import { useState } from 'react'
import React from 'react';
import './App.css'
import ContactList from "./components/ContactList.jsx";

const contacts = [
  { name: "John Doe", email: "john.doe@example.com", phone: "123-456-7890" },
  { name: "Jane Smith", email: "jane.smith@example.com", phone: "987-654-3210" },
];

export default function App() {
  return (
    <>
      <ContactList contacts={contacts} />
    </>
  );
}
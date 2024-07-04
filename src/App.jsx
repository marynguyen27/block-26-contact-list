import { useState } from 'react'
import './App.css'
import ReactDOM from "react-dom";
import ContactList from "./ContactList";

const contacts = [
  { name: "John Doe", email: "john.doe@example.com", phone: "123-456-7890" },
  { name: "Jane Smith", email: "jane.smith@example.com", phone: "987-654-3210" },
  // Add more contacts as needed
];

export default function App() {
  return (
    <>
      <ContactList />
    </>
  );
}

import ReactDOM from "react-dom";


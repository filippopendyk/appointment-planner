import React from "react";
import { useState } from "react";
import { AppointmentsPage } from "./containers/appointmentsPage/AppointmentsPage";
import { ContactsPage } from "./containers/contactsPage/ContactsPage";
import { BrowserRouter, NavLink } from 'react-router-dom';
import Navbar from "./components/Navbar/Navbar";

function App() {

  const [appointments, setAppointments] = useState([]);
  const [contacts, setContacts] = useState([]);

  const ROUTES = {
    CONTACTS: "/contacts",
    APPOINTMENTS: "/appointments",
  };

  const addAppointment = (title, contact, date, time) => {
    const newAppointment = {
      title: title,
      contact: contact,
      date: date,
      time: time
    };

    setAppointments(prev => [...prev, newAppointment]);
  }

  const addContact = (name, phoneNumber, email) => {
    const newContact = {
      name: name,
      phoneNumber: phoneNumber,
      email: email
    };

    setContacts(prev => [...prev, newContact]);
  }

  return (
    <BrowserRouter>
      <Navbar/>
    </BrowserRouter>
  );
}

export default App;

import React from "react";
import { useState } from "react";
import { AppointmentsPage } from "./containers/appointmentsPage/AppointmentsPage";
import { ContactsPage } from "./containers/contactsPage/ContactsPage";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from "./components/Navbar/Navbar";

function App() {

  const [appointments, setAppointments] = useState([]);
  const [contacts, setContacts] = useState([]);

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
      <main>
        <Routes>
          <Route index element={<ContactsPage addContact={addContact} contacts={contacts}/>}/>
          <Route path="contacts" element={<ContactsPage addContact={addContact} contacts={contacts}/>}/>
          <Route path="appointments" element={<AppointmentsPage appointments={appointments} contacts={contacts} addAppointment={addAppointment}/>}/>  
        </Routes> 
      </main>
    </BrowserRouter>
  );
}

export default App;

import React from "react";
import { useState } from "react";
import AppointmentForm from "../../components/AppointmentForm/AppointmentForm";

export const AppointmentsPage = ({appointments, contacts, addApointment}) => {
  /*
  Define state variables for 
  appointment info
  */
  const [title, setTitle] = useState("");
  const [contact, setContact] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    /*
    Add contact info and clear data  
    */
    addApointment(title, contact, date, time);
    setTitle("");
    setContact("");
    setDate("");
    setTime("");
  };

  return (
    <div>
      <section>
        <h2>Add Appointment</h2>
        <AppointmentForm setTime={setTime} setContact={setContact} setDate={setDate} setTitle={setTitle}
        date={date} time={time} title={title} contacts={contacts}/>
      </section>
      <hr />
      <section>
        <h2>Appointments</h2>
      </section>
    </div>
  );
};

import React from "react";
import { useState } from "react";
import AppointmentForm from "../../components/AppointmentForm/AppointmentForm";
import TileList from "../../components/TileList/TileList";

export const AppointmentsPage = ({appointments, contacts, addAppointment}) => {
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
    if(!title || !contact || !date || !time){
      alert("You have to fill all inputs!");
      return;
    }
    addAppointment(title, contact, date, time);
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
        date={date} time={time} title={title} contacts={contacts} handleSubmit={handleSubmit}/>
      </section>
      <hr />
      <section>
        <h2>Appointments</h2>
        <TileList arrayToRender={appointments}/>
      </section>
    </div>
  );
};

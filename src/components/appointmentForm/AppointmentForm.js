import React from "react";
 
const AppointmentForm = ({
  contacts,
  title,
  setTitle,
  contact,
  setContact,
  date,
  setDate,
  time,
  setTime,
  handleSubmit
}) => {
  const getTodayString = () => {
    const [month, day, year] = new Date()
      .toLocaleDateString("en-US")
      .split("/");
    return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
  };

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  }

  const handleDateChange = (e) => {
    setDate(e.target.value);
  }

  const handleTimeChange = (e) => {
    setTime(e.target.value);
  }

  const handleContactChange = (e) => {
    setContact(e.target.value);
  }

  return (
    <form
      onSubmit={handleSubmit}>
      <label>Title: </label>
      <input type="text" value={title} onChange={handleTitleChange}/>
      <label>Date: </label>
      <input value={date} type="date" min={getTodayString()} onChange={handleDateChange}/>
      <label>Time: </label>
      <input type="time" value={time} onChange={handleTimeChange}/>
      <label>Contact: </label>
      <select
        value={contact}
        onChange={handleContactChange}>
        <option key={"default"} value={""}></option>
        {contacts.map((contact,index) => {
          return <option key={index} value={contact.name}>{contact.name}</option>;
        })}
      </select>
      <input type="submit" value="Submit"/>
    </form>
  );
};

export default AppointmentForm;
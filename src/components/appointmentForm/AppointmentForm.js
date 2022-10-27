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
    console.log(date);  
  }

  return (
    <form>
      <label>Title: </label>
      <input type="text" value={title} onChange={handleTitleChange}/>
      <label>Date: </label>
      <input type="date" id="date" min={getTodayString()} onChange={handleDateChange}/>
    </form>
  );
};

export default AppointmentForm;
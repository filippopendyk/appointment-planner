import React from "react";

const ContactForm = ({
  name,
  setName,
  phone,
  setPhone,
  email,
  setEmail,
  handleSubmit
}) => {

  const handleNameChange = (e) => {
    setName(e.target.value);
  }

  const handlePhoneChange = (e) => {
    setPhone(e.target.value);
  }

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  }

  return (
    <form
      onSubmit={handleSubmit}
      >
      <label>Name: </label>
      <input type="text" value={name} onChange={handleNameChange} placeholder="e.g John Doe"/>
      <label>Phone: </label>
      <input type="text" value={phone} pattern="^[2-9]\d{2}-\d{3}-\d{4}$" onChange={handlePhoneChange} placeholder="e.g 800-555-5555"/>
      <label>Email: </label>
      <input type="text" value={email} onChange={handleEmailChange}/>
      <input type="submit" value="Submit"/>
    </form>   
  );
};

export default ContactForm;
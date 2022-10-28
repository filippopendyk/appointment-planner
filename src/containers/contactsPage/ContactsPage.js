import React from "react";
import { useState, useEffect } from "react";
import ContactForm from "../../components/ContactForm/ContactForm";
import TileList from "../../components/TileList/TileList.js";

export const ContactsPage = ({addContact, contacts}) => {
  /*
  Define state variables for 
  contact info and duplicate check
  */
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [isDuplicate, setDuplicate] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if(!isDuplicate){
      addContact(name, phone, email);
      setName("");
      setPhone("");
      setEmail("");
      return;
    }
    alert(`${name} is already on your contact list!`);
  };

  /*
  Using hooks, check for contact name in the 
  contacts array variable in props
  */

  useEffect(() => {
    const isInContacts = contacts.some(contact => contact.name === name);
    if(isInContacts){
      setDuplicate(true);
      return;
    }
    setDuplicate(false);
  })

  return (
    <div>
      <section>
        <h2>Add Contact</h2> 
        <ContactForm name={name} phone={phone} email={email} isDuplicate={isDuplicate} setName={setName} setPhone={setPhone} setEmail={setEmail} setDuplicate={setDuplicate} handleSubmit={handleSubmit}/>
      </section>
      <hr />
      <section>
        <h2>Contacts</h2>
          <TileList arrayToRender={contacts}/>
      </section>
    </div>
  );
};

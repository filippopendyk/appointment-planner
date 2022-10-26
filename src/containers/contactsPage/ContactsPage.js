import React from "react";
import { useState, useEffect } from "react";

export const ContactsPage = ({addContact, contacts}) => {
  /*
  Define state variables for 
  contact info and duplicate check
  */
  const [name, setName] = useState();
  const [phone, setPhone] = useState();
  const [email, setEmail] = useState();
  const [isDuplicate, setDuplicate] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    /*
    Add contact info and clear data
    if the contact name is not a duplicate
    */
  };

  /*
  Using hooks, check for contact name in the 
  contacts array variable in props
  */
  useEffect(() => {
    const isNameInContacts = contacts.filter(contact => contact.name === name);
    if(isNameInContacts){
      setDuplicate(true);
    }
  })

  return (
    <div>
      <section>
        <h2>Add Contact</h2> 
      </section>
      <hr />
      <section>
        <h2>Contacts</h2>
      </section>
    </div>
  );
};

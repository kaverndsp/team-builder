import React, { useState } from "react";
import './Component.css';

const TeamList = props => {

  const [members, setMembers] = useState({
    name: "",
    email: "",
    role: ""
  });
 
   const submitForm = e => {
    e.preventDefault();
    props.addNewMember(members);
    setMembers({ name: "", email: "", role: "" });
  };
  
  
  const handleChanges = e => {
    setMembers({ ...members, [e.target.name]: e.target.value });
  };
  
 
  
  return (
    <form className="form" onSubmit={submitForm}>
      <label htmlFor="name">Member Name </label>
      <input
        id="name"
        type="text"
        name="name"
        onChange={handleChanges}
        placeholder="Name"
        value={members.name}
      />
      <label htmlFor="email">Email </label>
      <input
        id="email"
        type="text"
        name="email"
        onChange={handleChanges}
        placeholder="Email"
        value={members.email}
      />
      <label htmlFor="role">Role </label>
      <textarea 
      id="role" 
      name="role" 
      placeholder="Role Title ex. Software Engineer" 
      onChange={handleChanges}
      value={members.role} 
      />
      <button type="submit">Add Member</button>
    </form>
  );
};

export default TeamList;
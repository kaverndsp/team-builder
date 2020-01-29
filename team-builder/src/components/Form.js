import React from "react";

const Form = props => {
  return (
    
    <div>
      
      {props.member.map(member => (
       
       <div key={member.id}>
          
          <h2>Name: {member.name}</h2>
          <p>E-mail: {member.email}</p>
          <p>Role: {member.role}</p>
        
        </div>
      ))}
    </div>
  );
};

export default Form;

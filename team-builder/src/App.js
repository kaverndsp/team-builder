import React, {useState} from 'react';
import TeamList from "./components/TeamList";
import Form from "./components/Form";
import './App.css';

function App() {
  
  
  const [members, setMembers] = useState([
    {
      id: 1,
      name: "Daniel",
      email: "danballuffdsp@gmail.com",
      role: "Software Engineer"
    }
  ]);
  
  
  const addNewMember = member => {
    const newMember = {
      id: Date.now(),
      name: member.name,
      email: member.email,
      role: member.role
    };
    setMembers([...members, newMember]);
  };
  
  return (
    <div className="App">
      <h1>Members</h1>
      <TeamList addNewMember={addNewMember} />
      <Form member={members} />
    </div>
  );
}

export default App;

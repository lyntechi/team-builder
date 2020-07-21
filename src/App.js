import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import Form from './Components/Form'
import TeamMembers from './Components/TeamMembers'

function App() {

 const[teamMembers, setTeamMembers]=useState([
  { 
   id: 1, 
   Name: 'Lynda',
   Email: 'Lsantiago1091@yahoo.com',
   Role: 'Full Stack Web Developer'
  }
 ])


  const createNote = (note) =>{
    const addNote = {
      id: Date.now(),
      Name: note.Name,
      Email: note.Email,
      Role: note.Role,
    }
    setTeamMembers([...teamMembers, addNote])
  }


  return (
    <div className="App">
     


    

      <Form createNote={createNote}/>
      <TeamMembers teamMembers={teamMembers} />
    </div>
  );
}

export default App;

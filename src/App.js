import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import Form from './Components/Form'
import TeamMembers from './Components/TeamMembers'

function App() {

 const[teamMembers, setTeamMembers]=useState({
   id: 1, 
   Name: 'Lynda',
   Email: 'Lsantiago1091@yahoo.com',
   Role: 'Full Stack Web Developer'
 })




  return (
    <div className="App">
     


    

      <Form />
      <TeamMembers teamMembers={teamMembers} />
    </div>
  );
}

export default App;

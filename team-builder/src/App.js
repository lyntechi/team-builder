import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import Notes from './components/Notes.js'
import NoteForm from './components/NoteForm';




function App() {



  const[note, setNote]= useState([{
    id: 1,
    Name: "Lynda Santiago",
    Email: "Lsantiago1091@yahoo.com",
    Role: "Full Stack Web Developer"
  }])

  const addNewNote = note => {
    const newNote = {
      id: Date.now(),
      Name: note.Name,
      Email: note.Email,
      Role: note.Role
    };
    setNote([newNote, ...note]);
    //we are declaring all this inside of a new array
    //...notes is whatever was previously inside of notes, plus whatever our newNote is
    //...spread operator takes any value thats inside of original array.
  };

  return (
    <div className="App">
      <h1>Welcome New Team Members<br/>Please fill this Form below! 😎🤑</h1>
      <NoteForm addNewNote={addNewNote}/>
      <Notes notes={note}/>
      
    </div>
  );
}

export default App;

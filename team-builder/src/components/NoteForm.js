import React, {useState} from 'react';



function NoteForm({addNewNote}){

    const [note, setNote]=useState({Name:"", Email:"", Role:""});

    const handleChanges = (event)=>{
    setNote({...note, [event.target.name]: event.target.value })
    }
    
    const submitForm = event => {
        console.log(event.target.value);
        event.preventDefault();
        addNewNote(note);
        setNote({ Name: "", Email: "", Role: "" });
      };

return(

    <form className="form" onSubmit={submitForm}>
    <label htmlFor="name">Name</label>
    <input
    id="name"
    type="text"
    placeholder="Enter Name here"
    name="Name"
    className="inputName"
    onChange={handleChanges}
    value={note.Name}

    />
    <label htmlFor="email">Email</label>
    <input
    id="email"
    type="textarea"
    placeholder="Enter Name here"
    name="Email"
    className="inputEmail"
    onChange="handleChanges"
    value={note.Email}

    />
    <label htmlFor="role">Role</label>
    <select id="role" className="role" name="role" onChange={handleChanges}>
    <option value={note.Role}>Full Stack Web Developer</option>
    <option value={note.Role}>Front End Engineer</option>
    <option value={note.Role}>Back End Engineer</option>
    </select>

    <button className="button" type="submit">
        Submit
    </button>

    </form>



)




}

export default NoteForm
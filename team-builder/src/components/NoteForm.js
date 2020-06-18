import React, { useState } from "react";

function NoteForm(props) {
  const [newTeamMember, setNewTeamMember] = useState({
    Name: "",
    Email: "",
    Role: "",
  });

  const handleChanges = (event) => {
   setNewTeamMember({...newTeamMember, [event.target.name]: event.target.value}); //this updates our state when typing in inputs
    //value becomes whatever you enter in inputs
    console.log(event.target.value)
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    props.setMembers([...props.members, newTeamMember])
   
  };




  //   const reset = (event) => {
  //     event.setTeamMember(teamMember);
  //   };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <label htmlFor="name">Name</label>
      <input
        id="name"
        type="text"
        placeholder="Enter Name here"
        name="Name"
        className="inputName"
        onChange={handleChanges}
      />
      <label htmlFor="email">Email</label>
      <input
        id="email"
        type="textarea"
        placeholder="Enter Email Here"
        name="Email"
        className="inputEmail"
        onChange={handleChanges}
      />
      <label htmlFor="role">Role</label>
      <select id="role" className="role" name="role" onChange={handleChanges}>
        <option>Full Stack Web Developer</option>
        <option>Front End Engineer</option>
        <option>Back End Engineer</option>
      </select>

      <button className="button" type="submit">
        Submit
      </button>
    </form>
  );
}

export default NoteForm;

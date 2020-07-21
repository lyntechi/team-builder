import React, {useState} from "react";

export default function Form() {


  const[newPerson, setNewPerson]=useState({
      Name: '',
      Email: '',
      Role: ''
  })

 const inputHandler = (event) =>{
     setNewPerson({...newPerson, [event.target.name]: event.target.value})
     console.log(event.target.value)
 }

 const onSubmit = (event) =>{
  event.preventDefault()
 }


  return (
    <div>
      <form onSubmit={onSubmit}> 
        <label htmlFor="name">
          Name:
          <input id="name" type="text" value={newPerson.Name} name="name" onChange={inputHandler}/>
        </label>
        <label htmlFor="email" type="email" value={newPerson.Email} name="email" onChange={inputHandler}>
          Email:
          <input id="email" />
        </label>
        <label htmlFor="role">
        <select id="role" name="role" value={newPerson.Role} onChange={inputHandler}>
          <option value>Select Role</option>
          <option value>Full Stack Web Developer</option>
          <option value>Front End Engineer</option>
          <option value>Back End Engineer</option>
        </select>
        </label>
        <button>Submit</button>
      </form>
    </div>
  );
}

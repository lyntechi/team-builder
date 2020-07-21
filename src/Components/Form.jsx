import React, {useState} from "react";
import styled from 'styled-components';


const FormStyles = styled.div`
font-size: 1.2rem;
input{
    display: flex;
    margin: 0 auto;
    margin-bottom: 20px;

}
button{
    margin:  40px 0;
    padding: 20px;
    width: 300px;
    font-size: 1.2rem;
}

`




export default function Form(props) {

 const{createNote}=props;
  const[newPerson, setNewPerson]=useState(
      {
      Name: '',
      Email: '',
      Role: ''
  }
)

 const inputHandler = (event) =>{
     setNewPerson({...newPerson, [event.target.name]: event.target.value})
     console.log(event.target.value)
 }

 const onSubmit = (event) =>{
  event.preventDefault()
  createNote(newPerson)
 }


  return (
    <FormStyles>
      <form onSubmit={onSubmit}> 
        <label htmlFor="name">
          Name:
          <input id="name" type="text" value={newPerson.Name} name="Name" onChange={inputHandler}/>
        </label>
        <label htmlFor="email" >
          Email:
          <input id="email" type="email" value={newPerson.Email} name="Email" onChange={inputHandler}/>
        </label>
        <label htmlFor="role">
        <select id="role" name="Role" value={newPerson.Role} onChange={inputHandler}>
          <option value="Select Role">Select Role</option>
          <option value="Full Stack Web Developer">Full Stack Web Developer</option>
          <option value="Front End Engineer">Front End Engineer</option>
          <option value="Back End Engineer">Back End Engineer</option>
        </select>
        </label><br/>
        <button>Submit</button>
      </form>
      </FormStyles>
  );
}

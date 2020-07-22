import React, {useState} from "react";
import styled from 'styled-components';


const FormStyles = styled.div`
font-size: 1.4rem;
padding: 20px;
color: black;
input{
    display: flex;
    margin: 0 auto;
    margin-bottom: 20px;
    padding: 10px;
    width: 250px; 
 

}
button{
  padding:4%;
  font-size:1.6rem;
  text-transform:capitalize;
  border:2px solid #000;
  transition:3s;
  margin:2%;
  width: 230px;
  :hover{
    border:2px solid #fff;
    color:#fff;
    background-color:#000;
  }
}
select{
    font-size: 1.2rem;
    margin: 20px;
    padding: 10px;
}
h3{
  margin-bottom: 30px;
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
  setNewPerson({Name: "", Email:"", Role: ""})
 }


  return (
    <FormStyles>
      <h3>Welcome To The Coolest Team!! 😜</h3>
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

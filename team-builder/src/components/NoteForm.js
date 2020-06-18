import React, { useState, useEffect } from "react";
import * as yup from "yup"


function NoteForm(props) {
  const [newTeamMember, setNewTeamMember] = useState({
    id: Date.now(),
    Name: "",
    Email: "",
    Role: "",
    Motivation: "",
    Terms: ""
  });






  //this is going to collect new information when user
  //enters inside of the diff inputs and then it will feed it to the empty strings
  //you see above inside of object
  const handleChanges = (event) => {
    setNewTeamMember({
      ...newTeamMember,
      [event.target.name]: event.target.value,
    }); //this updates our state when typing in inputs
    //value becomes whatever you enter in inputs
    console.log("this is the target value", event.target.value);
  };



 //so up above the empty strings are being filled as user types in input fields
  //now is time to submit and add the new object to the original array
  const handleSubmit = (event) => {
    event.preventDefault();
    props.setMembers([...props.members, newTeamMember]);
    // ! A DIFFERENTWAY props.addNewPerson(newTeamMember)
    setNewTeamMember({ Name: "", Email: "", Role: "", Motivation: "" });
  };


  // const inputChange= (event) => {
  //   event.persist();
  //   const newFormData ={
  //     ...newTeamMember, [event.target.name] : event.target.type === 
  //     "checkbox" ? event.target.checked : event.target.value
  //   }
  //   setNewTeamMember(newFormData)
  // };






  // const[errors, setErrors]= useState({
  //   Name: "",
  //   Email: "",
  //   Motivation: "",
  //   Terms: ""
  // })
  
  
  // const formSchema = yup.object().shape({
  //   Name: yup.string().required('Name is a required field!'),
  //   Email: yup.string().email().required("Must Include an Email!"),
  //   Terms: yup.boolean().oneOf([true], "Please agree to terms of use!"),
  //   Motivation: yup.string().required('Must include why you would like to join!')
  // })
  
  // const[buttonDisabled, setButtonDisabled]= useState(true);

  // useEffect(()=>{
  // // is something is valid or not in our formscheme itll switch button disabled on or off
  // formSchema.isValid(newTeamMember).then(valid=>{
  //   setButtonDisabled(!valid)//we are setting it to not true. so this sets it false
  // })  
  // },[newTeamMember])


  // const validateChange = (event) =>{
  //   yup
  //   .reach(formSchema, event.target.name)
  //   .validate(event.target.value)
  //   .then(valid =>{
  //     setErrors({
  //       ...errors, 
  //       [event.target.name] : ""
  //     })
  //   })
  // }



 

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
        value={newTeamMember.Name}
      />
      <label htmlFor="email">Email</label>
      <input
        id="email"
        type="text"
        placeholder="Enter Email Here"
        name="Email"
        className="inputEmail"
        onChange={handleChanges}
        value={newTeamMember.Email}
      />
      <label htmlFor="role">Role</label>

      <select id="role" className="role" name="Role" onChange={handleChanges}>
        <option value=" Please Select Your Role">
        Please Select Your Role
        </option>
        <option value="FullStack Web Developer">
        FullStack Web Developer
        </option>
        <option value="Front End Software Engineer">
          Front End Software Engineer
        </option>
        <option value="Back End Software Engineer">
          Back End Software Engineer
        </option>
      </select>

      <label htmlFor="motivation"> Why Would You Like To Help? </label>

      <textarea
        type="textarea"
        id="motivation"
        name="Motivation"
        className="textArea"
        onChange={handleChanges}
        value={newTeamMember.Motivation}
      />

      <label htmlFor="terms">
        <input
          type="checkbox"
          id="terms"
          name="Terms"
          onChange={handleChanges}
          checked={newTeamMember.Terms}
          value={newTeamMember.Terms}
        />
        Terms and Conditions
      </label>
{/* 
      <button  disabled={buttonDisabled} className="button" type="submit"> */}
      <button className="button" type="submit">
        Submit
      </button>
    </form>
  );
}

export default NoteForm;

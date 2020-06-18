import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Notes from "./components/Notes.js";
import NoteForm from "./components/NoteForm";
import { date } from "yup";

function App() {
  const [members, setMembers] = useState([
    {
      id: 1,
      Name: "Lynda Santiagoo",
      Email: "Lsantiago1091@yahoo.com",
      Role: "Full Stack Web Developer",
      Motivation:
        "I want to be able to build functional apps with amazing UI's",
    },
  ]);





// ! A DIFFERENT WAY BELOW
  
  // const addNewPerson=(person)=>{
  //   const newPerson ={
  //     id: Date.now(),
  //     Name: person.Name,
  //     Email: person.Email,
  //     Role: person.Role,
  //     Motivation: person.Motivation
  //   }
  //   setMembers([...members, newPerson])
  // }

  return (
    <div className="App">
      <h1>
        Welcome New Team Members
        <br />
        Please fill this Form below! 😎🤑
      </h1>
     {/* A DIFFERENT WAY <NoteForm addNewPerson={addNewPerson}/>   */}
      <NoteForm members={members} setMembers={setMembers} />
      <Notes members={members} />
    </div>
  );
}

export default App;

/*
!                     FIRST STEP!!!!!!!

 is to create a App function. which will be the top level component.
inside of it, we have some state set up, that has an object that holds some
 key/value pairs. 

WE ARE RENDERING A NOTES COMPONENT AS YOU CAN SEE IN RETURN STATEMENT
AND INSIDE OF NOTES we named a prop called members and inside the curly brackets
we passed in teamMembers which is the variable name for useState that holds the
initial state which is the object you see there.

INSIDE OF NOTES component we mapping through using props name members in order to display the
initial first note




!                       SECOND STEP!!!!!

CREATING YOUR FORM COMPONENT WHICH IS GOING TO BE USED TO CREATE NEW CARDS OF NEW TEAM MEMBER
 AND THAT WILL BE ADDED AS AN OBJECT TO THE ARRAY ABOVE. INSIDE YOUR FORM COMPONENT FIRST BUILD
 YOUR FORM WITH THREE DIFFRENT INPUTS NAME, EMAIL AND A DROP DOWN LIST NAMED ROLE, THAT WILL
 HAVE THREE OPTIONS FOR DIFFRENT ROLES. INJECT THE FORM COMPONENT INSIDE OF ITS PARENT COMPONENT 
 WHICH IS APP, IN ORDER FOR YOUR FORM TO BE DISPLAYED

ADD LABELS INSIDE OF YOUR FORM, ITS VERY IMPORTANT FOR SCREEN READERS


!                       THIRD STEP

HTML FORM ELEMENTS WORK A LITTLE DIFF FROM OTHER DOM ELEMENTS IN REACT.
BECAUSE FROM ELEMENTS NATURALLY HAVE THEIR OWN INTERNAL STATE, THATS WHEN 
REACT COMES INTO PLACE TO CHANGE BEHAVIORS AND CREATE CONTROLLED COMPONENTS ,

IN NOTEFORM COMPONENET CREATE A STATE THAT HOLDS AN OBJECT WITH EMPTY STRINGS.
THIS STATE WILL BE USED OVER AND OVER AGAIN. DATA WILL KEEP GETTING FILLED INSIDE 
OF THE EMPTY STRINGS.


THEN CREATE YOUR EVENTS FUNCTIONS.
ONCHANGE HANDLER WILL CONTROL THE CHANGES IN inputs
YOU WANT TO SET YOUR STATE TO WHATEVER WILL BE INPUTTED IN THE INPUTS

ADD YOUR ONCHANGE TO YOUR INPUTS AND ASSIGN THE VARIABLE NAME THAT 
HOLDS THE EVENTS.TARGET.VALUE


!                    FOURTH STEP BELOW

CREATE A FUNCTION INSIDE OF APP COMPONENT THAT TAKES IN TEAMMEMBER AND CREATES
A NEW OBJECT. YOU WILL BE USING SPREAD OPERATOR

OUR INITAL STATE IS THE HARDCODED ID AND NAME AND ROLE YOU SEE ABOVE.

TO ADD ON A NEW NOTE WE ARE GOING TO USE SPREAD OPERATOR BECAUSE WE DONT WANT TO MUTATE IT
WE JUST WANT TO ADD TO THE ARRAY
...teamMembers is equivalent to the object thats already created and then we are adding a new member
to the array as an object

PASS DOWN const addNewMembers FUNCTION AS A PROP TO NOTEFORM

*/

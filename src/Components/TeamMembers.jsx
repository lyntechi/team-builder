import React from 'react'
import styled from 'styled-components'



const NoteStyles = styled.div`

display: flex;
flex-wrap: wrap;
border: 1px grey solid;
width: 80%;
padding: 30px;
margin-left: 200px;
font-size: 1.1rem;
background: black;


.notes{
    background: #ffff88;
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.12), 0 5px 2px rgba(0, 0, 0, 0.24);
    width: 100%;
    max-width: 250px;
    padding: 30px;
    text-align: left;
    margin: 10px;
}


`


export default function TeamMembers(props){
    const {teamMembers}= props;

    return(
        <NoteStyles>
            {teamMembers.map(item=>{
                return <div className="notes" key={item.id}> <p>Name: {item.Name}</p>
                <p>Email: {item.Email}</p>
                <p>Role: {item.Role}</p>
                </div>
            })}
       </NoteStyles>
    )
}
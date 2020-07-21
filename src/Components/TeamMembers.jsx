import React from 'react'
import styled from 'styled-components'



const NoteStyles = styled.div`


flex-wrap: wrap;
border: 1px grey solid;
width: 250px;
padding: 30px;



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
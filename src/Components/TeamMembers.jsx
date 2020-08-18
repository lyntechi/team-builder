import React from 'react'
import styled from 'styled-components'



const NoteStyles = styled.div`

display: flex;
flex-wrap: wrap;
border: 1px black solid;
width: 100%;
padding: 20px;
margin-left: 100px;
font-size: 1.1rem;
font-weight: bold;
background: #FFDAB9
;



.notes{
    box-shadow: 0 5px 20px rgba(0, 0, 200, 0.30), 0 10px 2px rgba(0, 0, 30, 0.24);
    width: 100%;
    max-width: 250px;
    padding: 30px;
    text-align: left;
    margin: 10px;
    color: black;
    background-color:
    #EEE8AA



;    

}
p{
    margin-bottom: 30px;
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
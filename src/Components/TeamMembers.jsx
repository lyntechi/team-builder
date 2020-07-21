import React from 'react'

export default function TeamMembers(props){
    const {teamMembers}= props;

    return(
        <div>
            <p>Name: {teamMembers.Name}</p>
            <p>Email: {teamMembers.Email}</p>
            <p>Role: {teamMembers.Role}</p>
        </div>
    )
}
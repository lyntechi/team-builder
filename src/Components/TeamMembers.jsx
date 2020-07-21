import React from 'react'

export default function TeamMembers(props){
    const {teamMembers}= props;

    return(
        <div>
            {teamMembers.map(item=>{
                return <div key={item.id}> <p>Name: {item.Name}</p>
                <p>Email: {item.Email}</p>
                <p>Role: {item.Role}</p>
                </div>
            })}
        </div>
    )
}
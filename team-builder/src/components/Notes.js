import React from "react";

function Notes(props) {
  return (
    <div className="notesContainer">
      {props.members.map((item) => {
        return (
          <div className="createNote" key={item.id}>
            <h2>{item.Name}</h2>
            <h2>{item.Email}</h2>
            <h2>{item.Role}</h2>
          </div>
        );
      })}
    </div>
  );
}
export default Notes;

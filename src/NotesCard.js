import React, { useState } from 'react';
import { useParams,useOutletContext } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

export default function NotesCard({notes,setActive, active}){
    const options = {
        year: "numeric",
        month: "long",
        day: "numeric",
        hour: "numeric",
        minute: "numeric",
      };
    
      const formatDate = (when) => {
        const formatted = new Date(when).toLocaleString("en-US", options);
        if (formatted === "Invalid Date") {
          return "";
        }
        return formatted;
      };

    const {id} = useParams();
    // const NotesList = useOutletContext();
    
    const navigator=useNavigate();
    
    return (
    <>
    <div className= {` notes_lists_cards ${ notes.id=== active && "notes_active"}`}
    onClick={() =>{ setActive(notes.id);
    navigator(`/` + notes.id)}}>
        {/* <div>SHIVAM</div> */}
     <div >{notes.Title}</div><div>{formatDate(notes.Date)}</div><div dangerouslySetInnerHTML={{ __html: notes.Body.slice(0,100) + "..."}}></div></div>
</>
    )
    }
    
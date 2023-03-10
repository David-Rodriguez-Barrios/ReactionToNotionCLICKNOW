import React,{useState} from 'react';
import uuid from "react-uuid";
import Default_page from './Default_page';
import Editor from './Editor';
import View from './View';
import NotesCard from './NotesCard';
import { Outlet, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';







function App() {

  const[notes,setNotes]=useState(localStorage.notes ? JSON.parse(localStorage.notes):[]);
  // localStorage.notes ? JSON.parse(localStorage.notes):[]

  const[active,setActive]=useState(localStorage.active ? JSON.parse(localStorage.active):[]);
  // localStorage.active ? JSON.parse(localStorage.active):[]

  useEffect(()=> {
    localStorage.setItem("notes",JSON.stringify(notes));
  
  },[notes]);


  const navigator= useNavigate();
  // console.log()
  console.log(notes)

  const AddNote=()=>{
    let  now = new Date();
now.setMinutes(now.getMinutes() - now.getTimezoneOffset());
let date = now.toISOString().slice(0,16);
    const NotesNew={
      Title:"Untitled",
      Date:date,
      Body:"",
      id:uuid(),
    };

    setNotes([NotesNew,...notes]);
    setActive(NotesNew.id);
    console.log(NotesNew);
    navigator(`${NotesNew.id}/edit`, {replace : true})
    

  }

    const[toggleon,setToggleon]=useState(true);
  
  return (
  <> <div id="entire_header">
  <button id="nav" onClick={()=>{ setToggleon(!toggleon)}} >&#9776;</button>
  <div id="title_and_subtitle">
    <h1>Lotion</h1> <h2>Like Notion but worse</h2>
  </div>
</div>
<div id="bottom_section">
    {toggleon &&( <div id="left_bar">
      <div id="Add_notes">
        <div className="notes">
          <div id="FirstBoxNotes">Notes</div>
          <button id="new_note" onClick={AddNote}>&#43;</button>

    </div>
    {
          notes.map((Notes)=> {
              return (
              <> 
                <NotesCard   key={Notes.id} notes={Notes} setActive= {setActive} active={active}/>
                {/* key={Notes.id} id={Notes.id} Title={Notes.Title} Body={Notes.Body} Date={Notes.Date} */}
              </>
              )

            })}
        {/* the line above is to see what notes list outputs when value is passed in */}
      </div>
    </div>)}
    <Outlet context= {[notes, setNotes]} active={active}/>
    {/* outlet goes here */}
</div>


  
</>

  );
}

export default App;

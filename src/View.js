import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import{useParams,useNavigate,Link,useOutletContext} from "react-router-dom";

export default function View({activeNote,active}){
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
    const [NotesList, setNotes] = useOutletContext();

    
    
    
    const findIndex = (array, uniquedId) => {
        for (let i=0 ; i < array.length; i++) {
            if ((array[i].id) === uniquedId) {
                return i;
            }
        }
    }
    const navigator= useNavigate();
    
const [value, setValue] = useState('');
    const noteEditing = NotesList.find(note => note.id === id);
    
    const [body, setBody] = useState(noteEditing.Body); 
    // these intialize these values
    const [date, setDate] = useState(noteEditing.Date);
    const [title, setTitle] = useState(noteEditing.Title);


    const delete_note = () => {
        if (window.confirm("Are you sure you want to delete this item?")) {
            if (NotesList.length > 1) {
                const index = findIndex(NotesList, id)
                NotesList.splice(index, 1);
                localStorage.setItem('notesStorage', JSON.stringify(NotesList));
                navigator(`/${NotesList[0].id}`, {replace : true})
            }
            else {
                NotesList.splice(0, 1);
                localStorage.setItem('notesStorage', JSON.stringify(NotesList));
                navigator(`/`, {replace : true})
            }
        }
    }
    const Editing=()=>{
        navigator(`${id}/edit`, {replace : true});
    }
 
        


    const StoreData = () => {
        
        noteEditing.Title = title;
        noteEditing.Date = date;
        noteEditing.Body = body;
        localStorage.setItem('NotesStorage', JSON.stringify(NotesList));
        console.log(NotesList);
        navigator(`/` +id);
    }
    return (
    <>
    <div id="entire_flex">
    
        <div id="Editor_header">
            <div id="Editor_header_RHS">
            <p id="titletxt">{title}</p>
            <p id="viewDate"> {formatDate(date)}</p>
        </div>
        <button id="Save" onClick={()=> navigator(`/` + id +`/edit`)}>Edit</button>
        <button id ="Delete" onClick={delete_note}>Delete</button>
    </div>
    <ReactQuill theme="snow" value={body} readOnly={true}  id="textboxremoved"/>
    </div>
    </>
    
    )
    }
    
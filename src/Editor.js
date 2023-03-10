import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import{useParams,useNavigate,Link,useOutletContext} from "react-router-dom";

export default function Editor({activeNote,active}){
    let  now = new Date();
    now.setMinutes(now.getMinutes() - now.getTimezoneOffset());
    let date1 = now.toISOString().slice(0,16);
    const parseDate = (formattedDate) => {
        const parsed = Date.parse(formattedDate);
        if (isNaN(parsed)) {
          return null;
        }
        return new Date(parsed);
      };
      let date2=parseDate(date1);
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
            <input id= "titletxt" value ={title} onChange={(e) => setTitle(e.target.value)} type="text" />
            <input id="date" value ={date} onChange={(e) => setDate(e.target.value)}type="datetime-local" />
        </div>
        <button id="Save" onClick={StoreData}>Save</button>
        <button id ="Delete" onClick={delete_note}>Delete</button>
    </div>
    <ReactQuill theme="snow" value={body} onChange={(value) => setBody(value)} placeholder={"Your note here"}/>
    </div>
    </>
    
    )
    }
    
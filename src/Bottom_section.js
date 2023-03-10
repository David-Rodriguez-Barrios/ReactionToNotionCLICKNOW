// import React, { createElement, useState,useRef, useEffect } from 'react';
// import ReactQuill from 'react-quill';
// import 'react-quill/dist/quill.snow.css';
// import NotesList from './NotesList';
// import Notes from './NotesList';
// import uuidv4 from 'uuid/v4';
// import 'react-quill/dist/quill.snow.css';


// const LOCAL_STORAGE_KEY='Notion.notes'

// useEffect(()=>{
//   const storedNotes=JSON.parse(localStorage.getitem(LOCAL_STORAGE_KEY))
//   if (storedNotes) setNotes(storedNotes)},[])

// // this loads the saved information on reload.


// useEffect(()=>{localStorage.setItem(LOCAL_STORAGE_KEY,JSON.stringify(value))},[value])
// // this saves the notes to local storage


// function MyComponent() {
//   const [value, setValue] = useState('');

//   return <ReactQuill theme="snow" value={value} onChange={setValue} />;
// }
// // idk how to use this top function for the editor part

// function BottomSection(){
//     function handleAddNote(e){
//       document.getElementById("right_bar").innerHTML ='<ReactQuill theme="snow" value={value} onChange={setValue} /><input type="datetime-local" />  '
//       // this is supposed to them to fill in the right_bar.
//       // when they click save note it will save

//       const name= "" // add this so that every time we want to save a note it is saved with the value name which will then be used to save the new note
//       setNotes([...prevNotes,{id:uuidv4(),name:name}])
// {/* <input type="datetime-local" /> */}
//     }
    
    
    
    
    
    
//     const [value, setValue] = useState([{id:1,name:'Todo1'}]);
    
//     return(  <div id="bottom_section">
//     <div id="left_bar">
  

    
      
//       <div id="Add_notes">
//         <div className="notes">
//           <div id="FirstBoxNotes">Notes</div>
//           <button id="new_note" onClick={handleAddNote}>&#43;</button>
//         </div>
//       <NotesList value={value}/> 
//           {/* the line above is to see what notes list outputs when value is passed in */}
//       </div>
//     </div>
//     <div id="right_bar"> Select a note, or create a new one.
    
//         {/* this right bar is supposed to change onclick of add new note to a default  */}

//     </div>
// </div>);
// }
// export default BottomSection;



// // window.onload = function () {
// //     const NEWNOTE = document.getElementById("new_note");
     
// //     NEWNOTE.addEventListener("click",()=>
// //     NEW_DATA());
// // };

// // function NEW_DATA(){
// //     const element = document.createElement(right_bar);
// //     const e = document.createElement('div');
// //  e.innerHTML = '<input type="datetime-local" /> <ReactQuill theme="snow" value={value} onChange={setValue} />';
// //     document.body.appendChild(e);
    
// // }

// // function NEW_DATA(){
// // ]
// // }
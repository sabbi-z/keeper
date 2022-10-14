import './App.css';
import Header from './component/header';
import Footer from './component/footer';
import Note from './component/note';
import CreateArea from './component/createArea';
import { useState } from 'react';


function App() {

  const [notes , setNotes] = useState([])

  function onAdd(note){
    setNotes(prevNotes => {
      return[
        ...prevNotes,
        note
      ]
    })
  }
  
  function deletNote(id){
    setNotes(prevNotes => {
      return prevNotes.filter((noteitem , index) =>{
        return index !== id;
      })
    })
  }

  function createNotes(noteNumber , index){
    return <Note 
            key={index}
            id={index}
            title={noteNumber.title} 
            data={noteNumber.content}
            onDelet={deletNote}
            >
            
    </Note>
  }

  return (
    <div>
      <Header></Header>
      <CreateArea onAdd={onAdd} ></CreateArea>
      {notes.map(createNotes)}
      
      <Footer></Footer>
    </div>
  );
}

export default App;

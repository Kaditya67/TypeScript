import { Box } from '@mui/material';
import './App.css';
import CreateNote from './components/CreateNote';
import Header from './components/Header';
import Notes from './components/Notes';
import { useEffect, useState } from 'react';
import { NoteObj } from './models/note';


function App() {

  const [notes, setNotes] = useState<NoteObj[]>([])

  useEffect(() => {
    const savedNotes = sessionStorage.getItem('notes');
    if (savedNotes) {
      setNotes(JSON.parse(savedNotes));
    }
  }, []);


  const onAddNote = (note:NoteObj) => {
    setNotes([note, ...notes])
    sessionStorage.setItem('notes', JSON.stringify([note, ...notes]))
  }

const deleteNote=(id:number)=>{
    const updatedNotes = notes.filter((note) => note.id !== id);
    setNotes(updatedNotes);
    sessionStorage.setItem('notes', JSON.stringify(updatedNotes))
  }


  return (
    <>
    <Header />
    <Box style={{padding: 20}}>
    <CreateNote onAddNote={onAddNote}/>
    <Notes notes={notes} deleteNote={deleteNote}/>
    </Box>
    </>
  );
}

export default App;

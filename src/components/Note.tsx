import React from 'react';
import { NoteObj } from '../models/note';
import {Button, Card, CardContent} from '@mui/material';
import { Typography, Box,styled } from '@mui/material';

interface INoteProps {
    note: NoteObj;
    deleteNote: (id: number) => void;
}

const Wrapper=styled(Box)`
  & > button {
    border : 1px solid #000;
    background:pink;
    margin-top: 10px;
    font-weight: bold;
  }
`

const Note: React.FC<INoteProps> = ({ note, deleteNote }) => {
    return (
        <Card style={{backgroundColor: note.color, padding: 10, margin: 10,width:400}}>
          <CardContent>
            <Wrapper>
              <Typography variant="h5">{note.title}</Typography>
              <Typography variant="h5">{note.description}</Typography>
              <Typography variant="h5">{note.date}</Typography>
              <Button variant="contained" color="error" onClick={() => deleteNote(note.id)}>Delete</Button>
              
            </Wrapper>
            </CardContent>
        </Card>
    );
}

export default Note;

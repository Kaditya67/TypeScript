import { Box, Typography } from '@mui/material';
import { NoteObj } from '../models/note';
import Note from './Note';

interface INotesProps {
    notes: NoteObj[];
    deleteNote: (id: number) => void;
}

const Notes: React.FC<INotesProps> = ({ notes, deleteNote }) => {
    return (
        <Box>
            <Typography variant="h5">Notes</Typography>
            <Box>
                {notes.map((note) => (
                    <Note key={note.id} note={note} deleteNote={deleteNote} />
                ))}
            </Box>
        </Box>
    );
}

export default Notes;

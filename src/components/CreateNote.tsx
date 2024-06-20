import { InputBase, Box, Button, styled , Typography} from '@mui/material';
import { useState } from 'react';
import { NoteObj } from '../models/note';
import { v4 as uuidv4 } from 'uuid'; // Importing uuid correctly

import { TITLE_LIMIT, DESCRIPTION_LIMIT } from '../constants/constants';

const Container = styled(Box)`
    & > * {
        padding-right: 10px;
        margin: 20px 20px 20px 0px;
    }
    & > div > input[type="text"] {
        border-bottom: 1px solid #111111;
        opacity: 0.5;
        width: 300px;
        padding-right: 25px;
    }
    & > span {
        position: relative;
        font-size: 12px;
        right: 45px;
    }
`;

const Error=styled(Typography)`
    background-color: red;
    color: white;
    padding: 5px;
    width: 50%;
`

const defaultObj: NoteObj = {
    id: 0,
    title: '',
    description: '',
    color: '#f5f5f5',
    date: new Date().toLocaleString()
};

interface ICreateNoteProps {
    onAddNote: (note: NoteObj) => void;
}

export default function CreateNote(props: ICreateNoteProps) {
    const [note, setNote] = useState<NoteObj>(defaultObj);

    const onValueChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        if(err){
            setError('');
        }
        setNote({
            ...note,
            [e.target.name]: e.target.value
        });
    };

    const [err, setError]=useState<string>('');

    const onAddNote = () => {

        if(note.title.length>TITLE_LIMIT || note.description.length>DESCRIPTION_LIMIT){
            setError('Title and description should be less than 30 and 75 characters long');
            return;
        }
        else if(note.title.length===0 || note.description.length===0){
            setError('Title and description should not be empty');
            return;
        }
        props.onAddNote({ ...note, id: uuidv4() }); // Correctly adding the id using uuid
        setNote(defaultObj); 
    };

    return (
        <Container>
            <InputBase
                placeholder='Create Note'
                name='title'
                value={note.title}
                onChange={onValueChange}
                inputProps={{ maxLength: TITLE_LIMIT }}
            />
            <Box component="span">{note.title.length}/{TITLE_LIMIT}</Box>

            <InputBase
                placeholder='Details'
                name='description'
                value={note.description}
                onChange={onValueChange}
                inputProps={{ maxLength: DESCRIPTION_LIMIT }}
            />
            <Box component="span">{note.description.length}/{DESCRIPTION_LIMIT}</Box>

            <InputBase
                type='color'
                value={note.color}
                sx={{ width: 45, height: 45, position: 'relative', top: 5, right: 20 }}
                onChange={onValueChange}
                name='color'
            />

            <Button
                variant="outlined"
                onClick={onAddNote}
            >
                Save
            </Button>
            {err && <Error>{err}</Error>}
        </Container>
    );
}

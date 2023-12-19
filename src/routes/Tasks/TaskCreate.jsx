import * as React from 'react';
import Grid from "@mui/material/Grid";
import {Button, TextField} from "@mui/material";
import {useState} from "react";
import {useDispatch} from "react-redux";
import { createTask } from '../../store/taskSlice'
import {useNavigate} from "react-router-dom";

const TaskCreate = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [title, setTitle] = useState('');

    const handleFormSubmit = (e) => {
        e.preventDefault();
        const data = {
            id: crypto.randomUUID(),
            text: title,
        };
        dispatch(createTask(data));
        setTitle('');
        navigate('/');
    };

    return (
        <Grid container spacing={0}>
            <Grid item xs={12} sx={{mb: "10px"}}>
                <form onSubmit={handleFormSubmit}>
                    <TextField
                        fullWidth
                        label="Text"
                        variant="outlined"
                        required
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />
                    <Button type="submit" variant="contained" color="primary" fullWidth sx={{mt: 1}}>
                        Add Task
                    </Button>
                </form>
            </Grid>
        </Grid>

    )
}

export default TaskCreate;

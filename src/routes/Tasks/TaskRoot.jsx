import * as React from 'react';
import TaskList from "./TaskList";
import {Button, Grid} from "@mui/material";
import {useDispatch, useSelector} from "react-redux";
import {Link, useNavigate} from 'react-router-dom';
import {deleteTask} from "../../store/taskSlice";

const TaskRoot = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const tasks = useSelector((state) => state.tasks);
    return (
        <Grid container spacing={0}>
            <Link  style={{ width: '100%' }} to="/create">
                <Button fullWidth sx={{mb: "10px"}} variant="contained" color="primary">
                    Create Task
                </Button>
            </Link>

            <TaskList tasks={tasks} dispatch={dispatch} deleteTask={deleteTask} navigate={navigate} />
        </Grid>
    )
}

export default TaskRoot;

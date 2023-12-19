import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Grid from "@mui/material/Grid";
import {IconButton} from "@mui/material";
import {Close, Visibility} from "@mui/icons-material";

const TaskList = ({tasks, dispatch, deleteTask, navigate}) => {
    return (
        <Grid container spacing={0}>
            <Grid item xs={12} sx={{mb: "10px"}}>
                <Paper>
                    <TableContainer component={Paper} elevation={24}>
                        <Table aria-label="caption table">
                            <TableHead>
                                <TableRow>
                                    <TableCell>ToDO (5)</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {tasks.map((task) => (
                                    <Card sx={{m: "5px"}} key={task.id}>
                                        <CardContent  sx={{position: "relative"}}>
                                            <Typography variant="body2" color="text.secondary">
                                                {task.text}
                                            </Typography>
                                            <IconButton
                                                onClick={() =>  dispatch(deleteTask(task))}
                                                sx={{position: "absolute", top: "0", right: "0"}}>
                                                <Close sx={{fontSize: "30px"}}/>
                                            </IconButton>
                                            <IconButton
                                                onClick={() =>  navigate(`${task.id}/info`)}
                                                sx={{position: "absolute", top: "0", right: "40px"}}>
                                                <Visibility sx={{fontSize: "30px"}}/>
                                            </IconButton>
                                        </CardContent>

                                    </Card>
                                ))
                                }
                            </TableBody>

                        </Table>
                    </TableContainer>
                </Paper>
            </Grid>

        </Grid>

    )
}

export default TaskList;

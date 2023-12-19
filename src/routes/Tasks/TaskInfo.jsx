import {useParams} from "react-router-dom";
import {useSelector} from "react-redux";
import {useEffect, useState} from "react";
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";

const TaskList = () => {

    const tasks = useSelector((state) => state.tasks);
    const {id} = useParams();

    const item = tasks.find((item) => item.id == id);

    const [value, setValue] = useState('1');

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Box sx={{width: '100%', typography: 'body1'}}>
            <TabContext value={value}>
                <Box sx={{borderBottom: 1, borderColor: 'divider'}}>
                    <TabList onChange={handleChange} aria-label="lab API tabs example">
                        <Tab label="Item One" value="1"/>
                        <Tab label="Item Two" value="2"/>
                        <Tab label="Item Three" value="3"/>
                    </TabList>
                </Box>
                <TabPanel value="1">
                    <Card sx={{m: "5px"}}>
                        <CardContent sx={{position: "relative"}}>
                            <Typography variant="body2" color="text.secondary">
                                {item.text}
                            </Typography>
                        </CardContent>
                    </Card>
                </TabPanel>
                <TabPanel value="2">Item Two</TabPanel>
                <TabPanel value="3">Item Three</TabPanel>
            </TabContext>
        </Box>
    );
}

export default TaskList;

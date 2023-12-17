import React from "react";
import {
    Divider,
    Drawer, IconButton,
    List,
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    useTheme,
} from "@mui/material";
import HomeIcon from '@mui/icons-material/Home';
import CreateIcon from '@mui/icons-material/Create';
import LogoutIcon from '@mui/icons-material/Logout';
import SettingsIcon from '@mui/icons-material/Settings';
import PersonIcon from '@mui/icons-material/Person';
import {useLocation, useNavigate} from "react-router-dom";
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';

const Drawerr = ({drawerWidth, setMode, noneORBlock, drawerType, hideDrawer}) => {
    const navigate = useNavigate();
    const theme = useTheme();
    const currentLocation = useLocation();

    const BGColor = (current) => {
        return currentLocation.pathname === current ? theme.palette.favColor.main : null;
    }

    const myList = [
        {
            text: "Home",
            icon: <HomeIcon/>,
            path: "/"
        },
        {
            text: "Create",
            icon: <CreateIcon/>,
            path: "/create"
        },
        {
            text: "Profile",
            icon: <PersonIcon/>,
            path: "/"
        },
        {
            text: "Settings",
            icon: <SettingsIcon/>,
            path: "/create"
        },
    ];
    return (
        <>
            <Drawer
                sx={{
                    display: {xs: noneORBlock, sm: "block"},
                    // [theme.breakpoints.down('md')]: {
                    //     backgroundColor: theme.palette.secondary.main,
                    // },
                    // [theme.breakpoints.up('md')]: {
                    //     backgroundColor: theme.palette.secondary.main,
                    // },
                    width: `${drawerWidth}px`,
                    flexShrink: 0,
                    '& .MuiDrawer-paper': {
                        width: `${drawerWidth}px`,
                        boxSizing: 'border-box',
                    },
                }}
                variant={drawerType}
                anchor="left"
                open={true}
                onClose={() => {
                    hideDrawer()
                }}
            >
                <List>
                    <ListItem disablePadding sx={{display: "flex", justifyContent: "center", mb: "14px"}}>
                        <IconButton onClick={() => {
                            localStorage.setItem("currentMode", theme.palette.mode === "light" ? "dark" : "light")
                            setMode(theme.palette.mode === "light" ? "dark" : "light")
                        }} color="inherit">
                            {theme.palette.mode === 'dark' ? <Brightness7Icon/> : <Brightness4Icon/>}
                        </IconButton>
                    </ListItem>

                    <Divider/>

                    {myList.map((list) => {
                        return (
                            <ListItem key={list.id} sx={{bgcolor: BGColor(list.path)}} disablePadding>
                                <ListItemButton onClick={() => {
                                    navigate(list.path)
                                }}>
                                    <ListItemIcon>
                                        {list.icon}
                                    </ListItemIcon>
                                    <ListItemText primary={list.text}/>
                                </ListItemButton>
                            </ListItem>
                        )
                    })}

                    <ListItem sx={{bgcolor: BGColor("/")}} disablePadding>
                        <ListItemButton onClick={() => {
                            navigate("/")
                        }}>
                            <ListItemIcon>
                                <LogoutIcon/>
                            </ListItemIcon>
                            <ListItemText primary="Logout"/>
                        </ListItemButton>
                    </ListItem>

                </List>

            </Drawer>

        </>
    );
}

export default Drawerr;
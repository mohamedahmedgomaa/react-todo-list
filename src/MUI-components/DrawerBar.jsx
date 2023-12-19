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

const DrawerBar = ({drawerWidth, setMode, noneORBlock, drawerType, hideDrawer}) => {
    const navigate = useNavigate();
    const theme = useTheme();
    const currentLocation = useLocation();

    const BGColor = (current) => {
        return currentLocation.pathname === current ? theme.palette.favColor.main : null;
    }

    const myList = [
        {
            id: 1,
            text: "Home",
            icon: <HomeIcon/>,
            path: "/"
        },
        {
            id: 2,
            text: "Create",
            icon: <CreateIcon/>,
            path: "/create"
        },
        {
            id: 3,
            text: "Profile",
            icon: <PersonIcon/>,
            path: "/"
        },
        {
            id: 4,
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

export default DrawerBar;
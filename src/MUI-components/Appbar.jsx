import React from "react";
import {AppBar, Avatar, IconButton, Link, Toolbar, Typography} from "@mui/material";
import {Menu} from "@mui/icons-material";

const Appbar = ({drawerWidth, showDrawer}) => {
    return (
        <>
            <AppBar position="static"
                    sx={{
                        width: {
                            sm: `calc(100% - ${drawerWidth}px)`
                        },
                        ml: {xs: 0, sm: `${drawerWidth}px`}
                    }}>
                <Toolbar>
                    <IconButton
                        sx={{display: {sm: "none"}, mr: "9px"}}
                        onClick={() => {
                            showDrawer();
                        }}
                    >
                        <Menu/>
                    </IconButton>
                    <Link sx={{flexGrow: 1}} href="/" color="inherit" underline="none">My
                        Expenses</Link>

                    <Typography variant="h6" component="div" mr={2} color="inherit">
                        Moha
                    </Typography>
                    <Avatar alt="Cindy Baker" src="https://mui.com/static/images/avatar/3.jpg"/>

                </Toolbar>

            </AppBar>

        </>
    );
}

export default Appbar;
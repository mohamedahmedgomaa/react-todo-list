import React, {useState,useMemo} from "react";
import {Outlet} from "react-router-dom";
import Appbar from "../MUI-components/Appbar";
import Drawerr from "../MUI-components/Drawerr";
import {Box, createTheme, CssBaseline} from "@mui/material";
import {ThemeProvider} from '@mui/material/styles';
import getDesignTokens from "../styles/MyTheme";

const drawerWidth = 240;

const Root = () => {
    const [mode, setMode] = useState(
        localStorage.getItem("currentMode") === null ? "light"
            : localStorage.getItem("currentMode") === "light" ? "light" : "dark"
    );

    const [noneORBlock, setNoneORBlock] = useState("none");
    const [drawerType, setDrawerType] = useState("permanent"); // permanent , temporary

    const showDrawer = () => {
        setDrawerType("temporary");
        setNoneORBlock("block");
    }
    const hideDrawer = () => {
        setDrawerType("permanent")
        setNoneORBlock("none")
    }

    // Update the theme only if the mode changes
    const darkTheme = useMemo(() => createTheme(getDesignTokens(mode)), [mode]);

    return (
        <>
            <ThemeProvider theme={darkTheme}>
                <CssBaseline/>
                <Appbar drawerWidth={drawerWidth} showDrawer={showDrawer}/>

                <Drawerr setMode={setMode} drawerWidth={drawerWidth} noneORBlock={noneORBlock} drawerType={drawerType} hideDrawer={hideDrawer}/>
                <Box component="main"
                     sx={{ml: {sm: `${drawerWidth}px`}, display: "flex", justifyContent: "center", mt: "66px"}}>
                    <Outlet/>
                </Box>
            </ThemeProvider>
        </>
    );
};

export default Root;

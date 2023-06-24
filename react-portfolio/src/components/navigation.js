import React from "react";
import { Tab, Tabs } from '@mui/material';
import { useState } from "react";

export default function Navigation(){
    const [value, setValue] = useState("Portfolio")
    const handleChange = (event, newValue) => {
        setValue(newValue)
    };
    return(
        <Tabs value={value} onChange={handleChange} aria-label="disabled tabs example">
            <Tab label="Resume" value = "Resume"/>
            <Tab label="Portfolio" value ="Portfolio"/>
            <Tab label="AboutMe" value ="AboutMe" />
            <Tab label="ContactMe" value ="ContactMe"/>
        </Tabs>
    )
}
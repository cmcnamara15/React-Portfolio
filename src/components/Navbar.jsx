import React from "react";
import { AppBar, Toolbar, Typography, Button, useMediaQuery, IconButton, Drawer, List, ListItem, ListItemText } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from "react-router-dom";


export default function NavBar() {
    const isMobile = useMediaQuery((theme) => theme.breakpoints.down('sm'));
    const [drawerOpen, setDrawerOpen] = React.useState(false);

    const list = ( 
        <List>
            {['About Me', 'Portfolio', 'Resume', 'Photos', 'Contact Me'].map((text, index) => (
                <ListItem button key={text} component={Link} to={`/${text.replace(' ', '')}`} 
                onClick={() => setDrawerOpen(false)}><ListItem primary={text} />
                </ListItem>
            ))}
        </List>
    )

    return (
    <AppBar position="static" color="">
        <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Chris McNamara's Portfolio
        </Typography>

        {isMobile ? (
          // You can replace this with a Drawer or Menu component for mobile view
            <Typography variant="body1" color="inherit">
            Mobile Nav
            </Typography>
        ) : (
            <div>
                <Button color="inherit" component={Link} to="/AboutMe">About Me</Button>
                <Button color="inherit" component={Link} to="/Portfolio">Portfolio</Button>
                <Button color="inherit" component={Link} to="/Resume">Resume</Button>
                <Button color="inherit" component={Link} to="/Photos">Photos</Button>
                <Button color="inherit" component={Link} to="/ContactMe">Contact</Button>
            </div>
        )}
        </Toolbar>
    </AppBar>
    );
}







// import React from "react";
// import { Tab, Tabs } from '@mui/material';
// import { useState } from "react";

// export default function Navigation(){
//     const [value, setValue] = useState("Portfolio")
//     const handleChange = (event, newValue) => {
//         setValue(newValue)
//     };
//     return(
//         <Tabs value={value} onChange={handleChange} aria-label="disabled tabs example">
//             <Tab label="Resume" value = "Resume"/>
//             <Tab label="Portfolio" value ="Portfolio"/>
//             <Tab label="AboutMe" value ="AboutMe"/>
//             <Tab label="ContactMe" value ="ContactMe"/>
//         </Tabs>
//     )
// }


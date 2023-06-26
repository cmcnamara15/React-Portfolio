import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function FixedContainer({children}) {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={12}>
          <Item>
            {children}
          </Item>
        </Grid>
        {/* <Grid item xs={12} md={4}>
          <Item>
            Sidebar Content Here
          </Item>
        </Grid> */}
      </Grid>
    </Box>
  );
}


// import { makeStyles } from "@material-ui/core/styles";
// import React from "react";


// const useStyles = makeStyles({
//     page: {
//         background: "#f9f9f9",
//         width: "100%"
//     }
// })

// export default function Layout({ children }) {
//     const classes = useStyles()

//     return (
//         <div>

//             <div className={classes.page}>
//             {children}
//             </div>
            
//         </div>
//     )
// }
import * as React from 'react';
import styles from'../Navbar/Navbar.module.scss';
import { Link } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { Grid, Stack } from '@mui/material';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import '../../Scss/Styles.scss';

const navStyle = {
  backgroundColor: "#161E31;",
}
const genStyle = {
  marginLeft: "1000px",
}


function Navbar() {
  return (
    <AppBar position="sticky" sx={navStyle}>
      <Toolbar>
        <Link to="/"><IconButton size="large" edge="start" color="inherit" aria-label="logo">
        <div className={styles.logo_box}></div>
        </IconButton></Link>

 
        <Typography variant="h6" component="div" >
        <Link to="/"> ChiroHealth</Link>
        </Typography>

        <Grid container>
        <Stack direction="row"  sx={{ flexGrow: 0.5 }}>
        <Grid item xs={3}>
          <Link to='/appointments'><Button color="inherit" sx={{genStyle}}>Appointment</Button></Link>
          </Grid>
          <Grid item xs={3}>
          <Link to='/patients'><Button color="inherit">Patients</Button></Link>
          </Grid>
          <Grid item xs={3}>
          <Link to ='/doctors'><Button color="inherit">Doctors</Button></Link>
          </Grid>
        </Stack>
        </Grid>
        <Stack direction="row" spacing={1}>
          <Avatar></Avatar>
        </Stack>

      </Toolbar>
    </AppBar>
  )
}

export default Navbar


// <div>Navbar</div>
//         <div className={styles.nav_container}/>
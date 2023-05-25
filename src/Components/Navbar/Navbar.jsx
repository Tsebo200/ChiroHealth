import * as React from 'react';
import styles from'../Navbar/Navbar.module.scss';
import { Link } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import { CatchingPokemon } from '@mui/icons-material';
import Typography from '@mui/material/Typography';
import { Stack } from '@mui/material';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';




function Navbar() {
  return (
    <AppBar position="static">
      <Toolbar>
        <IconButton size="large" edge="start" color="inherit" aria-label="logo">
          <CatchingPokemon/>
        </IconButton>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Tsebo's Poke
        </Typography>
        <Stack direction="row" spacing={1}>
          <Link to='/'><Button color="inherit">Appointment</Button></Link>
          <Button color="inherit">Patients</Button>
          <Button color="inherit">Doctors</Button>
        </Stack>
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
import React from 'react';
import { useState } from 'react';
import styles from '../Pages/Register.module.scss';
import { Box, Button, Grid, TextField } from '@mui/material';

export default function Register() {

  const [inputs, setInputs] = useState({});

  const handleChange = (event) => {  
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({...values, [name]: value}));

    console.log(inputs);

  }


  return (
    <>
      <div className={styles.main_container}>
        <div className={styles.register_form_container}>
            <div className={styles.left}>
              <div className={styles.inner_left_container}>
              <div className={styles.intro_container}>
                  <h1 className={styles.signup_heading}>SignUp</h1>
                  <p className={styles.intro_signup_text}>Hi please create an account</p>
              </div>
              <div className={styles.form_container}>
              <Grid container>
                  <Grid item xs = {6}>
                      <Box sx={{width: 500, maxWidth:'85%', color: 'white', marginLeft: '15px', float: 'left'}}>  
                          <TextField fullWidth name="name" label="Name" variant="outlined" size="small" helperText="Enter First Name"/>
                      </Box>
              </Grid>

              <Grid item xs = {6}>
                  <Box sx={{width: 500, maxWidth:'85%', color: 'white', marginLeft: '15px', float: 'left'}}>  
                      <TextField fullWidth name="surname" label="Surname" variant="outlined" size="small" helperText="Enter Surname"/>
                  </Box>
              </Grid>

              <Grid item xs = {6}>
                  <Box sx={{width: 500, maxWidth:'85%', color: 'white', marginLeft: '15px'}}>  
                      <TextField fullWidth name="username" label="Username" variant="outlined" size="small" helperText="Enter Username"/>
                  </Box>
              </Grid>

              <Grid item xs = {6}>
                  <Box sx={{width: 500, maxWidth:'85%', color: 'white', marginLeft: '15px'}}>  
                      <TextField fullWidth name="email" label="Email" variant="outlined" size="small" helperText="Enter Email "/>
                  </Box>
              </Grid>

              <Grid item xs = {6}>
                  <Box sx={{width: 500, maxWidth:'85%', color: 'white', marginLeft: '15px'}}>  
                      <TextField fullWidth name="age" label="Age" variant="outlined" size="small" helperText="Enter Age" 
                       mask="(#00) 000-0000"definitions={{'#': /[1-9]/,}}/>
                  </Box>
              </Grid>

              <Grid item xs = {6}>
                  <Box sx={{width: 500, maxWidth:'85%', color: 'white', marginLeft: '15px'}}>  
                      <TextField fullWidth name="gender" label="Gender" variant="outlined" size="small" helperText="Enter Gender"/>
                  </Box>
              </Grid>

              <Grid item xs = {6}>
                  <Box sx={{width: 500, maxWidth:'85%', color: 'white', marginLeft: '15px'}}>  
                      <TextField fullWidth name="phone" label="Phone number" variant="outlined" size="small" helperText="Enter Phone Number"/>
                  </Box>
              </Grid>

              <Grid item xs = {6}>
                  <Box sx={{width: 500, maxWidth:'85%', color: 'white', marginLeft: '15px'}}>  
                      <TextField fullWidth name="rank" label="Rank" variant="outlined" size="small" helperText="Enter Rank"/>
                  </Box>
              </Grid>

              <Grid item xs = {6}>
                  <Box sx={{width: 500, maxWidth:'85%', color: 'white', marginLeft: '15px'}}>  
                      <TextField fullWidth name="password" label="Password" variant="outlined" size="small" helperText="Enter Password"/>
                  </Box>
              </Grid>

              <Grid item xs = {6}>
                  <Box sx={{width: 500, maxWidth:'85%', color: 'white', marginLeft: '15px'}}>  
                      <TextField fullWidth name="confirm password" label="Confirm Password" variant="outlined" size="small" helperText="Confirm Password"/>
                  </Box>
              </Grid>

              <Box sx={{width: 500, maxWidth: '85%', marginTop: '15px', marginLeft: '25px'}}>
              <Button  fullWidth variant="contained">Register</Button>
              </Box>
              </Grid>
            </div>
            </div>
            </div>
            <div className={styles.right}>
                <div className={styles.logo_box}></div>
            </div>
        </div>
      </div>
    </>
  )
}

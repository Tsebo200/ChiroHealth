import React from 'react';
import { useState } from 'react';
import styles from '../Pages/Register.module.scss';
import { Box, Button, Grid, TextField } from '@mui/material';
import { Link } from 'react-router-dom';
import axios from 'axios';

export default function Register() {

  const [inputs, setInputs] = useState({

    first: '',
    last: '',
    email: '',
    username: '',
    age: '',
    rank: '',
    gender: '',
    contact: '',
    password: '',
    passwordCon: '',  
  });


const [nameError, setNameError] = useState();
const [surnameError, setSurnameError] = useState();
const [emailError, setEmailError] = useState();
const [usernameError, setusernameError] = useState();
const [ageError, setAgeError] = useState();
const [rankError, setRankError] = useState();
const [genderError, setGendertError] = useState();
const [phoneError, setPhoneError] = useState();
const [passwordError, setPasswordError] = useState();
const [passwordConError, setPasswordConError] = useState();

const[emailAvail, setEmailAvail] = useState();
const[userAvail, setUserAvail] = useState();

const[emailIcon, setEmailIcon] = useState();
const[userIcon, setUserIcon] = useState();


  const nameVal = (e) => {
    const value = e.target.value;
    setInputs({...inputs, first: value});
    if(inputs.name !== ' '){setNameError();}

    }

    const surnameVal = (e) => {
      const value = e.target.value;
      setInputs({...inputs, first: value});
      if(inputs.surname !== ' '){setSurnameError();}
      }

const emailVal = (e) => {
  const mailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  const value = e.target.value;
  setInputs({...inputs, email: value});
  if(inputs.email !== ''){setEmailError();}
}


  }


  const handleChange = (event) => {  
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({...values, [name]: value}));
  }

const handleSubmit = (event) => {
  event.preventDefault();
  console.log(inputs);

  axios.post('http://localhost/api/AddPatient.php', inputs)
  .then(function(res){
      console.log(res);
  });
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
                {/* <div className={styles.imageArea}>
                    <p className="upload-text">Please Upload a Profile Image</p>
                    <input name="imageUrl" className={styles.imgInput} type="file" onChange={imageVal} />
                    <div id="profileimg" className={styles.profile_img}></div>  
                    </div> */}
                  <Grid item xs = {6}>
                      <Box sx={{width: 500, maxWidth:'85%', color: 'white', marginLeft: '15px', float: 'left'}}>  
                          <TextField fullWidth name="name" type='text' label="Name" variant="outlined" size="small" helperText="Enter First Name" onChange={handleChange}/>
                      </Box>
              </Grid>

              <Grid item xs = {6}>
                  <Box sx={{width: 500, maxWidth:'85%', color: 'white', marginLeft: '15px', float: 'left'}}>  
                      <TextField fullWidth name="surname" type='text' label="Surname" variant="outlined" size="small" helperText="Enter Surname" onChange={handleChange}/>
                  </Box>
              </Grid>

              <Grid item xs = {6}>
                  <Box sx={{width: 500, maxWidth:'85%', color: 'white', marginLeft: '15px'}}>  
                      <TextField fullWidth name="username" type='text' label="Username" variant="outlined" size="small" helperText="Enter Username" onChange={handleChange}/>
                  </Box>
              </Grid>

              <Grid item xs = {6}>
                  <Box sx={{width: 500, maxWidth:'85%', color: 'white', marginLeft: '15px'}}>  
                      <TextField fullWidth name="email" type='text' label="Email" variant="outlined" size="small" helperText="Enter Email" onChange={handleChange}/>
                  </Box>
              </Grid>

              <Grid item xs = {6}>
                  <Box sx={{width: 500, maxWidth:'85%', color: 'white', marginLeft: '15px'}}>  
                      <TextField fullWidth type="number" name="age" label="Age" variant="outlined" size="small" helperText="Enter Age" onChange={handleChange}
                       mask="(#00) 000-0000"definitions={{'#': /[1-9]/,}}/>
                  </Box>
              </Grid>

              <Grid item xs = {6}>
                  <Box sx={{width: 500, maxWidth:'85%', color: 'white', marginLeft: '15px'}}>  
                      <TextField fullWidth type="text" name="gender" label="Gender" variant="outlined" size="small" helperText="Enter Gender" onChange={handleChange}/>
                  </Box>
              </Grid>

              <Grid item xs = {6}>
                  <Box sx={{width: 500, maxWidth:'85%', color: 'white', marginLeft: '15px'}}>  
                      <TextField fullWidth type="number" name="phone" label="Phone number" variant="outlined" size="small" helperText="Enter Phone Number" onChange={handleChange}/>
                  </Box>
              </Grid>

              <Grid item xs = {6}>
                  <Box sx={{width: 500, maxWidth:'85%', color: 'white', marginLeft: '15px'}}>  
                      <TextField fullWidth name="rank" type="text" label="Rank" variant="outlined" size="small" helperText="Enter Rank" onChange={handleChange}/>
                  </Box>
              </Grid>

              <Grid item xs = {6}>
                  <Box sx={{width: 500, maxWidth:'85%', color: 'white', marginLeft: '15px'}}>  
                      <TextField fullWidth name="password" type='password' label="Password" variant="outlined" size="small" helperText="Enter Password" onChange={handleChange}/>
                  </Box>
              </Grid>

              <Grid item xs = {6}>
                  <Box sx={{width: 500, maxWidth:'85%', color: 'white', marginLeft: '15px'}}>  
                      <TextField fullWidth type='password' name="confirm password" label="Confirm Password" variant="outlined" size="small" helperText="Confirm Password"/>
                  </Box>
              </Grid>

              <Box sx={{width: 500, maxWidth: '85%', marginTop: '15px', marginLeft: '25px'}}>
              <Button  fullWidth variant="contained" type="submit" onClick={handleSubmit}>Register</Button>
              <p className={styles.member_text}>Already a member?  <Link to="/login" underline="hover">{'Signin'}</Link></p>
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

import React from 'react';
import { useState } from 'react';
import styles from '../Pages/Register.module.scss';
import { Box, Button, Grid, TextField } from '@mui/material';
import { Link, Navigate } from 'react-router-dom';
import axios from 'axios';
import MiniModalLeft from '../Components/props/MiniModalLeft';
import Okay from '../Assets/okay.svg';
import NotOkay from '../Assets/notOkay.svg';
import MiniModalRight from '../Components/props/MiniModalRight';
// import { useNavigate } from 'react-router-dom';

export default function Register() {

  const [inputs, setInputs] = useState({

    name: '',
    surname: '',
    email: '',
    username: '',
    age: '',
    rank: '',
    gender: '',
    phone: '',
    password: '',
    passwordCon: '',  
  });

// creating Usestates for the validation and authentication procedure
const [nameError, setNameError] = useState();
const [surnameError, setSurnameError] = useState();
const [emailError, setEmailError] = useState();
const [usernameError, setUsernameError] = useState();
const [ageError, setAgeError] = useState();
const [rankError, setRankError] = useState();
const [genderError, setGenderError] = useState();
const [phoneError, setPhoneError] = useState();
const [passwordError, setPasswordError] = useState();
const [passwordConfirmError, setPasswordConfirmError] = useState();

const[emailAvail, setEmailAvail] = useState();
const[usernameAvail, setUsernameAvail] = useState();

const[emailIcon, setEmailIcon] = useState();
const[usernameIcon, setUsernameIcon] = useState();

// Validating to check if the name of user/receptionist is avaliable on the Databsse
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
  if(!value.match(mailRegex)){
    setEmailError(<MiniModalLeft message="Email is not a valid format...."/>);
  }
}

// Authenticating the receptionist email to prove that the email is valid within the databasse
const authenticateEmail = () => {
  axios.post('http://localhost/api/authenticateEmail.php', inputs)
  .then((res)=>{
    console.log(res);
    if(res.data ===  "Available"){
      setEmailIcon(Okay)
      setEmailAvail();
    } else if(res.data === "Not Available"){
        setEmailIcon(NotOkay);
        setEmailAvail(<MiniModalRight message="Email is not Available"/>);
    } else if(res.data === ''){
      setEmailIcon();
      setEmailAvail();
      setEmailError();
    }
  });
}

const usernameVal = (e) => {
  const value = e.target.value.trim();
  setInputs({...inputs, first: value});
  if(inputs.username !== ' '){setUsernameError();}
  }

  const validateUser = () => {
    axios.post('http://localhost/api/authenticateUser.php', inputs)
    .then((res)=>{
      console.log(res);
      if(res.data === "Available"){
        setUsernameIcon(Okay);
        setUsernameAvail();
      } else if(res.data === "Not Available"){
        setUsernameIcon(NotOkay);
        setUsernameAvail(<MiniModalRight message="Email is not Available" />);
      } else if(res.data === ''){
        setEmailIcon();
        setEmailAvail();
        setEmailError();
      }
    });
  }

  const authenticateReceptionist = () => {
    axios.post('http://localhost/api/authenticateReceptionist.php', inputs)
    .then((res)=>{
      console.log(res);
      if(res.data ===  "Available"){
        setUsernameIcon(Okay);
        setUsernameAvail();
      } else if(res.data === "Not Available"){
        setUsernameIcon(NotOkay);
        setUsernameAvail(<MiniModalLeft message="Username is not Available" />);
      } else if(res.data === ''){
        setUsernameIcon();
        setUsernameAvail();
        setUsernameError();
      }
    });
  }

  const contactRegex = (e) => {
    const contactRegex = /^\(?(\d{3})\)?[- ]?(\d{3})[- ]?(\d{4})$/;
    const value = e.target.value;
    setInputs({...inputs, phone: value});
    if(inputs.email !== ''){setPhoneError();}
    if(!value.match(contactRegex)){
      setPhoneError(<MiniModalLeft message="Please enter valid phone number"/>);
    }
  }


  const passwordVal = (e) => {
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*(\W|_)).{5,}$/ ;
    const value = e.target.value;
    setInputs({...inputs, password:value});
    if(inputs.password !== ''){setPasswordError();}
    if(!value.match(passwordRegex)){
      setPasswordError(<MiniModalLeft message="Not Strong Enough Password must Include Capital Letter, Symbol (!@#$%...) & A Digit"/>);
    }
  }


  const passwordConfirmVal = (e) => {
    const value = e.target.value;
    setInputs({...inputs, passwordConfirm:value});
    if(inputs.password === value){
      setPasswordConfirmError();
    } else{
        setPasswordConfirmError(<MiniModalRight message="Your password does not match"/>)
    }
  }




  const handleChange = (event) => {  
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({...values, [name]: value}));
  }

const handleSubmit = (e) => {
  e.preventDefault();
  console.log(inputs);
  
  if(inputs.name === ' '){
    setNameError(<MiniModalLeft message="What is your Name"/>);
  } else{
    setNameError();
  }

  if(inputs.surname === ' '){
    setSurnameError(<MiniModalRight message="What is your Surname"/>);
  } else{
    setSurnameError();
  }

  if(inputs.username === ' '){
    setNameError(<MiniModalLeft message="please provide Username"/>);
  } else{
    setUsernameError();
  }

  if(inputs.email === ' '){
    setEmailError(<MiniModalRight message="please provide Email"/>);
  } else{
    setEmailError();
  }

  if(inputs.age === ' '){
    setAgeError(<MiniModalLeft message="How old are you"/>);
  } else{
    setAgeError();
  }


  if(inputs.gender === ' '){
    setGenderError(<MiniModalRight message="How old are you"/>);
  } else{
    setGenderError();
  }


  if(inputs.phone === ' '){
    setPhoneError(<MiniModalLeft message="please provide phone numbers"/>);
  } else{
    setPhoneError();
  }

  if(inputs.rank === ' '){
    setRankError(<MiniModalRight message="How old are you"/>);
  } else{
    setRankError();
  }

  if(inputs.password === ' '){
    setPasswordError(<MiniModalLeft message="Please provide a password"/>);
  } else{
    setPasswordError();
  }

  if(inputs.passwordConfirm === ' '){
    setPasswordConfirmError(<MiniModalRight message="please confirm password"/>);
  } else{
    setPasswordConfirmError();
  }

  let result = Object.values(inputs).some(o => o === '');
  // checks if there is an empty object within the key value pair

  if(result){
    console.log("There is an Error");
  } else{
    axios.post("https://localhost/api/authenticateReceptionist.php")
    .then((res) => {
      console.log(res);

      if(res.status === 200){
        Navigate("/login");
      }
    })
  }

  axios.post('http://localhost/api/AddPatient.php', inputs)
  .then((res) => {
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
                      {nameError}
                          <TextField fullWidth name="name" type='text' label="Name" variant="outlined" size="small" helperText="Enter First Name" onChange={nameVal}/>
                      </Box>
              </Grid>

              <Grid item xs = {6}>
                  <Box sx={{width: 500, maxWidth:'85%', color: 'white', marginLeft: '15px', float: 'left'}}>  
                  {surnameError}
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

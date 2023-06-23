import React, {useState, useEffect} from 'react'
import styles from '../Patients/AddPatients.module.scss'
import { FormControl, Grid, Input, MenuItem, Select, TextField, colors } from '@mui/material'
import {UseForm, Form}  from '../UseForm'
import { makeStyles, withStyles } from '@material-ui/core';
import axios from 'axios';
import styled from 'styled-components';


const initialFValues = {
    id: 0,
    fullName: '',
    email: '',
    mobile: '',
    city: '',
    gender: '',
    departmentId: '',
    hireDate:new Date(),
    isPermanent:false,
}



export default function AddPatients() {
  const [inputs, setInputs] = useState({});

  const handleChange = e =>{
    const name =e.target.name;
    const value = e.target.value;
    setInputs(values => ({...values, [name]: value}));

    console.log(inputs);
  }

  const CssTextField = styled(TextField)({
    '& label.Mui-focused': {
      color: '#A0AAB4',
    },
  })

  const useStyles = makeStyles(theme => ({
    MuiInputBase: {
      color: 'white'
    }
  }))
    // const{values,setValues,handleInputChange,} = UseForm(initialFValues);
    // const [inputs, setInputs] = useState({});


    // axios.post('http://localhost/api/addPatient.php', inputs)
    // .then((res)=>{
    //   console.log(res)
    // }).catch((err)=>{
    //   console.log(err);
    // })

    const classes = useStyles();


  return (
    <Form>
            <Grid container>

              <div className={styles.form_container}>
              <h1 >Patients Info</h1> 
              <div className={styles.personal_info}>
                <div className={styles.vert_spacer}></div>

            <Grid container>
            <Grid item xs = {6}>
            <TextField 
            className={styles.name_input}
                variant="outlined"
                name="name"
                label="Name"
                // value={values.fullName}
                onChange = {handleChange}
           
            />
            </Grid>
    
            <Grid item xs = {6}>
            <TextField
             className={styles.surname_input}
                variant="outlined"
                name="surname"
                label="Surname"
                // value={values.fullName}
                onChange = {handleChange}
            />
            </Grid>
            </Grid>
            <div className={styles.vert_spacer}></div>


          <Grid container>
            <Grid item xs={6}>
            <TextField
                className={styles.Id_no}
                variant="outlined"
                label="ID No."
                name="patients_id"
                onChange={handleChange}
            />
            </Grid>

       
            <Grid item xs={6}>
            <TextField
            className={styles.email}
                variant="outlined"
                label="Email"
                name="email"
                // value={values.email}
                onChange={handleChange}
            />
            </Grid>
            </Grid>

            <hr/>
     
            <Grid container>
            <Grid item xs={4}>
            <TextField
                className={styles.age}
                variant="outlined"
                label="Age"
                name="age"
                onChange={handleChange}
            />
            </Grid>

            <Grid item xs={4}>
            <TextField
                className={styles.phone_number}
                variant="outlined"
                label="Phone Number"
                name="number"
                onChange={handleChange}
            />
            </Grid>

            <Grid item xs={4}>
            <Select
                className={styles.select_gender}
                label="Gender"
                name="gender"
                onChange={handleChange}>
                <MenuItem value={"Male"}>Male</MenuItem>
                <MenuItem value={"Female"}>Female</MenuItem>
                <MenuItem value={"Other"}>Other</MenuItem>
              </Select>
            </Grid>
            </Grid>

            </div>
            </div>
            <Grid item xs={4}>
            <TextField
                variant="outlined"
                label="Room No."
                name="room_number"
                // value={values.email}
                onChange={handleChange}
            />
            </Grid>


           
         
        
            </Grid>
    </Form>
  )
}

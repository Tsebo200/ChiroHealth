import React, {useState, useEffect} from 'react'
import { FormControl, Grid, Input, TextField } from '@mui/material'
import {UseForm, Form}  from '../../UseForm'




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



    const{values,setValues,handleInputChange,} = UseForm(initialFValues);
    


  return (
    <Form>
            <Grid container>
            <Grid item xs = {6}>
            <TextField
                variant="outlined"
                name="fullName"
                label="Full Name"
                value={values.fullName}
                onChange = {handleInputChange}
            />
    
     
            <TextField
                variant="outlined"
                label="Email"
                name="email"
                value={values.email}
                onChange={handleInputChange}
            />
            </Grid>
            </Grid>
    </Form>
  )
}

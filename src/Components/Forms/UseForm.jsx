import React, {useState} from 'react'
import { makeStyles } from '@material-ui/core';

export  function UseForm() {

  const [inputs, setInputs] = useState({});

  const handleChange = e =>{
    const name =e.target.name;
    const value = e.target.value;
    setInputs(values => ({...values, [name]: value}));

    console.log(inputs);
  }

return{
  handleChange
}
  //   const [values, setValues] = useState(initialFValues);

  //   const handleInputChange = e => {
  //       const {name, value} = e.target
  //       setValues({...values,[name]:value})
  //   }

  // return {
  //   values,
  //   setValues,
  //   handleInputChange,
  // }
}

const useStyles = makeStyles(theme => ({
    root:{
        '& .MuiFormControl-root':{
            width:'80%',
            margin:theme.spacing(1)
        }    
    }
}))

export function Form(props) {

    const classes = useStyles();
  return (
    <form className={classes.root} autoComplete='off'>
        {props.children}
    </form>

  )
}


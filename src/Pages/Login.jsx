import React, { useState } from 'react'
import styles from '../Pages/Login.module.scss'
import { TextField , Grid, Box, Button, FormGroup, FormControlLabel, Checkbox} from '@mui/material'
import Link from '@mui/material/Link';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';



// const useStyles = makeStyles(theme =>({
//     root: {
//       background: '#fff',
//     },

// }));
const preventDefault = (event) => event.preventDefault();
export default function Login() {


    const navigate = useNavigate();

    const [inputs, setInputs] = useState({
        email: '',
        password: ''
    });

    const emailval = (e) => {
        const value = e.target.value;
        setInputs({...TextField, email: value});
    }

    const passwordval = (e) => {
        const value = e.target.value;
        setInputs({...TextField, password: value});
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(TextField)

        axios.post('http://localhost/api/userLogin.php', inputs)
        .then((res)=>{
            console.log(res)

        if(res.data === true){
            sessionStorage.setItem('activeUser', TextField.email);
            navigate("/");
        } else{
            console.log("Not Working");
        }

        });
    }
    // const classes = useStyles();

  return (
    <>
        <div className={styles.main_container}>
            <div className={styles.inner_container}>
                <div className={styles.left}>
                    <div className={styles.logo}></div>
                </div>
                <div className={styles.right}>
                    <div className={styles.inner_right_container}>
                        
                        <div className={styles.intro_container}>
                            <h1 className={styles.login_heading}>Login</h1>
                            <p className={styles.intro_login_text}>Welcome back please login to your account</p>
                        </div>

                    <div className={styles.form_container}>
                    <Box sx ={{width: 500, maxWidth:'85%', color: 'white', marginLeft: '15px'}}>
                            <TextField fullWidth name="email" label="Email" variant="outlined" size="small" helperText="Please enter your email" onChange={emailval}/>
                    </Box>

                    <br></br>
                    <br></br>
                    <Box sx={{width: 500, maxWidth: '85%', paddingBottom: '15px', marginLeft: '15px'}}>
                            <TextField  fullWidth name="password" label="Password" variant="outlined" size="small"  helperText="Please enter your Password" onChange={passwordval}/>
                    </Box>


                    <Box sx={{width: 160, maxWidth: '85%', fontSize: '10px',  float: 'left', marginTop: '4px', color: '#FFEDE0'}}>
                    <FormGroup>
                    <FormControlLabel control={<Checkbox defaultChecked />} size="small" label="Remember Me" />
                    </FormGroup>
                    </Box>

                    <Box sx={{width: 160, height: 42, maxWidth: '85%', float: 'left', align: 'center', marginLeft: '32px', color: '#FFEDE0'}}>
                    <p className={styles.forgot_pass}>Forgot Password?</p>
                    </Box>

                     <Box sx ={{width: 500, maxWidth:'85%', marginTop: '20px', float: 'left', marginLeft: '15px'}}>
                            <div className={styles.login_btn}>
                            <Button fullWidth size="large" variant="outlined" onClick={handleSubmit}>Login</Button>
                            </div>
                    </Box>

                        <Box sx={{color: '#FFEDE0', float: 'left', marginTop: '15px',}}>
                            <p>New User?</p>
                        </Box>
                        <Box sx={{marginTop: '30px', marginLeft: '15px', float: 'left',}}>
                        <Link href="/Register" underline="hover">{'SignUp'}</Link>
                        </Box>
                </div>
               
               
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

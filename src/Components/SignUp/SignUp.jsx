
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import { FaGoogle } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { Link } from 'react-router-dom';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
import {toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const SignUp = () => {
    const defaultTheme = createTheme();
    const navigate = useNavigate()
    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        
        const userName= data.get('name')
        const userEmail = data.get('email')
        const userPassword = data.get('password')

        const userInfo = {
            userName,
            userEmail,
            userPassword,
        }
        console.log(userInfo)


        axios.post('users',userInfo)
        .then(res => {
            console.log('Successful',res.data)
            navigate('/login')
            toast('Sign Up Completed. Kindly Login Now !', {
                position: 'top-center',
                autoClose: 3000, // Close after 3 seconds
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
              })
        })
        .catch(error =>{
            console.error("Error Logging in:", error)
            toast(error, {
                position: 'top-center',
                autoClose: 3000, // Close after 3 seconds
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
              })
        })
    };


    return (
        <Box sx={{ backgroundColor: '#E6EEF5', minHeight: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>

            <ThemeProvider theme={defaultTheme} >


                <Container component="main" maxWidth="xs" sx={{ backgroundColor: '#FFFFFF', paddingBottom: '1rem' }}>
                    <CssBaseline />
                    <Box
                        sx={{
                            marginTop: 8,
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                        }}
                    >
                        <Typography component="h1" variant="h5" sx={{ fontWeight: 'bold' }}>
                            Sign Up
                        </Typography>
                        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                id="name"
                                label="Your Name"
                                name="name"
                                autoComplete="name"
                                autoFocus
                            />
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                id="email"
                                label="Email Address"
                                name="email"
                                autoComplete="email"
                                autoFocus
                            />
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                name="password"
                                label="Password"
                                type="password"
                                id="password"
                                autoComplete="current-password"
                            />
                            <Button
                                type='submit'
                                variant="secondary" fullWidth size="lg" sx={{
                                    color: 'white', backgroundColor: '#990099',
                                    ":hover": { backgroundColor: '#990099' },
                                    marginTop: '1rem',
                                    marginBottom: '1rem',
                                }}>
                                Sign Up
                            </Button>
                            <Grid container sx={{ justifyContent: 'center', alignItems: 'center', flexDirection: 'column', gap: '.5rem' }}>
                                <Grid item>
                                    {"Already have an account?"}
                                    <Link to='/login' variant="body2" sx={{ textDecoration: "none", marginLeft: '.5rem', fontSize: '1.2rem' }}>
                                        {"Login"}
                                    </Link>
                                </Grid>
                                <Grid item>
                                    {"Or"}
                                </Grid>
                                <Grid item sx={{ fontSize: '1.3rem' }} >
                                    <Link to='/login' sx={{ marginLeft: '1rem' }}>  <FaGoogle /> </Link>
                                    <Link to='/login' sx={{ marginLeft: '1rem' }}>  <FaFacebookF /></Link>
                                    <Link to='/login' sx={{ marginLeft: '1rem' }}>  <FaInstagram /></Link>
                                </Grid>
                            </Grid>
                        </Box>
                    </Box>

                </Container>

            </ThemeProvider>
        </Box>
    );
};

export default SignUp;
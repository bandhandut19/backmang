import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import { Link } from 'react-router-dom';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import { useNavigate } from 'react-router-dom';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useEffect, useState } from 'react';
import {toast } from 'react-toastify';
import { FaGoogle } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
    const navigate = useNavigate()
    const defaultTheme = createTheme();
    const [userData, setUserData] = useState(null);

    useEffect(() => {
        const fetchUserData = async () => {
            try {
                const response = await fetch('http://localhost:5000/users');
                const data = await response.json();
                setUserData(data);
            } catch (error) {
                console.error('Error fetching user data:', error);
            }
        };

        fetchUserData();
    }, []);

    const handleSubmit = (event) => {
        event.preventDefault();

        const data = new FormData(event.currentTarget);
        const userEmail = data.get('email')
        const userPassword = data.get('password')

        const user = userData.find(user => user?.userEmail === userEmail && user?.userPassword === userPassword);

        if (user) {
            if (user.userEmail === 'bondon517@gmail.com') {
                navigate('/adminpanel');
                toast('Admin has Logged In Successfully', {
                    position: 'top-center',
                    autoClose: 3000, // Close after 3 seconds
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                  })
            } else {
                navigate('/');
                toast('Logged In Successfully', {
                    position: 'top-center',
                    autoClose: 3000, // Close after 3 seconds
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                  })
            }
            
        } else {
            
            toast('Invalid credentials', {
                position: 'top-center',
                autoClose: 2000, // Close after 2 seconds
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
              })
        }
    };

    return (
        <Box sx={{ backgroundColor: '#E6EEF5', minHeight: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <ThemeProvider theme={defaultTheme}>
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
                            Login
                        </Typography>
                        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
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
                                Login
                            </Button>
                            <Grid container sx={{ justifyContent: 'center', alignItems: 'center', flexDirection: 'column', gap: '.5rem' }}>
                                <Grid item>
                                    {"Don't have an account?"}
                                    <Link to='./signup' variant="body2" sx={{ textDecoration: "none", marginLeft: '.5rem', fontSize: '1.2rem' }}>
                                        {"Sign up"}
                                    </Link>
                                </Grid>
                                <Grid item>
                                    {"Or"}
                                </Grid>
                                <Grid item sx={{ fontSize: '1.3rem' }} >
                                    <Link to='./login' sx={{ marginLeft: '1rem' }}>  <FaGoogle /> </Link>
                                    <Link to='./login' sx={{ marginLeft: '1rem' }}>  <FaFacebookF /></Link>
                                    <Link to='./login' sx={{ marginLeft: '1rem' }}>  <FaInstagram /></Link>
                                </Grid>
                            </Grid>
                        </Box>
                    </Box>
                </Container>
                {/* Toast container */}
               
            </ThemeProvider>
        </Box>
    );
};

export default Login;

import { createTheme, ThemeProvider } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';

const Footer = () => {

    function Copyright() {
        return (
            <Typography variant="body2" color="text.secondary" sx={{textAlign:'center', padding:'1rem'}}>
                {'© Copyright '}
                {new Date().getFullYear()}
                {'  '}
                <Link color="inherit" sx={{textDecoration:'none'}}>
                     - All rights reserved by BackMang
                </Link>{' '}
            </Typography>
        );
    }

    const defaultTheme = createTheme();
    return (
        <ThemeProvider theme={defaultTheme}>
          
                <Box
                    component="footer"
                    sx={{
                        py: 3,
                        px: 2,
                        mt: 'auto',
                        backgroundColor: '#FFFFFF'}}
                >
                    <Container maxWidth="sm">
                        <Copyright />
                    </Container>
                </Box>
        </ThemeProvider>
    );
};

export default Footer;
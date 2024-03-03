import * as React from 'react';

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
// import Badge from '@mui/material/Badge';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import AccountCircle from '@mui/icons-material/AccountCircle';
import { Link } from 'react-router-dom';


const Navibar = () => {
    const [anchorEl, setAnchorEl] = React.useState(null);
   

    const isMenuOpen = Boolean(anchorEl);
    

    const handleProfileMenuOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };

 

    const handleMenuClose = () => {
        setAnchorEl(null);
     
    };

    

    const menuId = 'primary-search-account-menu';
    const renderMenu = (
        <Menu
            anchorEl={anchorEl}
            anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'right',
            }}
            id={menuId}
            keepMounted
            transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            open={isMenuOpen}
            onClose={handleMenuClose}
        >
            <Link to='/login' style={{ textDecoration: 'none', color: '#000000'}}>
             <MenuItem onClick={handleMenuClose}>Log In</MenuItem>
            </Link>
            <Link to='/signup' style={{ textDecoration: 'none', color: '#000000'}}>

            <MenuItem onClick={handleMenuClose}>Sign Up</MenuItem>
            </Link>
            <Link to='/faq' style={{ textDecoration: 'none', color: '#000000'}}>

            <MenuItem onClick={handleMenuClose}>FAQ</MenuItem>
            </Link>
        </Menu>
    );

    
    
    return (
        <Box sx={{ flexGrow: 1,}}>
            <AppBar position="static" sx={{backgroundColor: '#FFFFFF', boxShadow: 'none'}}>
                <Toolbar>
                    <Typography
                        variant="h6"
                        noWrap
                        component="div"
                        sx={{ display: { xs: 'block', sm: 'block'} }}
                    >
                        <Link to='/' style={{ textDecoration: 'none', color: '#990099', fontWeight: 'bold' }}>BackMang</Link>
                    </Typography>

                    <Box sx={{ flexGrow: 1 , }} />
                    <Box sx={{ display: { xs: 'flex', md: 'flex' } , }}>
                       
                        <IconButton
                            size="large"
                            edge="end"
                            aria-label="account of current user"
                            aria-controls={menuId}
                            aria-haspopup="true"
                            onClick={handleProfileMenuOpen}
                            color="#C0C0C0"
                        >
                            <AccountCircle />
                        </IconButton>
                    </Box>
                </Toolbar>
            </AppBar>
            
            {renderMenu}
        </Box>
    );
};

export default Navibar;
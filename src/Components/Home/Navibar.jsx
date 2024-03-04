import * as React from 'react';

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import AccountCircle from '@mui/icons-material/AccountCircle';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Card from 'react-bootstrap/Card';
import { Wallet } from '@mui/icons-material';

function MyVerticallyCenteredModal(props) {
    return (
        <Modal
            {...props}
            size="md"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    <h1 style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>Connect your wallet</h1>
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div className="row">
                    <div className="col-md-6">
                        <Card className="text-center mb-3">
                            <Card.Body>
                                <img src='https://i.ibb.co/fvbjdn8/icon-1.png' className="img-fluid mb-3" alt="MetaMask" />
                                <Card.Title style={{ color: '#990099' }}>MetaMask</Card.Title>
                            </Card.Body>
                        </Card>
                    </div>
                    <div className="col-md-6">
                        <Card className="text-center mb-3">
                            <Card.Body>
                                <img src='https://i.ibb.co/fHm02Tm/icon.png' className="img-fluid mb-3" alt="WalletConnect" />
                                <Card.Title style={{ color: '#990099' }}>WalletConnect</Card.Title>
                            </Card.Body>
                        </Card>
                    </div>
                </div>
            </Modal.Body>

        </Modal>
    );
}


const Navibar = () => {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [modalShow, setModalShow] = React.useState(false);

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
            <Link to='/login' style={{ textDecoration: 'none', color: '#000000' }}>
                <MenuItem onClick={handleMenuClose}>Log In</MenuItem>
            </Link>
            <Link to='/signup' style={{ textDecoration: 'none', color: '#000000' }}>

                <MenuItem onClick={handleMenuClose}>Sign Up</MenuItem>
            </Link>
            <Link to='/faq' style={{ textDecoration: 'none', color: '#000000' }}>

                <MenuItem onClick={handleMenuClose}>FAQ</MenuItem>
            </Link>
        </Menu>
    );



    return (
        <Box sx={{ flexGrow: 1, }}>
            <AppBar position="static" sx={{ backgroundColor: '#FFFFFF', boxShadow: 'none' }}>
                <Toolbar>
                    <Typography
                        variant="h6"
                        noWrap
                        component="div"
                        sx={{ display: { xs: 'block', sm: 'block' } }}
                    >
                        <Link to='/' style={{ textDecoration: 'none', color: '#990099', fontWeight: 'bold' }}>BackMang</Link>
                    </Typography>

                    <Box sx={{ flexGrow: 1, }} />
                    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap:'1rem' }}>
                        <Button
                            variant='secondary'
                            
                            onClick={() => setModalShow(true)}
                            sx={{
                                borderColor: '#990099', 
                                backgroundColor:'#FFFFFF',
                                display: 'flex', 
                                alignItems: 'center', 
                                gap: '0.5rem',
                                ":hover": { color: '#990099' },
                                
                            }}
                        >
                            <Wallet />
                            <span className="button-text" style={{marginLeft:'.5rem'}}>Connect Wallet</span>
                        </Button>
                        <MyVerticallyCenteredModal
                            show={modalShow}
                            onHide={() => setModalShow(false)}
                        />
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
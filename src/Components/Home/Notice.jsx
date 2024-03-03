import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';

const Notice = () => {
    return (
        <Box sx={{ flexGrow: 1,}}>
            <AppBar position="static" sx={{ backgroundColor: '#990099', boxShadow: 'none' }}>
                <div style={{textAlign:'center', padding:'1rem'}}>

                    <h1 style={{fontSize:'1.3rem'}}>Notice here</h1>
                </div>
            </AppBar>


        </Box>
    );
};

export default Notice;
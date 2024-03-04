import { useEffect, useState } from "react";
import Notice from "../Home/Notice";
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import CircularProgress from '@mui/material/CircularProgress';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: "#990099",
        color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 14,
    },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
        border: 0,
    },
}));



const AdminPanel = () => {





    const [userData, setUserData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchUserData = async () => {
            try {
                const response = await fetch('https://backmang-server-r0jemg1sb-bandhandut19.vercel.app/users');
                if (!response.ok) {
                    throw new Error('Failed to fetch data');
                }
                const data = await response.json();
                setUserData(data);
            } catch (error) {
                console.error('Error fetching user data:', error);
                setError(error);
            } finally {
                setLoading(false);
            }
        };

        fetchUserData();
    }, []);

    if (loading) {
        return <Stack sx={{ color: 'grey.500' , textAlign:'center' , display:'flex', justifyContent:'center', marginTop:'10rem'}} spacing={2} direction="row">
            <CircularProgress color="secondary" />
        </Stack>
    }

    if (error) {
        return <div>Error: {error.message}</div>;
    }
    const title = "ADMIN PANEL"
    const title_2 = "User Informations"

    return (
        <div>

            <Notice notice={title}></Notice>
            <div style={{ marginTop: '2rem' }}>
            </div>

            <TableContainer sx={{ padding: '2rem', marginBottom: '5rem' }} component={Paper}>
                <Table sx={{ minWidth: 700, marginTop: '2rem', }} aria-label="customized table">
                    <TableHead>
                        <TableRow sx={{ width: 'full' }}>
                            <Notice notice={title_2}></Notice>
                        </TableRow>
                        <TableRow>
                            <StyledTableCell align='center'>Name</StyledTableCell>
                            <StyledTableCell align="center">Email</StyledTableCell>
                        </TableRow>

                    </TableHead>
                    <TableBody>
                        {userData?.map((user) => (
                            <StyledTableRow key={user.userName}>
                                <StyledTableCell component="th" align='center' scope="row">
                                    {user.userName}
                                </StyledTableCell>
                                <StyledTableCell align="center">{user.userEmail}</StyledTableCell>

                            </StyledTableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
};

export default AdminPanel;

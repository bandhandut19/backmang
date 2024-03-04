

import { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from '@mui/material/Button';
import Table from 'react-bootstrap/Table';

const Wallet = () => {
    

    const [isBlue, setIsBlue] = useState(false);

    const handleClick = () => {
        setIsBlue(!isBlue);
    };


    return (
        <div style={{ backgroundColor: '#FFFFFF', padding: '3rem', marginBottom: '5rem' }}>
            <Form>
                <Form.Group className="mb-2" controlId="exampleForm.ControlInput1">
                    <div className="row gx-3">
                        <div className="col-md-6 mb-3 mb-md-0">
                            <h1 style={{ fontSize: '1rem', color: '#990099' }}>Wallet Address</h1>
                            <Form.Control type="email" placeholder="Your Wallet Address" />
                        </div>
                        <div className="col-md-6 d-md-flex flex-md-column">
                            <h1 style={{ fontSize: '1rem', color: '#990099' }}>Request Type</h1>
                            <div className="d-md-flex flex-md-row gap-3">
                                <Form.Control type="text" disabled placeholder="20 Test Link" className="mb-3 mb-md-0" />
                                <Form.Control type="text" disabled placeholder="0.5 ETH" />
                            </div>
                        </div>
                    </div>
                    <Button
                        type='submit'
                        variant="secondary"
                        className="mt-3"
                        style={{ backgroundColor: '#990099', color: '#FFFFFF' }}
                    >
                        Send Request
                    </Button>
                </Form.Group>
            </Form>
            <h1 style={{ fontSize: '1.3rem', fontWeight: 'bold', marginTop: '1rem', marginBottom: '2rem' }}>Request History</h1>

            {/* buttons for transaction show */}
            <div style={{ display: 'flex', gap: '1rem', flexDirection: 'column' }}>
                <button
                    style={{
                        backgroundColor: isBlue ? 'blue' : 'white',
                        color: 'black',
                        border: '1px solid black',
                        borderRadius: '5px',
                        padding: '.5rem',
                        width: '100%',
                        boxSizing: 'border-box',
                        maxWidth: '200px',
                    }}
                    onClick={handleClick}
                >
                    ETH Transaction History
                </button>
                <button
                    style={{
                        backgroundColor: isBlue ? 'white' : 'blue',
                        color: 'black',
                        border: '1px solid black',
                        borderRadius: '5px',
                        padding: '.5rem',
                        width: '100%',
                        boxSizing: 'border-box',
                        maxWidth: '200px',
                    }}
                    onClick={handleClick}
                >
                    TestLink Transaction History
                </button>
            </div>
            {/* Table of transactions */}

            <Table striped bordered hover style={{marginTop:'2rem',width:'50%'}}>
                <thead>
                    <tr>
                        <th>Sr</th>
                        <th>Time</th>
                        <th>Amount</th>
                        <th>Hash</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td>@mdo</td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>Jacob</td>
                        <td>Thornton</td>
                        <td>@fat</td>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td>Jacob</td>
                        <td>Thornton</td>
                        <td>@fat</td>
                    </tr>
                </tbody>
            </Table>


        </div>
    );
};

export default Wallet;

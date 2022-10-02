import React, { useState } from 'react';
import { Grid, TextField, Button, Card, CardContent, Box, Typography } from '@mui/material';
import { signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from 'react-router-dom';

import { auth } from '../../config/firebaseConfig';


const Login = () => {
    const [error, setError] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loader, setLoader] = useState(false);

    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        setLoader(true);

        try {
            await signInWithEmailAndPassword(auth, email, password);
            navigate("/umngane");
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div style={{ height: '50vh', alignItems: 'center', justifyContent: 'center', paddingTop: '100px' }}>
            <Typography variant='h4' align='center' sx={{ color: '#551b10', fontWeight: 'bold' }}>
                Login
            </Typography>
            <Grid container justifyContent='center'>
                <Card style={{ maxWidth: 450, boxShadow: 'none' }}>
                    <CardContent>
                        {error && <span style={{ marginTop: '15px', color: 'red', fontSize: '20px' }}>Incorrect email/password! </span>}
                        <form onSubmit={handleLogin}>
                            <Grid container spacing={1}>
                                <Grid item xs={12}>
                                    <TextField
                                        type='email'
                                        placeholder='Enter email'
                                        label='Email'
                                        name='email'
                                        variant='outlined'
                                        fullWidth
                                        /*required*/
                                        onChange={e => setEmail(e.target.value)}
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        type='password'
                                        placeholder='Password'
                                        label='Password'
                                        name='password'
                                        variant='outlined'
                                        fullWidth
                                        /*required*/
                                        onChange={e => setPassword(e.target.value)}
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <Box textAlign='center'>
                                        <Button type='submit'
                                            variant='contained'
                                            style={{
                                                backgroundColor: loader ? '#f36a11' : '#551b10',
                                                color: '#e1e1e1',
                                                fontSize: '14px',
                                                borderRadius: 10,
                                            }}
                                        >
                                            Login
                                        </Button>
                                    </Box>
                                </Grid>
                                <br />
                            </Grid>
                        </form>
                    </CardContent>
                </Card>
            </Grid>
        </div >
    )
}

export default Login
import { Grid, Typography, TextField, Button, Box, CardContent, Stack } from '@mui/material';
import { Work, TravelExplore, Instagram, FacebookOutlined, Twitter } from '@mui/icons-material';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import Logo from '../../assets/logo1.png';

const Contact = () => {
    const [loader, setLoader] = useState(false);
    return (
        <div style={{ backgroundColor: '#f5f5f5' }}>
            <Typography variant='h4' align='center' sx={{ paddingTop: '20px', color: '#551b10', fontWeight: 'bold' }}>
                Contact Us
            </Typography>
            <Grid container justifyContent='center' sx={{ padding: '15px' }}>
                <Grid item lg={4} md={4} sm={12} xs={12}>
                    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                        <CardContent sx={{ flex: '1 0 auto' }}>
                            <Stack direction='row' alignItems='center' gap={1}>
                                <TravelExplore sx={{ color: '#551b10', fontSize: '2.1rem' }} />
                                <Typography component='div' variant='h6' style={{ color: '#551b10' }}>
                                    Enquiries
                                </Typography>
                            </Stack>
                            <Typography variant='subtitle' color='text.secondary' component='div' align='left'>
                                abanganeplatformmedia@gmail.com
                            </Typography>
                            <Typography variant='subtitle' color='text.secondary' component='div' align='left'>
                                +263 77 357 6590
                            </Typography>
                            <br />
                            <br />
                            <Stack direction='row' alignItems='center' gap={1}>
                                <Work sx={{ color: '#551b10', fontSize: '2.1rem' }} />
                                <Typography component='div' variant='h6' style={{ color: '#551b10' }}>
                                    Projects
                                </Typography>
                            </Stack>
                            <Typography variant='subtitle' color='text.secondary' component='div' align='left'>
                                +263 78 148 2769
                            </Typography>
                            <Typography variant='subtitle' color='text.secondary' component='div' align='left'>
                                +263 78 056 8088
                            </Typography>
                        </CardContent>
                    </Box>
                </Grid>
                <Grid item lg={4} md={4} sm={12} xs={12} sx={{ padding: '10px' }}>
                    <form >
                        <Grid container spacing={1} style={{ backgroundColor: 'transparent' }}>
                            <Grid xs={12} sm={12} item>
                                <TextField placeholder='Name' label='Name' name='name' variant='outlined' fullWidth required />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField type='email' placeholder='Enter email' label='Email' name='email' variant='outlined' fullWidth required />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    label='Message'
                                    multiline rows={4}
                                    placeholder='Type your message here'
                                    name='message'
                                    variant='outlined'
                                    fullWidth required
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <Button type='submit'
                                    variant='contained'
                                    style={{
                                        backgroundColor: loader ? '#ccc' : '#551b10',
                                        color: '#e1e1e1',
                                        fontSize: '14px',
                                        borderRadius: 10,
                                    }}
                                >
                                    Submit
                                </Button>
                            </Grid>
                        </Grid>
                    </form>
                </Grid>
                <Grid item lg={4} md={4} sm={12} xs={12}>
                    <Link to='/' >
                            <img
                                src={Logo}
                                width='170px'
                                alt='logo'
                                style={{
                                    justifyContent: 'center'
                                }}
                            />
                    </Link>
                    <Typography variant='subtitle1' sx={{ color: '#551b10', fontStyle: 'italic', textAlign: 'center', marginBottom: '15px' }}>
                        Connect With Us
                    </Typography>
                    <Box>
                        <Grid container spacing={1} justifyContent='space-evenly' >
                            <Grid item >
                                <a style={{ color: '#fff' }} target='_blank' rel='noreferrer' href='https://facebook.com/patriotizim'>
                                    <FacebookOutlined
                                        sx={{
                                            textAlign: 'center',
                                            display: 'flex',
                                            color: '#551b10',
                                            fontSize: '50px',
                                            ':hover': {
                                                color: '#4267B2',
                                                fontSize: '60px'
                                            }
                                        }}
                                    />
                                </a>
                            </Grid>
                            <Grid item>
                                <a style={{ color: '#fff' }} target='_blank' rel='noreferrer' href='https://twitter.com/patriotizim'>
                                    <Twitter
                                        sx={{
                                            textAlign: 'center',
                                            display: 'flex',
                                            color: '#551b10',
                                            fontSize: '50px',
                                            ':hover': {
                                                color: '#00c6ff',
                                                fontSize: '60px'
                                            }
                                        }}
                                    />
                                </a>
                            </Grid>
                            <Grid item>
                                <a style={{ color: '#fff' }} target='_blank' rel='noreferrer' href='https://rusero.co.zw'>
                                    <Instagram
                                        sx={{
                                            textAlign: 'center',
                                            display: 'flex',
                                            color: '#551b10',
                                            fontSize: '50px',
                                            ':hover': {
                                                color: '#c1558b',
                                                fontSize: '60px'
                                            }
                                        }}
                                    />
                                </a>
                            </Grid>
                        </Grid>
                    </Box>
                </Grid>
            </Grid>
        </div>
    )
}

export default Contact
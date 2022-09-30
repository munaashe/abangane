import React from 'react';
import { Parallax } from 'react-parallax';
import { Typography, Button, Container, Box } from '@mui/material';
import { Link } from 'react-router-dom';

import home1 from '../../assets/home/1.jpg';
import home2 from '../../assets/home/2.jpg';
import home3 from '../../assets/home/3.jpg';

import Partners from '../../components/home/Partners';
import Gallery from '../../components/home/Gallery';
import Contact from '../../components/home/Contact';


const imageText = {
    background: 'transparent',
    left: '50%',
    top: '60%',
    position: 'absolute',
    transform: 'translate(-50%, -50%)',
    padding: '10px',
}


function Home() {
    return (
        <div >
            <Parallax bgImage={home1} strength={605}>
                <div style={{ height: 600 }}>
                    <div style={imageText}>
                        <Typography style={{ color: '#fff', fontWeight: 'bold' }} variant='h2' align='center' >
                            Working and playing as a team
                        </Typography>
                        <Typography style={{ color: '#fff', fontWeight: 'bold' }} variant="h5" align='center' >
                            Is the winning formula
                        </Typography>

                    </div>
                </div>
            </Parallax>
            <Container maxWidth='md' style={{ marginTop: '30px' }} justifyContent='center'>
                <Typography style={{ color: '#551b10', fontWeight: 'bold' }} variant='h4' align='center'>
                    Bangane Bethu
                </Typography>
                <br />
                <Typography paragraph align='center' style={{ color: '#333333', fontSize: '1.1rem' }}>
                    The word Abangane is Ndebele for friends. It stems from the idea that Abangane Trust seeks to create a safe place for young people to fully express themselves on the issues affecting them such as unemployment; lack of access to proper recreation facilities; drugs and substance abuse; unhealthy family dynamics which we believe affect an individual’s mental health drastically.
                </Typography>
                <br />
                <Typography paragraph align='center' style={{ color: '#333333', fontSize: '1.1rem' }}>
                    We strive to empower survivors and victims of mental health disorders along with their family members to lead healthier lives. On account of the silence and general ignorance towards the issue of mental health within the country, the Trust helps make mental health services more accessible to the youth through vital information that has proved to be scarce in the Zimbabwean culture climate.
                </Typography>
                <br />
                <Box textAlign='center'>
                    <Link to='/about' style={{ textDecoration: 'none' }}>
                        <Button
                            variant='contained'
                            style={{
                                backgroundColor: '#551b10',
                                color: '#fff',
                                fontSize: '20px',
                                borderRadius: '10px'
                            }}
                        >
                            Read More About Us
                        </Button>
                    </Link>
                </Box>
                <br />
                <br />
            </Container>
            <Parallax bgImage={home2} strength={605} >
                <div style={{ height: 500 }}>
                </div>
            </Parallax>
            <Partners />
            <Parallax bgImage={home3} strength={605} >
                <div style={{ height: 500 }}>

                </div>
            </Parallax >
            <Gallery />
            <Contact />
        </div >
    )
}

export default Home;
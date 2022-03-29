import React from 'react';
import {Container, Typography, Box} from '@mui/material';
import { Carousel } from 'react-carousel-minimal';

import smhzw from '../../assets/partners/smhzw.jpg';
import boldDialogue from '../../assets/partners/boldDialogue.jpg';
import contact from '../../assets/partners/contact.jpg';
import dignityAfrica from '../../assets/partners/dignityAfrica.jpg';
import friendship from '../../assets/partners/friendship.jpg';
import life from '../../assets/partners/life.jpg';
import ocdtrust from '../../assets/partners/ocdtrust.jpg';
import saywhat from '../../assets/partners/saywhat.png';
import srczim from '../../assets/partners/src.png';

function Partners() {
  const data =[
    {
      image: contact,
    },
    {
      image: dignityAfrica,
    },
    {
      image: friendship,
    },
    {
      image: life,
    },
    {
      image: ocdtrust,
    },
    {
      image: smhzw,
    },
    {
      image: boldDialogue,
    },
    {
      image: saywhat,
    },
    {
      image: srczim,
    },
  ];
  
  const captionStyle = {
    fontSize: '4em',
    fontWeight: 'bold',
  }
    return (
      <div>
        <Container maxWidth='md' sx={{marginTop: '40px'}} alignItems='center'>
          <Typography align='center' variant='h3' sx={{color: '#333333'}}>
            Our Partners
          </Typography>
          <Typography paragraph align='center'   style={{color: '#333333', fontSize: '1.2rem'}}>
            We work with a network of organisation and institutions in bringing about great interventions in the mental wellness of our colleagues. These entities include the following:
          </Typography>
          <br/>
          <br/>
          <Box alignItems='center' display='flex'>
            <Carousel
            data={data}
            time={5000}
            width='450px'
            height='450px'
            captionStyle={captionStyle}
            radius='10px'
            captionPosition='bottom'
            automatic= {true}
            dots={false}
            style={{
              textAlign: 'center',
              maxWidth: '1350px',
              maxHeight: '600px',
              margin: 'auto',
              align: 'center'
            }}
            />
          </Box>
          <br/>
          <br/>
        </Container>
       
      </div>
    );
  }
export default Partners





import React from 'react';
import {  Typography, Container} from '@mui/material';
import {Email, Call, WhatsApp, Facebook, Twitter} from '@mui/icons-material';

import background from '../assets/background.jpg';

export default function ContactUs() {

    return (
        <div style={{marginTop: '-90px', backgroundImage: `url(${background})`}}>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <Container maxWidth='md' alignItems='center' >
            <Typography variant='h4' align='center' style={{color: '#333333'}}>
              Contact Us
            </Typography>
            <Typography paragraph align='center'   style={{color: '#333333', fontSize: '1.2rem'}}>
              If you have any questions, feedback and comments, feel free to get hold of us
            </Typography>
            <br/>
            <br/>
            <Typography variant='h5' align='center'style={{color: '#333333'}}>
              Follow Us
            </Typography>
            <Typography paragraph align='center'   style={{color: '#333333', fontSize: '1.2rem'}}>
              <Twitter style={{size: '30px'}}/>  @Abangane_21
            </Typography>
            <Typography paragraph align='center'   style={{color: '#333333', fontSize: '1.2rem'}}>
              <Facebook style={{size: '30px'}}/> @Abangane-Platform
            </Typography>
            <hr/>
            <Email style={{size: '20px'}}/> 
            <Typography variant='h6' align='center'>
              abanganeplatformmedia@gmail.com
            </Typography>
            <br/>
            <WhatsApp/>
            <Typography variant='h6' align='center'>
              +263 77 357 6590
            </Typography>
            <br/>
             <Call/> 
            <Typography variant='h6' align='center'>
              +263 77 357 6590
            </Typography>
            <br/>
          </Container>
        </div>
    )
}
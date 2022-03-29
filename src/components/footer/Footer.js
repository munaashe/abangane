import React from 'react';
import './Footer.css';
import { Typography } from '@mui/material';

function Footer() {
  return (
    <div className='footer-container'>
      <section className='footer-subscription'>
        <Typography variant='h4' align='center' style={{color: '#fff'}}>
          Abangane Platforms
        </Typography>
        <Typography variant='subtitle1' align='center'  style={{color: '#fff'}} component='p' >
          {'All Rights Reserved ©'}  {new Date().getFullYear()}
        </Typography>
        <Typography variant='subtitle1' align='center'  style={{color: '#fff'}} component='p' >
          SiDesigned™
        </Typography>
      </section>
     
    </div>
  );
}

export default Footer;
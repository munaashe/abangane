import React from 'react';
import './Footer.css';
import { Typography } from '@mui/material';

function Footer() {
  return (
    <div className='footer-container'>
      <section className='footer-subscription'>
        <Typography variant='h5' align='center' style={{ color: '#fff', fontWeight: 'bold' }}>
          Abangane Platform
        </Typography>
        <Typography variant='subtitle1' align='center' style={{ color: '#fff' }} >
          {'All Rights Reserved ©'}  {new Date().getFullYear()}
        </Typography>
        <Typography variant='subtitle1' align='center' style={{ color: '#fff' }} >
          <a style={{ color: '#fff' }} target='_blank' rel='noreferrer' href='https://munashe.co.zw'>SiDesigned</a>
        </Typography>
      </section>

    </div>
  );
}

export default Footer;
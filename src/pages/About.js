import React from 'react';
import {Parallax} from 'react-parallax';
import { Typography, Container } from '@mui/material';

import about1 from '../assets/about/1.jpg';
import about2 from '../assets/about/2.jpg';
import about3 from '../assets/about/3.jpg';

function About() {
  return (
    <div>
      <Parallax bgImage={about1} strength={700} >
        <div style={{height: 600}}>
        </div>
      </Parallax>
      <br/>
      <br/>
      <Container maxWidth='md' style={{marginTop: '30px'}}>
        <Typography style={{color: '#333333'}} variant='h3' align='center'>
          Our Mission
        </Typography>
        <br/>
        <Typography paragraph align='center'   style={{color: '#333333', fontSize: '1.2rem'}}>
          To influence better provision of mental health services to all in need regardless of the age; gender; religion and culture. 
        </Typography>
        <hr/>
        <Typography style={{color: '#333333'}} variant='h3' align='center'>
          Our Vision
        </Typography>
        <br/>
        <Typography paragraph align='center'   style={{color: '#333333', fontSize: '1.2rem'}}>
          To raise awareness about mental health issues to communities and to policy makers on the importance of promoting mental health care and mental health education so as to raise the numbers of those who are properly treating mental health disorders and lower stigma and discrimination against, mental health issues.
        </Typography>
        <br/>
      </Container>

      <Parallax bgImage={about2} strength={200} >
        <div style={{height: 600}}>
        </div>
      </Parallax>
      <br/>
      <br/>
      <Container maxWidth='md' style={{marginTop: '30px'}}>
        <Typography style={{color: '#333333'}} variant='h3' align='center'>
          Our Objectives
        </Typography>
        <br/>
        <Typography paragraph align='center'   style={{color: '#333333', fontSize: '1.2rem'}}>
         •	Provide a platform that gives the youth a place to engage with each other on relevant issues; sharing their life challenges without the prejudice or stigma which are common traits associated with mental disorder in our cultures. 
        </Typography>
        <Typography paragraph align='center'   style={{color: '#333333', fontSize: '1.2rem'}}>
          •	Provide individuals diagnosed with mental disorders, an opportunity to the lead a normal and lives they deserve to lead. 
         </Typography>
         v
         <Typography paragraph align='center'   style={{color: '#333333', fontSize: '1.2rem'}}>
         •	To advocate for the elimination of drug and alcohol abuse which have often been viewed by the youth as ways to solve their problems and engage in recreation.
         </Typography>
         <Typography paragraph align='center'   style={{color: '#333333', fontSize: '1.2rem'}}>
         •	To defend rights of women and the girl child including but not limited to early marriages, legal abortion, domestic abuse, torture, and discrimination at all levels.
         </Typography>
         <Typography paragraph align='center'   style={{color: '#333333', fontSize: '1.2rem'}}>
         . To promote mental health services for all through media awareness and campaigns; to reduce stigma and discrimination on mental health illnesses and disorders. 
         </Typography>
        
        <br/>
      </Container>

      <Parallax bgImage={about3} strength={700} >
        <div style={{height: 600}}>
        </div>
      </Parallax>
    </div>
  )
}

export default About
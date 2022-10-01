import React from 'react';
import { Parallax } from 'react-parallax';
import { Typography, Container, Grid, Card, CardMedia } from '@mui/material';

import about1 from '../../assets/about/1.jpg';
import about2 from '../../assets/about/2.jpg';
import about3 from '../../assets/about/3.jpg';
import about4 from '../../assets/about/4.jpg';
import about5 from '../../assets/about/5.jpg';

function About() {
  return (
    <div style={{ backgroundColor: '#fafafa' }}>
      <Grid container justifyContent='center' sx={{ paddingTop: '40px', paddingBottom: '30px' }}>
        <Grid item lg={6} md={6} sm={12} xs={12}>
          <Card height='330px' sx={{ backgroundColor: 'transparent', boxShadow: 'none', paddingRight: '30px' }}>
            <CardMedia
              component='image'
              image={about1}
              alt='vision'
              sx={{
                objectFit: 'contain',
                height: '330px',
                padding: '20px',
                borderRadius: '65px'
              }}
            />
          </Card>
        </Grid>
        <Grid item lg={6} md={6} sm={12} xs={12}>
          <Container maxWidth='md' style={{ padding: '20px' }}>
            <Typography style={{ color: '#551b10', fontWeight: 'bold' }} variant='h4' align='center'>
              Our Mission
            </Typography>
            <Typography paragraph align='center' style={{ color: '#333333', fontSize: '1.0rem' }}>
              To influence better provision of mental health services to all in need regardless of the age; gender; religion and culture.
            </Typography>
            <br />
            <Typography style={{ color: '#551b10', fontWeight: 'bold' }} variant='h4' align='center'>
              Our Vision
            </Typography>
            <Typography paragraph align='center' style={{ color: '#333333', fontSize: '1.0rem' }}>
              To raise awareness about mental health issues to communities and to policy makers on the importance of promoting mental health care and mental health education so as to raise the numbers of those who are properly treating mental health disorders and lower stigma and discrimination against, mental health issues.
            </Typography>
            <br />
          </Container>
        </Grid>
      </Grid>

      <Parallax bgImage={about2} strength={605} >
        <div style={{ height: 500 }}>
        </div>
      </Parallax>
      <Container maxWidth='lg' style={{ marginTop: '30px' }}>
        <Typography style={{ color: '#551b10', fontWeight: 'bold' }} variant='h4' align='center'>
          Our Objectives
        </Typography>
        <Grid container justifyContent='center' sx={{ paddingTop: '40px', paddingBottom: '30px' }}>
          <Grid item lg={7} md={7} sm={12} xs={12} sx={{ marginRight: '30px', marginLeft: '30px' }}>
            <Typography paragraph align='center' style={{ color: '#333333', fontSize: '1.0rem' }}>
              •	To provide a platform that gives the youth a place to engage with each other on relevant issues; sharing their life challenges without the prejudice or stigma which are common traits associated with mental disorder in our cultures.
            </Typography>
            <Typography paragraph align='center' style={{ color: '#333333', fontSize: '1.0rem' }}>
              •	To provide individuals diagnosed with mental disorders, an opportunity to the lead a normal and lives they deserve to lead.
            </Typography>
          </Grid>
          <Grid item lg={3} md={3} sm={12} xs={12}>
            <Card height='150px' sx={{ backgroundColor: 'transparent', boxShadow: 'none', paddingRight: '30px' }}>
              <CardMedia
                component='image'
                image={about4}
                sx={{
                  objectFit: 'contain',
                  height: '150px',
                  padding: '20px',
                  borderRadius: '40px'
                }}
              />
            </Card>
          </Grid>
        </Grid>
        <Grid container justifyContent='center' sx={{ paddingTop: '40px', paddingBottom: '30px' }}>
          <Grid item lg={3} md={3} sm={12} xs={12}>
            <Card height='150px' sx={{ backgroundColor: 'transparent', boxShadow: 'none', paddingRight: '30px' }}>
              <CardMedia
                component='image'
                image={about5}
                sx={{
                  objectFit: 'contain',
                  height: '150px',
                  padding: '20px',
                  borderRadius: '40px'
                }}
              />
            </Card>
          </Grid>
          <Grid item lg={7} md={7} sm={12} xs={12} sx={{ marginRight: '30px', marginLeft: '30px' }}>
            <Typography paragraph align='center' style={{ color: '#333333', fontSize: '1.0rem' }}>
              •	To advocate for the elimination of drug and alcohol abuse which have often been viewed by the youth as ways to solve their problems and engage in recreation.
            </Typography>
            <Typography paragraph align='center' style={{ color: '#333333', fontSize: '1.0rem' }}>
              •	To defend rights of women and the girl child including but not limited to early marriages, legal abortion, domestic abuse, torture, and discrimination at all levels.
            </Typography>
            <Typography paragraph align='center' style={{ color: '#333333', fontSize: '1.0rem' }}>
              • To promote mental health services for all through media awareness and campaigns; to reduce stigma and discrimination on mental health illnesses and disorders.
            </Typography>
          </Grid>
        </Grid>
        <br />
      </Container>

      <Parallax bgImage={about3} strength={605} >
        <div style={{ height: 600 }}>
        </div>
      </Parallax>
    </div>
  )
}

export default About
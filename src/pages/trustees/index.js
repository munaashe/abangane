import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import { CardContent, CardMedia, Typography, Container, Grid } from '@mui/material';
import { Helmet } from 'react-helmet-async';

import background from '../../assets/background.jpg';
import allan from '../../assets/trustees/allan.jpg';
import kumbirai from '../../assets/trustees/kumbirai.jpg';
import michelle from '../../assets/trustees/michelle.jpg';
import zibusiso from '../../assets/trustees/zibusiso.jpg';


export default function Trustees() {

  return (
    <div style={{ marginTop: '-90px', backgroundImage: `url(${background})` }}>
      <Helmet>
        <title>Trustees | Abangane</title>
        <meta name='description' content='Abangane Platforms. Mental Health Champions' />
      </Helmet>
      <Typography variant='h3' align='center' sx={{ marginBottom: '20px', paddingTop: '120px', color: '#551b10', fontWeight: 'bold' }} >
        Abangane Trustees
      </Typography>
      <Container maxWidth='lg'>
        <Grid container spacing={5} padding='40px, 0' alignItems='stretch' justifyContent='center'>
          <Grid item xs={9.4} sm={4} md={4} lg={3}>
            <Card sx={{ justifyContent: 'center', height: '250px', backgroundColor: 'transparent', boxShadow: 'none' }} >
              <CardMedia
                component='img'
                sx={{ width: '242px', borderRadius: '50%', align: 'center' }}
                image={zibusiso}
                alt='Zibusiso Munandi'
              />
            </Card>
          </Grid>
          <Grid item xs={12} sm={8} md={8} lg={7}>
            <Card sx={{ backgroundColor: '#f9e0f3', height: '250px' }}>
              <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                <CardContent sx={{ flex: '0 0 auto' }}>
                  <Typography component='div' variant='h5' align='center'>
                    Zibusiso Munandi
                  </Typography>
                  <hr />
                  <Typography variant='body2' color='text.secondary' component='div'>
                    Zibusiso has been involved in spreading awareness of Mental Health issues in Bulawayo and surrounding areas. He has been seen doing Campaigns, holding forums, seminars and dialogue on fighting stigma , speaking in Platforms on issues that focus on a topic that lack public knowledge and understanding and discrimination on mental health. He is a human rights activist for the discriminated and stigmatized population. He is a vocal youth leader and a Project Manager at Maguguza Technological hub.
                  </Typography>
                </CardContent>
              </Box>
            </Card>
          </Grid>
          <Grid item xs={9.4} sm={4} md={4} lg={3}>
            <Card sx={{ justifyContent: 'center', backgroundColor: 'transparent', boxShadow: 'none', height: '250px' }} >
              <CardMedia
                component='img'
                sx={{ width: '242px', borderRadius: '50%', align: 'center' }}
                image={michelle}
                alt='Michelle Manzinde'
              />
            </Card>
          </Grid>
          <Grid item xs={12} sm={8} md={8} lg={7}>
            <Card sx={{ backgroundColor: '#f9e0f3', height: '250px' }}>
              <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                <CardContent sx={{ flex: '0 0 auto' }}>
                  <Typography component='div' variant='h5' align='center'>
                    Michelle Manzinde
                  </Typography>
                  <hr />
                  <Typography variant='body2' color='text.secondary' component='div'>
                    Michelle is a Zimbabwean based in South Africa. She ventured into management and works at a Financial institution in Cape Town. She is currently pursuing a degree in theology and is the founder of Woman of Valor, an interdenominational prayer group for women which has spread internationally over the years. Her passion for working to ameliorate the lives of women emanates from her personal experiences of depression and mental health challenges in some previous phases of her life.
                  </Typography>
                </CardContent>
              </Box>
            </Card>
          </Grid>
          <Grid item xs={9.4} sm={4} md={4} lg={3}>
            <Card sx={{ justifyContent: 'center', backgroundColor: 'transparent', boxShadow: 'none', height: '250px' }} >
              <CardMedia
                component='img'
                sx={{ width: '242px', borderRadius: '50%', align: 'center' }}
                image={kumbirai}
                alt='Kumbirai Nyika'
              />
            </Card>
          </Grid>
          <Grid item xs={12} sm={8} md={8} lg={7}>
            <Card sx={{ backgroundColor: '#f9e0f3', height: '250px' }}>
              <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                <CardContent sx={{ flex: '0 0 auto' }}>
                  <Typography component='div' variant='h5' align='center'>
                    Kumbirai Nyika
                  </Typography>
                  <hr />
                  <Typography variant='body2' color='text.secondary' component='div'>
                    Kumbirai was a member of the Junior Council of Harare in High School. He holds an LLB from Fort Hare. He has done various discussions pertaining constitutional and human rights law issues on Mdantsane FM & Link FM. He has worked as a legal associate intern at Muvingi & Mugadza Legal Practitioners, Harare and is currently a Judge’s Assistant at the Judicial Service Commission in Bulawayo. His long terms goals are to facilitate the education of basic rights, mental health and legal issues in poor communities.
                  </Typography>
                </CardContent>
              </Box>
            </Card>
          </Grid>
          <Grid item xs={9.4} sm={4} md={4} lg={3}>
            <Card sx={{ justifyContent: 'center', backgroundColor: 'transparent', boxShadow: 'none', height: '250px' }} >
              <CardMedia
                component='img'
                sx={{ width: '242px', borderRadius: '50%', align: 'center' }}
                image={allan}
                alt='Allan Mwafuliwa'
              />
            </Card>
          </Grid>
          <Grid item xs={12} sm={8} md={8} lg={7}>
            <Card sx={{ backgroundColor: '#f9e0f3', height: '250px' }}>
              <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                <CardContent sx={{ flex: '0 0 auto' }}>
                  <Typography component='div' variant='h5' align='center'>
                    Allan Mwafuliwa
                  </Typography>
                  <hr />
                  <Typography variant='body2' color='text.secondary' component='div'>
                    Allan holds an Honours Degree in Occupational Therapy from the University of Zimbabwe. He has previously worked at the United Bulawayo Hospitals as an Occupational Therapist with vast experience in clinical management of various conditions. He is keen on leadership issues and holds a Joshua Generation Leadership Certificate from Harvest House International. He also has a passion to work with young people, helping them to maximise their potential.
                  </Typography>
                </CardContent>
              </Box>
            </Card>
          </Grid>
        </Grid>
      </Container>
      <br />
      <br />
    </div>
  );
}
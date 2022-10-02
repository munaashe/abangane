import React, { useEffect, useState } from 'react';
import Typography from '@mui/material/Typography';
import { Helmet } from 'react-helmet-async';

import { Container, Card, CardMedia, CardContent, Button, Grid, CardActions } from '@mui/material';
import { Link } from 'react-router-dom'
import {
  collection,
  query,
  onSnapshot,
} from "firebase/firestore";

import { db } from '../../config/firebaseConfig';

export default function Blog() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const q = query(collection(db, "Articles"));
    const unsub = onSnapshot(q, (querySnapshot) => {
      let articlesArray = [];
      querySnapshot.forEach((doc) => {
        articlesArray.push({ ...doc.data(), id: doc.id });
      });
      setArticles(articlesArray);
    });
    return () => unsub();
  }, []);

  return (
    <Container maxWidth='lg' style={{ padding: '30px' }}>
      <Helmet>
        <title>Our Blog | Abangane</title>
        <meta name='description' content='Abangane Platforms. Mental Health Champions' />
      </Helmet>
      <Typography variant='h4' align='center' style={{ color: '#551b10', fontWeight: 'bold' }} marginBottom='25px'>
        Our Blog
      </Typography>
      <Container maxWidth='sm'>
        <Typography variant='subtitle1' align='center' sx={{ fontStyle: 'italic' }}>
          Please note that the views shared do not necessarily
          represent the views of the organisation, but those of
          our network of writers. To get your article published,
          get in touch with us
        </Typography>
        <br />
      </Container>
      <br />
      <br />

      <Grid container spacing={10}>
        {articles.map((article) => (
          <Grid item lg={4} md={4} sm={12} xs={12} key={article.id}>
            <Card >
              <CardMedia
                component="img"
                height="250"
                image={article.imageUrl}
                alt={article.title}
              />
              <CardContent>
                <Typography variant="h6" component="div">
                  {article.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {article.abstract}
                </Typography>
              </CardContent>
              <CardActions>
                <Link to={`/blog/${article.id}`} target='_blank' rel='noreferrer' style={{ textDecoration: 'none' }}>
                  <Button size="small" sx={{ color: '#551b10' }}>Read More</Button>
                </Link>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  )
};






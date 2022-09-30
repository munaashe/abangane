import React, { useEffect, useState } from 'react';
import Typography from '@mui/material/Typography';

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
    <Container maxWidth='lg' style={{ marginTop: '30px', marginBottom: '15px' }}>
      <Typography variant='h4' align='center' style={{ color: '#333333' }} marginBottom='25px'>
        Our Blog
      </Typography>
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
                <Typography  variant="h6" component="div">
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






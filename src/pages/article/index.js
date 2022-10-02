import { doc, onSnapshot } from 'firebase/firestore';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import './article.css'
import { db } from '../../config/firebaseConfig';
import { Container, Typography } from '@mui/material';

export default function Article() {
  const { id } = useParams();
  const [article, setArticle] = useState('');

  useEffect(() => {
    const docRef = doc(db, 'Articles', id);
    onSnapshot(docRef, (snapshot) => {
      setArticle({ ...snapshot.data(), id: snapshot.id });
    });
  });


  return (
    <div style={{ marginTop: '30px' }}>
      <Helmet>
        <title>{article.title}</title>
        <meta name='description' content={article.abstract} />
      </Helmet>
      <Container maxWidth='md' style={{ backgroundColor: '#fff' }}>

        <Typography gutterBottom variant='h4' sx={{ fontWeight: 'bold', color: '#551b10' }} component='div'>
          {article.title}
        </Typography>
        <Typography variant='body2' color='text.secondary'>
          {article.abstract}
        </Typography>
        <img
          src={article.imageUrl}
          alt={article.title}
          height='400px'
        />
        <Typography sx={{ fontSize: 14, fontStyle: 'italic' }} color='text.secondary' >
          By {article.author}
        </Typography>
        <br />
        <Typography variant='body1' className='body'>
          {article.body}
        </Typography>
        <br />
      </Container>
    </div >
  );
}



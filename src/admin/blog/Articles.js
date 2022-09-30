import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { Grid } from '@mui/material';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Container, Button } from '@mui/material';
import {
    collection,
    query,
    onSnapshot,
    deleteDoc,
    doc
} from "firebase/firestore";

import { db } from '../../config/firebaseConfig';

const Articles = () => {
    const [Articles, setArticles] = useState([]);

    useEffect(() => {
        const q = query(collection(db, "Articles"));
        const unsub = onSnapshot(q, (querySnapshot) => {
            let ArticlesArray = [];
            querySnapshot.forEach((doc) => {
                ArticlesArray.push({ ...doc.data(), id: doc.id });
            });
            setArticles(ArticlesArray);
        });
        return () => unsub();
    }, []);

    const handleDelete = async (id) => {
        await deleteDoc(doc(db, "Articles", id));
    };

    return (
        <div>
            <Container maxWidth='lg' style={{ marginTop: '20px', marginBottom: '20px' }}>
                <Grid container spacing={3} alignItems='center'>
                    {Articles.map((Article) => (
                        <Grid item lg={12} >
                            <Card sx={{ display: 'flex' }}>
                                <Box sx={{ display: 'flex', flexDirection: 'row' }}>
                                    <CardMedia
                                        component="img"
                                        sx={{ height: '400px', minWidth: '350px' }}
                                        image={Article.imageUrl}
                                        alt={Article.title}
                                    />
                                </Box>
                                <Box >
                                    <CardContent sx={{ flex: '1 0 auto' }}>
                                        <Typography component="div" variant="h5">
                                            {Article.title}
                                        </Typography>
                                        <Typography variant="subtitle1" color="text.secondary" component="div">
                                            {Article.abstract}
                                        </Typography>
                                    </CardContent>
                                    <br />
                                    <Box >
                                        <Button
                                            variant='outlined'
                                            style={{
                                                color: '#FFF',
                                                backgroundColor: 'red'
                                            }}
                                            onClick={() => handleDelete(Article.id)}
                                        >
                                            Delete Article
                                        </Button>
                                    </Box>
                                </Box>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </div>
    )
}

export default Articles;


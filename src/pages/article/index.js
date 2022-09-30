import { doc, onSnapshot, collection, addDoc } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { db } from "../../config/firebaseConfig";
import { Container, Grid, Card, CardContent, CardMedia, Typography, Box, TextField, Button } from "@mui/material";

export default function Article() {
  const { id } = useParams();
  const [article, setArticle] = useState('');
  const [loader, setLoader] = useState(false)
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');



  useEffect(() => {
    const docRef = doc(db, "Articles", id);
    onSnapshot(docRef, (snapshot) => {
      setArticle({ ...snapshot.data(), id: snapshot.id });
    });
  });

  

  return (
    <div style={{ marginTop: '20px', backgroundColor: '#f5f5f5' }}>
      <Container maxWidth='md' style={{ backgroundColor: '#f5f5f5' }}>
        {article && (
          <Grid container spacing={3} alignItems='center' style={{ marginBottom: '20px' }}>
            <Grid item xs={12} sm={12} md={6} lg={6}>
              <Card style={{ backgroundColor: '#f5f5f5', border: "none", boxShadow: "none" }}>
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {article.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {article.abstract}
                  </Typography>
                </CardContent>
                <CardMedia
                  component="img"
                  height="450"
                  image={article.imageUrl}
                  alt={article.title}
                />
              </Card>
            </Grid>
            <Grid item xs={12} sm={12} md={6} lg={6}>
              <Box sx={{ minWidth: 275 }}>
                <Card style={{ backgroundColor: '#f5f5f5', border: "none", boxShadow: "none" }}>
                  <CardContent>
                    <br />
                    <br />
                    <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                       {article.author}
                    </Typography>
                    <br />
                    <Typography variant="body1">
                      {article.body}
                    </Typography>
                  </CardContent>
                 
                </Card>
              </Box>
            </Grid>
          </Grid>
        )}
        <br />
      </Container>
    </div >
  );
}



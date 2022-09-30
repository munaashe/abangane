import { Button, Container, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import Pictures from './Pictures'

const Gallery = () => {
  return (
    <Container maxWidth='lg' sx={{ paddingTop: '70px' }}>
      <Typography variant='h4' align='center' sx={{ fontWeight: 'bold' }}>
        Photo Gallery
      </Typography>
      <Link to='/umngane/add-picture' target='_blank' rel='noreferrer' style={{ textDecoration: 'none' }}>
        <Button variant='outlined' sx={{ color: '#333', borderRadius: '15px' }}>
          Add New Picture
        </Button>
      </Link>
      <Pictures />
    </Container>
  )
}

export default Gallery;
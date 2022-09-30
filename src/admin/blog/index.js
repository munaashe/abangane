import { Button, Container, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import Articles from './Articles'

const BlogArticles = () => {
  return (
    <div>
      <Container maxWidth='lg' sx={{ paddingTop: '70px' }}>
        <Typography variant='h4' align='center' sx={{ fontWeight: 'bold' }}>
          Blog Articles
        </Typography>
        <Link to='/umngane/add-article' target='_blank' rel='noreferrer' style={{ textDecoration: 'none' }}>
          <Button variant='outlined' sx={{ color: '#333', borderRadius: '15px' }}>
            Add New Article
          </Button>
        </Link>
        <Articles/>
      </Container>
    </div>
  )
}

export default BlogArticles
import React from 'react';
import { Container, Grid } from '@mui/material';
import { usePosts } from '../hooks/usePosts';
import Navbar from '../components/Navbar';
import PostCard from '../components/PostCard';

const MainPage: React.FC = () => {
  const { data: posts } = usePosts();

  return (
    <>
      <Navbar />
      <Container>
        <Grid container spacing={3}>
          {posts?.map(post => (
            <Grid item key={post.id} xs={12} sm={6} md={4}>
              <PostCard post={post} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </>
  );
};


export default MainPage;

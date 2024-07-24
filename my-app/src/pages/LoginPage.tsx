import React from 'react';
import { Container, Box, Typography } from '@mui/material';
import LoginForm from '../components/LoginForm';

const LoginPage: React.FC = () => {
  return (
    <Container>
      <Box display="flex" flexDirection="column" alignItems="center" mt={8}>
        <Typography variant="h4" gutterBottom>
          Login
        </Typography>
        <LoginForm />
      </Box>
    </Container>
  );
};

export default LoginPage;

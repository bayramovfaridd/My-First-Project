import React from 'react';
import { AppBar, Toolbar, Typography } from '@mui/material';
import LoginForm from './LoginForm';
import { useAuth } from '../hooks/useAuth';

const Navbar: React.FC = () => {
const {user} =useAuth();

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6">
          Welcome, {user}
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;

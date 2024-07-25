import React from 'react';
import { AppBar, Toolbar, Typography } from '@mui/material';
import LoginForm from './LoginForm';
import { useAuth } from '../hooks/useAuth';
import '../App.css'
const Navbar: React.FC = () => {
const {user} =useAuth();

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6">
          <div className='navbartext'>{user}</div>
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;

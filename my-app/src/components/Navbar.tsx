import React from 'react';
import { AppBar, Toolbar, Typography } from '@mui/material';
import { useSelector } from 'react-redux';
import { RootState } from '../store/store';
import '../App.css'

const Navbar: React.FC = () => {
  const userName = useSelector((state: RootState) => state.auth.userName);

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6">
         <div className='navbartext'>Welcome, {userName || 'Guest'}!</div> 
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;

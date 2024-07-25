import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import { TextField, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { login } from '../store/authSlice';


interface User {
  email: string;
}

interface LoginFormInputs {
  email: string;
}

const LoginForm: React.FC = () => {
  const [validEmails, setValidEmails] = useState<string[]>([]);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    // Fetch user data from JSONPlaceholder API
    axios.get<User[]>('https://jsonplaceholder.typicode.com/users')
      .then(response => {
        const emails = response.data.map(user => user.email);
        setValidEmails(emails);
      })
      .catch(error => {
        console.error('Error fetching user data:', error);
      });
  }, []);

  const schema = Yup.object().shape({
    email: Yup.string().email('Invalid email').required('Email is required'),
  });

  const { register, handleSubmit, formState: { errors } } = useForm<LoginFormInputs>({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data: LoginFormInputs) => {
    if (validEmails.includes(data.email)) {
      dispatch(login(data.email));
      console.log('Login successful');
      navigate('/');
      console.log('Navigating to /');
    } else {
      console.error('Invalid email');
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <TextField
        label="Email"
        {...register('email')}
        error={!!errors.email}
        helperText={errors.email?.message}
        fullWidth
      />
      <Button type="submit" variant="contained" color="primary">
        Login
      </Button>
    </form>
  );
};

export default LoginForm;

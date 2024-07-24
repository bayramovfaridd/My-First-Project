import React from 'react';
import { useForm } from 'react-hook-form';
import { TextField, Button, Box } from '@mui/material';
import { useAuth } from '../hooks/useAuth';
import axios from 'axios';

interface AddCommentFormProps {
  postId: number;
  onCommentAdded: () => void;
}

interface AddCommentFormInputs {
  body: string;
}

const AddCommentForm: React.FC<AddCommentFormProps> = ({ postId, onCommentAdded }) => {
  const { register, handleSubmit, reset } = useForm<AddCommentFormInputs>();
  const { user } = useAuth();

  const onSubmit = async (data: AddCommentFormInputs) => {
    const newComment = {
      postId,
      body: data.body,
      email: user,
      name: 'User',
    };

    // Simulate add comment API call
    await axios.post(`https://jsonplaceholder.typicode.com/comments`, newComment);
    reset();
    onCommentAdded();
  };

  return (
    <Box component="form" onSubmit={handleSubmit(onSubmit)}>
      <TextField
        label="Add a comment"
        {...register('body')}
        fullWidth
        margin="normal"
        multiline
        rows={4}
      />
      <Button type="submit" variant="contained" color="primary">
        Add Comment
      </Button>
    </Box>
  );
};

export default AddCommentForm;

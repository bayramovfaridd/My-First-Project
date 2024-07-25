import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import { TextField, Button, Box, CircularProgress, Typography } from '@mui/material';
import axios from 'axios';
import { useAuth } from '../hooks/useAuth';
import { useQueryClient } from 'react-query';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

interface AddCommentFormProps {
  postId: number;
  onCommentAdded: () => void;
}

interface AddCommentFormInputs {
  body: string;
}

const schema = yup.object().shape({
  body: yup.string().required('Comment is required').min(1, 'Comment must be at least 1 character long'),
});

const AddCommentForm: React.FC<AddCommentFormProps> = ({ postId, onCommentAdded }) => {
  const { control, handleSubmit, reset, formState: { isSubmitting, errors } } = useForm<AddCommentFormInputs>({
    resolver: yupResolver(schema),
  });
  const { user } = useAuth();
  const queryClient = useQueryClient();

  const onSubmit = async (data: AddCommentFormInputs) => {
    const newComment = {
      postId,
      body: data.body,
      email: user,
      name: user,
    };

    try {
      // Add comment
      await axios.post('https://jsonplaceholder.typicode.com/comments', newComment);
      console.log('Comment added successfully');
      queryClient.invalidateQueries('comments');
      onCommentAdded();
      reset();
    } catch (error) {
      console.error('Failed to add comment:', error);
    }
  };

  return (
    <Box component="form" onSubmit={handleSubmit(onSubmit)} noValidate>
      <Controller
        name="body"
        control={control}
        defaultValue=""
        render={({ field }) => (
          <TextField
            label="Add a comment"
            {...field}
            fullWidth
            margin="normal"
            multiline
            rows={4}
            error={!!errors.body}
            helperText={errors.body?.message}
          />
        )}
      />
      <Box display="flex" alignItems="center">
        <Button type="submit" variant="contained" color="primary" disabled={isSubmitting}>
          {isSubmitting ? <CircularProgress size={24} /> : 'Add Comment'}
        </Button>
      </Box>
    </Box>
  );
};

export default AddCommentForm;

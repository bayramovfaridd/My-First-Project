import React from 'react';
import { useComments } from '../hooks/useComments';
import { Drawer, List, ListItem, ListItemText, IconButton } from '@mui/material';
import AddCommentForm from './AddCommentForm';
import DeleteIcon from '@mui/icons-material/Delete';
import { Comment } from '../types';
import { useAuth } from '../hooks/useAuth';

interface CommentSidebarProps {
  postId: number;
  onClose: () => void;
}

const CommentSidebar: React.FC<CommentSidebarProps> = ({ postId, onClose }) => {
  const { data: comments, refetch } = useComments(postId);
  const { user } = useAuth();

  const handleDelete = async (commentId: number) => {
    // Simulate delete comment API call
    await axios.delete(`https://jsonplaceholder.typicode.com/comments/${commentId}`);
    refetch();
  };

  return (
    <Drawer anchor="right" open={true} onClose={onClose}>
      <List>
        {comments?.map((comment: Comment) => (
          <ListItem key={comment.id} alignItems="flex-start">
            <ListItemText primary={comment.name} secondary={comment.body} />
            {comment.email === user && (
              <IconButton edge="end" onClick={() => handleDelete(comment.id)}>
                <DeleteIcon />
              </IconButton>
            )}
          </ListItem>
        ))}
      </List>
      <AddCommentForm postId={postId} onCommentAdded={refetch} />
    </Drawer>
  );
};

export default CommentSidebar;

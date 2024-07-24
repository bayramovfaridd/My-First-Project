import React, { useState } from 'react';
import { Card, CardContent, Typography, Button, CardActions } from '@mui/material';
import { Post } from '../types';
import CommentSidebar from './CommentSidebar';

interface PostCardProps {
  post: Post;
}

const PostCard: React.FC<PostCardProps> = ({ post }) => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const handleCommentButtonClick = () => {
    setSidebarOpen(true);
  };

  return (
    <>
      <Card>
        <CardContent>
          <Typography variant="h5">{post.title}</Typography>
          <Typography variant="body2">{post.body}</Typography>
        </CardContent>
        <CardActions>
          <Button onClick={handleCommentButtonClick}>Comments</Button>
        </CardActions>
      </Card>
      {isSidebarOpen && <CommentSidebar postId={post.id} onClose={() => setSidebarOpen(false)} />}
    </>
  );
};

export default PostCard;

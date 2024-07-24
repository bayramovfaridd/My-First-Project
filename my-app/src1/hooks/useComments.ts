import { useQuery } from 'react-query';
import axios from 'axios';
import { Comment } from '../types';

const fetchComments = async (postId: number): Promise<Comment[]> => {
  const { data } = await axios.get<Comment[]>(`https://jsonplaceholder.typicode.com/comments?postId=${postId}`);
  return data;
};

export const useComments = (postId: number) => {
  return useQuery<Comment[]>(['comments', postId], () => fetchComments(postId));
};

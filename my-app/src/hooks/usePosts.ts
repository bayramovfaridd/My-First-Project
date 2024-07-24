import { useQuery } from 'react-query';
import axios from 'axios';
import { Post } from '../types';

const fetchPosts = async (): Promise<Post[]> => {
  const { data } = await axios.get<Post[]>('https://jsonplaceholder.typicode.com/posts');
  return data;
};

export const usePosts = () => {
  return useQuery<Post[]>('posts', fetchPosts);
};

import { useState } from 'react';
import axios from 'axios';

interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: string;
      lng: string;
    };
  };
  phone: string;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
}

export const useAuth = () => {
  const [user, setUser] = useState<string | null>(null);

  const loginUser = async (email: string) => {
    try {
      const { data } = await axios.get<User[]>('https://jsonplaceholder.typicode.com/users');
      const validUser = data.find((user) => user.email === email);

      if (validUser) {
        setUser(email); // Set user email as logged-in user
        console.log(user);
      } else {
        // Handle invalid email
        alert('Invalid email');
      }
    } catch (error) {
      console.error('Error fetching users:', error);
    }
  };

  return { user, loginUser };
};

import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store/store';
import { login, logout } from '../store/authSlice';

export const useAuth = () => {
  const dispatch = useDispatch();
  const user = useSelector((state: RootState) => state.auth.user);

  const loginUser = (email: string) => {
    dispatch(login(email));
  };

  const logoutUser = () => {
    dispatch(logout());
  };

  return {
    user,
    loginUser,
    logoutUser,
  };
};

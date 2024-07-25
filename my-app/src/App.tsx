import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import MainPage from './pages/MainPage';
import { useAuth } from './hooks/useAuth';
import { useSelector } from 'react-redux';
import { RootState } from './store/store';

const App: React.FC = () => {

  const user = useSelector((state: RootState) => state.auth.user);

  return (
    <Router>
      <Routes>
        <Route path="/" element={user ? <MainPage /> : <Navigate to="/login"/>} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </Router>
  );
};

export default App;

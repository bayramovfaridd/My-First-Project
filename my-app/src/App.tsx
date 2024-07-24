import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import MainPage from './pages/MainPage';
import { useAuth } from './hooks/useAuth';

const App: React.FC = () => {
  const { user } = useAuth();
  console.log(user);

  return (
    <Router>
      <Routes>
        <Route path="/" element={user ? <MainPage /> : <Navigate to="/login" />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </Router>
  );
};

export default App;

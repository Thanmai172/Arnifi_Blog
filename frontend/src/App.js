import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

import Signup from './pages/Signup';
import Login from './pages/Login';
import Home from './pages/Home';
import CreateBlog from './pages/CreateBlog';
import EditBlog from './pages/EditBlog';
import MyBlogs from './pages/MyBlogs';
import Navbar from './components/Navbar';
import Landing from './pages/Landing';

const App = () => {
  // Track auth state with React state
  const [isAuth, setIsAuth] = useState(!!localStorage.getItem('token'));

  // Listen for token changes in other tabs/windows (optional)
  useEffect(() => {
    const handleStorageChange = () => {
      setIsAuth(!!localStorage.getItem('token'));
    };
    window.addEventListener('storage', handleStorageChange);
    return () => window.removeEventListener('storage', handleStorageChange);
  }, []);

  return (
    <Router>
      <Navbar isAuth={isAuth} setIsAuth={setIsAuth} />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route
          path="/home"
          element={isAuth ? <Home /> : <Navigate to="/login" replace />}
        />
        <Route
          path="/signup"
          element={<Signup />}
        />
        <Route
          path="/login"
          element={<Login onLogin={() => setIsAuth(true)} />}
        />
        <Route
          path="/create"
          element={isAuth ? <CreateBlog /> : <Navigate to="/login" replace />}
        />
        <Route
          path="/edit/:id"
          element={isAuth ? <EditBlog /> : <Navigate to="/login" replace />}
        />
        <Route
          path="/myblogs"
          element={isAuth ? <MyBlogs /> : <Navigate to="/login" replace />}
        />
      </Routes>
    </Router>
  );
};

export default App;

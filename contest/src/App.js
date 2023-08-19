import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from './component/LoginPage';
import ProfilePage from './component/ProfilePage';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/"  element={<LoginPage/>} exact />
        <Route path="/ProfilePage" element={<ProfilePage/>} />
      </Routes>
    </Router>
  );
};

export default App;

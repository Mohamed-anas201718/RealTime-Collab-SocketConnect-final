import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import Registration from './components/Registration';
import Login from './components/Login';
import NavBar from './components/NavBar';
import Footer from './components/Footer/Footer';
import Dashboard from './components/Dashboard';
import DocumentDetails from './components/DocumentDetails';
import DocumentForm from './components/DocumentForm';

const App = () => {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/register" element={<Registration />} />
        <Route path="/login" element={<Login />} />
        <Route path="/Dashboard" element={<Dashboard/>} />
        <Route path="/document/:id" element={<DocumentDetails/>} />
        <Route path="/document/new" element={<DocumentForm/>} />
        
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;

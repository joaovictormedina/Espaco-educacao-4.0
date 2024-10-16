import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Courses from './components/Courses';
import Events from './components/Events';
import Footer from './components/Footer';
import Login from './pages/Login/Login';
import Contact from './components/Contact';
import Contato from './pages/Contacts/Contato';
import './style.css';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={
          <>
            <Courses />
            <Events />
            <Contact />
          </>
        } />
        <Route path="/login" element={<Login />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/contato" element={<Contato />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;

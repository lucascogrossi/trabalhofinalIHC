import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Nav from './components/Nav';
import Hero from './components/Hero';
import Footer from './components/Footer';
import Login from './pages/Login'; // Importa a página de login
import './styles.css';

const App = () => (
  <Router>
    <div className="app-container">
      <Header />
      <Nav />
      <Hero />
      <Routes>
        {/* Define as rotas */}
        <Route path="/login" element={<Login />} />
      </Routes>
      <Footer />
    </div>
  </Router>
);

export default App;
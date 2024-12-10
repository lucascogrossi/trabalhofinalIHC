import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';  
import Login from './pages/Login'; // Importa a página de login
import Header from './components/Header'; // Cabeçalho global
import './styles.css';
import Signup from './pages/Signup';

const App = () => (
  <Router>
    <div className="app-container">
      {/* Cabeçalho na aplicação */}

      <Routes>
        {/* Define as rotas */}
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </div>
  </Router>
);

export default App;

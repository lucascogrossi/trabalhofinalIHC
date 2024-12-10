import React from 'react';
import Header from './components/Header';
import Nav from './components/Nav';
import Hero from './components/Hero';
import Footer from './components/Footer';
import './styles.css';

const App = () => (
  <div className="app-container">
    <Header />
    <Nav />
    <Hero />
    <Footer />
  </div>
);

export default App;

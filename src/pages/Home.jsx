import React from 'react';
import Header from '../components/Header';
import Nav from '../components/Nav';
import Hero from '../components/Hero';
import Footer from '../components/Footer';
import '../styles.css';

const Home = () => (
  <div className="home-container">
    <Header />
    <Nav />
    <Hero />
    <main>
    </main>
    <Footer />
  </div>
);

export default Home;

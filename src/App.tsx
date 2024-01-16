import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from '@components/Header';
import Footer from '@components/Footer';

// let data = {};
const App: React.FC = () => {
  return (
    <div className="App">
      <Header />
      <Footer />
    </div>
  );
};

export default App;

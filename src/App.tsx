import React from 'react';
import logo from './logo.svg';
import './App.css';
import GlobalStyle from '@styles/global-styles';
import Header from '@components/Header';
import Footer from '@components/Footer';

// let data = {};
const App: React.FC = () => {
  return (
    <div className="App">
      <GlobalStyle />
      <Header />
      <Footer />
    </div>
  );
};

export default App;

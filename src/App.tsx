import React from 'react';

import { ThemeProvider } from 'styled-components';
import theme from '@styles/theme';
import './App.css';
import GlobalStyle from '@styles/global-styles';

import Layout from '@components/Layout';
import Header from '@components/Header';
import Footer from '@components/Footer';
import Contents from '@components/Contents';

const App = () => {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={{ ...theme }}>
        <Layout>
          <Header />
          <Contents />
          <Footer />
        </Layout>
      </ThemeProvider>
    </>
  );
};

export default App;

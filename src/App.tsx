import { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';

import { ThemeProvider } from 'styled-components';
import theme from '@styles/theme';
import './App.css';
import GlobalStyle from '@styles/global-styles';

import Layout from '@components/Layout';
import Header from '@components/Header';
import Footer from '@components/Footer';
import Contents from '@components/Contents';

import Main from '@pages/Main';
import VideoList from '@pages/VideoList';
import VideoDetail from '@pages/VideoDetail';

const App = () => {
  function setScreenHeight() {
    const vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
  }
  useEffect(() => {
    setScreenHeight();
  });
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={{ ...theme }}>
        <Layout>
          <Header />
          <Contents>
            <Routes>
              <Route path="/tntn/" element={<Main />} />
              <Route path="/videoList" element={<VideoList />} />
              <Route path="/videoList:id" element={<VideoList />} />
              <Route path="/videoDetail" element={<VideoDetail />} />
              <Route path="/videoDetail:id" element={<VideoDetail />} />
            </Routes>
          </Contents>
          <Footer />
        </Layout>
      </ThemeProvider>
    </>
  );
};

export default App;

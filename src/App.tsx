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
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={{ ...theme }}>
        <Layout>
          <Header />
          <Contents>
            <Routes>
              <Route path="/" element={<Main />}></Route>
              <Route path="/videoList/:id" element={<VideoList />}></Route>
              <Route path="/videoDetail/:id" element={<VideoDetail />} />
            </Routes>
          </Contents>
          <Footer />
        </Layout>
      </ThemeProvider>
    </>
  );
};

export default App;

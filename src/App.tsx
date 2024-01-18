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
import List from '@pages/List';
import View from '@pages/View';

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
              <Route path="/list" element={<List />}></Route>
              <Route path="/view" element={<View />}></Route>
            </Routes>
          </Contents>
          <Footer />
        </Layout>
      </ThemeProvider>
    </>
  );
};

export default App;

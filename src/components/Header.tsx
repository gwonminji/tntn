import React from 'react';
import { Desktop, Tablet, Mobile } from '@styles/mediaQuery';
import styled, { ThemeProvider } from 'styled-components';
import theme from '@styles/theme';
// import media from '@styles/media';

const HeaderWrap = styled.header`
  display: flex;
  background: ${({ theme }) => theme.colors.red};
`;
const Header: React.FC = () => {
  return (
    <ThemeProvider theme={{ ...theme }}>
      <HeaderWrap>
        <Desktop>Desktop</Desktop>
        <Tablet>Tablet</Tablet>
        <Mobile>Mobile</Mobile>
      </HeaderWrap>
    </ThemeProvider>
  );
};

export default Header;

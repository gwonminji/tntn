import React from 'react';

import { Desktop, Tablet, Mobile } from '@styles/mediaQuery';
import styled from 'styled-components';

type WrapperProps = {
  children: React.ReactNode;
};

const DesktopContainer = styled.div`
  width: 100%;
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 40px;
`;
const TabletContainer = styled.div`
  width: 100%;
  max-width: 100%;
  margin: 0 auto;
  padding: 0 40px;
`;
const MobileContainer = styled.div`
  width: 100%;
  max-width: 100%;
  margin: 0 auto;
  padding: 0 20px;
`;
const Container = ({ children }: WrapperProps) => {
  return (
    <>
      <Desktop>
        <DesktopContainer>{children}</DesktopContainer>
      </Desktop>
      <Tablet>
        <TabletContainer>{children}</TabletContainer>
      </Tablet>
      <Mobile>
        <MobileContainer>{children}</MobileContainer>
      </Mobile>
    </>
  );
};

export default Container;

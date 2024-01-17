import React from 'react';

import { Desktop, Tablet, Mobile } from '@styles/mediaQuery';
import styled from 'styled-components';

import logo from '@assets/images/logo.png';

const DesktopHeaderLogoWrap = styled.a`
  display: block;
  max-width: 282px;
  margin: 0 auto;
`;

const TabletHeaderLogoWrap = styled.a`
  display: block;
  max-width: 240px;
  margin: 0 auto;
`;

const MobileHeaderLogoWrap = styled.a`
  display: block;
  max-width: 200px;
  margin: 0 auto;
`;

const LogoImg = styled.img`
  display: block;
  max-width: 100%;
  height: auto;
`;

const HeaderLogo = () => {
  return (
    <>
      <Desktop>
        <DesktopHeaderLogoWrap href="#" title="메인으로 이동">
          <LogoImg src={logo} alt="튼튼" />
        </DesktopHeaderLogoWrap>
      </Desktop>
      <Tablet>
        <TabletHeaderLogoWrap href="#" title="메인으로 이동">
          <LogoImg src={logo} alt="튼튼" />
        </TabletHeaderLogoWrap>
      </Tablet>
      <Mobile>
        <MobileHeaderLogoWrap href="#" title="메인으로 이동">
          <LogoImg src={logo} alt="튼튼" />
        </MobileHeaderLogoWrap>
      </Mobile>
    </>
  );
};

export default HeaderLogo;

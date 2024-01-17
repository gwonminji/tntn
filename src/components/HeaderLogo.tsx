import React from 'react';

import { Link } from 'react-router-dom';

import { Desktop, Tablet, Mobile } from '@styles/mediaQuery';
import styled from 'styled-components';

import logo from '@assets/images/logo.png';

const DesktopHeaderLogoWrap = styled.div`
  max-width: 282px;
  margin: 0 auto;
`;

const TabletHeaderLogoWrap = styled.div`
  max-width: 240px;
  margin: 0 auto;
`;

const MobileHeaderLogoWrap = styled.div`
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
        <Link to={'/'} title="메인으로 이동">
          <DesktopHeaderLogoWrap>
            <LogoImg src={logo} alt="튼튼" />
          </DesktopHeaderLogoWrap>
        </Link>
      </Desktop>
      <Tablet>
        <Link to={'/'} title="메인으로 이동">
          <TabletHeaderLogoWrap>
            <LogoImg src={logo} alt="튼튼" />
          </TabletHeaderLogoWrap>
        </Link>
      </Tablet>
      <Mobile>
        <Link to={'/'} title="메인으로 이동">
          <MobileHeaderLogoWrap>
            <LogoImg src={logo} alt="튼튼" />
          </MobileHeaderLogoWrap>
        </Link>
      </Mobile>
    </>
  );
};

export default HeaderLogo;

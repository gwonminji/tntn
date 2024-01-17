import React from 'react';

import styled from 'styled-components';
import HeaderLogo from '@components/HeaderLogo';
import Gnb from '@components/Gnb';

const HeaderWrap = styled.header`
  border-bottom: 1px solid ${({ theme }) => theme.colors.lightgray};
`;

const HeaderInner = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 200px;
  padding: 40px 0 0 0;
`;

const Header = () => {
  return (
    <HeaderWrap>
      <HeaderInner>
        <HeaderLogo />
        <Gnb />
      </HeaderInner>
    </HeaderWrap>
  );
};

export default Header;

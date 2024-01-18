import React, { useState } from 'react';

import { DeviceQuery } from '@styles/deviceQuery_back';
import { Desktop, Tablet, Mobile } from '@styles/mediaQuery';

import styled from 'styled-components';
import HeaderLogo from '@components/HeaderLogo';
import Gnb from '@components/Gnb';

import { FaBars } from 'react-icons/fa6';
import { FaXmark } from 'react-icons/fa6';

const HeaderWrap = styled.header`
  border-bottom: 1px solid ${({ theme }) => theme.colors.lightgray};
`;

const HeaderInner = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 200px;
  padding: 40px 0 0 0;

  @media ${({ theme }) => theme.mediaQuery.mobile} {
    position: relative;
    flex-direction: row;
    align-items: center;
    height: 100px;
    padding: 0 20px;
  }
`;

const Btn = styled.button`
  width: 40px;
  height: 40px;
  // border: 1px solid ${({ theme }) => theme.colors.gray};
  svg {
    width: 100%;
    height: 100%;
    color: ${({ theme }) => theme.colors.blue};
  }
`;

const Header = () => {
  const [gnb, setGnb] = useState(false);

  const onClickGnb = () => {
    setGnb(!gnb);
    console.log(gnb);
  };
  return (
    <HeaderWrap>
      <HeaderInner>
        <HeaderLogo />
        <Desktop>
          <Gnb />
        </Desktop>
        <Tablet>
          <Gnb />
        </Tablet>
        <Mobile>
          {gnb && <Gnb />}
          <Btn onClick={onClickGnb}>{gnb ? <FaXmark /> : <FaBars />}</Btn>
        </Mobile>
      </HeaderInner>
    </HeaderWrap>
  );
};

export default Header;

import React from 'react';

import styled from 'styled-components';

const GnbWrap = styled.nav`
  @media ${({ theme }) => theme.mediaQuery.mobile} {
    position: absolute;
    top: 100px;
    height: calc(100vh - 100px);
    left: 0;
    right: 0;
    z-index: 9999;
    background: ${({ theme }) => theme.colors.blue};
  }
`;

const GnbList = styled.ul`
  max-width: 1280px;
  margin: 0 auto;
  display: flex;

  @media ${({ theme }) => theme.mediaQuery.mobile} {
    max-width: 100%;
    flex-direction: column;
  }
`;

const GnbItem = styled.li`
  flex: 1;
  text-align: center;
`;

const GnbText = styled.a`
  display: inline-block;
  height: 42px;
  line-height: 42px;
  font-size: 18px;
  color: #333;
  font-weight: 600;
  letter-spacing: -0.6px;
  &:hover {
    color: ${({ theme }) => theme.colors.blue};
  }
  @media ${({ theme }) => theme.mediaQuery.tablet} {
    font-size: 16px;
  }
`;

const menu = [
  '체력인증 측정',
  '운동처방',
  '근골격계 운동',
  '생애주기별 표준운동',
  '목적별 루틴운동',
  '운동처방 가이드',
];
const Gnb = () => {
  return (
    <GnbWrap>
      <GnbList>
        {menu.map((d, i) => (
          <GnbItem key={i}>
            <GnbText href="#" title={d}>
              {d}
            </GnbText>
          </GnbItem>
        ))}
      </GnbList>
    </GnbWrap>
  );
};

export default Gnb;

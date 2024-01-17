import React from 'react';

import styled from 'styled-components';

const GnbWrap = styled.nav`
  // height: 100%;
  // flex: 1;
  // display: flex;
  // align-items: flex-end;
  ul {
    max-width: 1280px;
    margin: 0 auto;
    display: flex;
  }
  li {
    flex: 1;
    padding: 0 20px;
  }
  a {
    display: block;
    height: 42px;
    line-height: 42px;
    font-size: 20px;
    color: #333;
    font-weight: 600;
    text-align: center;
    // &:hover {
    //   ${({ theme }) => theme.colors.blue};
    // }
  }
`;

const menu = [
  '체력인증 측정방법',
  '운동처방',
  '근골격계 운동',
  '생애주기별 표준운동',
  '목적별 루틴운동',
  '운동처방 가이드',
];
const Gnb = () => {
  return (
    <GnbWrap>
      <ul>
        {menu.map((d, i) => (
          <li key={i}>
            <a href="#" title={d}>
              {d}
            </a>
          </li>
        ))}
      </ul>
    </GnbWrap>
  );
};

export default Gnb;

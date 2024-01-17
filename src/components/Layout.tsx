import React from 'react';

import styled from 'styled-components';

type WrapperProps = {
  children: React.ReactNode;
};
const LayoutWrap = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

const Layout = ({ children }: WrapperProps) => {
  return <LayoutWrap>{children}</LayoutWrap>;
};
export default Layout;

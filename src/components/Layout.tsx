import { WrapperProps } from '@model/component';

import styled from 'styled-components';

const LayoutWrap = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

const Layout = ({ children }: WrapperProps) => {
  return <LayoutWrap>{children}</LayoutWrap>;
};
export default Layout;

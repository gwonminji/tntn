import { WrapperProps } from '@model/component';
import styled from 'styled-components';

const LayoutWrap = styled.div`
  // min-height: 100vh;
  min-height: var(--vh-100);
  display: flex;
  flex-direction: column;
`;

const Layout = ({ children }: WrapperProps) => {
  return <LayoutWrap>{children}</LayoutWrap>;
};

export default Layout;

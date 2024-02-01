import { useLocation } from 'react-router-dom';
import { WrapperProps } from '@model/component';
import styled from 'styled-components';
import Container from '@components/Container';

const MainContentsWrap = styled.main`
  position: relative;
  flex: 1;
`;

const SubContentsWrap = styled.main`
  flex: 1;
  padding: 80px 0;
  @media ${({ theme }) => theme.mediaQuery.tablet} {
    padding: 40px 0;
  }
`;

const Contents = ({ children }: WrapperProps) => {
  const location = useLocation();
  const root = location.pathname === '/tntn/';
  console.log(location);

  return (
    <>
      {root ? (
        <MainContentsWrap>{children}</MainContentsWrap>
      ) : (
        <SubContentsWrap>
          <Container>{children}</Container>
        </SubContentsWrap>
      )}
    </>
  );
};

export default Contents;

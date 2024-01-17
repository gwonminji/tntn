import React from 'react';
import styled from 'styled-components';
import Container from '@components/Container';

type WrapperProps = {
  children: React.ReactNode;
};
const ContentsWrap = styled.main`
  flex: 1;
  padding: 80px 0;
`;
const Contents = ({ children }: WrapperProps) => {
  return (
    <ContentsWrap>
      <Container>{children}</Container>
    </ContentsWrap>
  );
};

export default Contents;

import React from 'react';

import { WrapperProps } from '@model/component';

import styled from 'styled-components';

import Container from '@components/Container';

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

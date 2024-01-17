import React from 'react';
import styled from 'styled-components';
import Container from '@components/Container';

const ContentsWrap = styled.main`
  flex: 1;
  padding: 80px 0;
`;
const Contents = () => {
  return (
    <ContentsWrap>
      <Container>내용</Container>
    </ContentsWrap>
  );
};

export default Contents;

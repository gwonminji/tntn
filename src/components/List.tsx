import React from 'react';
import { WrapperProps } from '@model/component';
import styled from 'styled-components';

const ListWrap = styled.ul`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 60px;
  @media ${({ theme }) => theme.mediaQuery.tablet} {
    grid-gap: 30px;
  }
  @media ${({ theme }) => theme.mediaQuery.mobile} {
    grid-template-columns: repeat(1, 1fr);
  }
`;
const List = ({ children }: WrapperProps) => {
  return <ListWrap>{children}</ListWrap>;
};

export default List;

import { WrapperProps } from '@model/component';
import styled from 'styled-components';

const ContainerWrap = styled.div`
  width: 100%;
  max-width: ${({ theme }) => theme.containerWidth.desktop};
  margin: 0 auto;
  padding: 0 ${({ theme }) => theme.containerPadding.desktop};

  @media ${({ theme }) => theme.mediaQuery.tablet} {
    max-width: ${({ theme }) => theme.containerWidth.tablet};
    padding: 0 ${({ theme }) => theme.containerPadding.tablet};
  }

  @media ${({ theme }) => theme.mediaQuery.mobile} {
    max-width: ${({ theme }) => theme.containerWidth.mobile};
    padding: 0 ${({ theme }) => theme.containerPadding.mobile};
  }
`;

const Container = ({ children }: WrapperProps) => {
  return <ContainerWrap>{children}</ContainerWrap>;
};

export default Container;

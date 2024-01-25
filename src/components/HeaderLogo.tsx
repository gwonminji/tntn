import { Link } from 'react-router-dom';
import styled from 'styled-components';
import logo from '@assets/images/logo.png';

const StyledLink = styled(Link)`
  width: 282px;
  margin: 0 auto;
  @media ${({ theme }) => theme.mediaQuery.tablet} {
    width: 240px;
  }
  @media ${({ theme }) => theme.mediaQuery.mobile} {
    width: 200px;
    margin: 0;
  }
`;

const LogoImg = styled.img`
  display: block;
  max-width: 100%;
  height: auto;
`;

const HeaderLogo = () => {
  return (
    <StyledLink to={'/tntn'} title="메인으로 이동">
      <LogoImg src={logo} alt="튼튼" />
    </StyledLink>
  );
};

export default HeaderLogo;

import styled from 'styled-components';
import Container from '@components/Container';

const FooterWrap = styled.footer`
  display: flex;
  align-items: center;
  height: 60px;
  border-top: 1px solid ${({ theme }) => theme.colors.lightgray};
  @media ${({ theme }) => theme.mediaQuery.mobile} {
    height: 40px;
  }
  p {
    font-size: 14px;
    color: ${({ theme }) => theme.colors.black};
    font-weight: 300;
    text-align: center;
    @media ${({ theme }) => theme.mediaQuery.mobile} {
      font-size: 12px;
    }
  }
`;

const Footer = () => {
  return (
    <FooterWrap>
      <Container>
        <p>&copy;copyright all right reserved.</p>
      </Container>
    </FooterWrap>
  );
};

export default Footer;

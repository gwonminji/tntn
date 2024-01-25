import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';

const GnbWrap = styled.nav`
  @media ${({ theme }) => theme.mediaQuery.mobile} {
    display: none;
    padding: 80px;
    position: absolute;
    top: 100px;
    // height: calc(100vh - 100px);
    height: calc(var(--vh-100) - 100px);
    left: 0;
    right: 0;
    z-index: 9999;
    background: ${({ theme }) => theme.colors.lightgray};
    &.show {
      display: block;
    }
    &.none {
      display: none;
    }
  }
`;

const GnbList = styled.ul`
  max-width: 1280px;
  margin: 0 auto;
  display: flex;
  @media ${({ theme }) => theme.mediaQuery.mobile} {
    max-width: 100%;
    flex-direction: column;
  }
`;

const GnbItem = styled.li`
  flex: 1;
  text-align: center;
`;

const GnbStyledLink = styled(Link)`
  display: inline-block;
  height: 42px;
  line-height: 42px;
  font-size: 18px;
  color: #333;
  font-weight: 600;
  letter-spacing: -0.6px;
  &:hover {
    color: ${({ theme }) => theme.colors.blue};
  }
  &.active {
    color: ${({ theme }) => theme.colors.blue};
  }
  @media ${({ theme }) => theme.mediaQuery.tablet} {
    font-size: 16px;
  }
  @media ${({ theme }) => theme.mediaQuery.mobile} {
    height: 52px;
    line-height: 52px;
    font-size: 20px;
  }
`;

type Props = {
  show: boolean;
  onClickGnb(): void;
};

type Menu = {
  id: number;
  to: string;
  name: string;
  active: boolean;
  address: string;
}[];

const Gnb = ({ show, onClickGnb }: Props) => {
  const menus: Menu = [
    {
      id: 1,
      to: 'videoList',
      name: '체력인증 측정',
      active: false,
      address: 'TODZ_VDO_FTNS_CERT_I',
    },
    {
      id: 2,
      to: 'videoList',
      name: '운동처방',
      active: false,
      address: 'TODZ_VDO_TRNG_VIDEO_I',
    },
    {
      id: 3,
      to: 'videoList',
      name: '근골격계 운동',
      active: false,
      address: 'TODZ_VDO_MSCL_TRNG_I',
    },
    {
      id: 4,
      to: 'videoList',
      name: '생애주기별 표준운동',
      active: false,
      address: 'TODZ_VDO_STD_FTNS_I',
    },
    {
      id: 5,
      to: 'videoList',
      name: '목적별 루틴운동',
      active: false,
      address: 'TODZ_VDO_ROUTINE_I',
    },
    {
      id: 6,
      to: 'videoList',
      name: '운동처방 가이드',
      active: false,
      address: 'TODZ_VDO_TRNG_GUIDE_I',
    },
  ];

  const [gnb, setGnb] = useState<Menu | null>(null);

  useEffect(() => {
    setGnb(menus);
  }, []);

  const location = useLocation();
  const key = location.key;
  const pathname = location.pathname;
  const search = location.search;

  useEffect(() => {
    if (gnb) {
      setGnb(
        gnb.map((menu) =>
          pathname === `/${menu.to}` && search === `?menuId=${menu.id}`
            ? { ...menu, active: true }
            : { ...menu, active: false },
        ),
      );
    }
  }, [key]);

  return (
    <GnbWrap className={show ? 'show' : ''}>
      <GnbList>
        {gnb &&
          gnb.map((menu) => (
            <GnbItem key={menu.id}>
              <GnbStyledLink
                to={`${menu.to}?menuId=${menu.id}`}
                state={{ path: menu.address, page: 1, keyword: undefined }}
                title={menu.name}
                className={menu.active ? 'active' : ''}
                onClick={onClickGnb}
              >
                {menu.name}
              </GnbStyledLink>
            </GnbItem>
          ))}
      </GnbList>
    </GnbWrap>
  );
};

export default Gnb;

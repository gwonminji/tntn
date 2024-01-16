import { useMediaQuery } from 'react-responsive';

const Desktop = ({ children }: any) => {
  const isDesktop = useMediaQuery({ minWidth: 1024 });
  return <>{isDesktop && children}</>;
};

const Tablet = ({ children }: any) => {
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1023 });
  return <>{isTablet && children}</>;
};

const Mobile = ({ children }: any) => {
  const isMobile = useMediaQuery({ maxWidth: 767 });
  return <>{isMobile && children}</>;
};

export { Desktop, Tablet, Mobile };

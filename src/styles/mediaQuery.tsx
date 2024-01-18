import { useMediaQuery } from 'react-responsive';

type WrapperProps = {
  children: React.ReactNode;
};

const Desktop = ({ children }: WrapperProps) => {
  const isDesktop = useMediaQuery({ minWidth: 1024 });
  return <>{isDesktop && children}</>;
};

const Tablet = ({ children }: WrapperProps) => {
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1023 });
  return <>{isTablet && children}</>;
};

const Mobile = ({ children }: WrapperProps) => {
  const isMobile = useMediaQuery({ maxWidth: 767 });
  return <>{isMobile && children}</>;
};

export { Desktop, Tablet, Mobile };

// interface Props {
//   [key: string]: string;
// }

const colors = {
  blue: '#0047AB',
  lightblue: '#F0F8FF',
  white: '#fff',
  whitesmoke: '#f4f4f4',
  babypowder: '#FEFEFA',
  black: '#222',
  gray: '#999',
  lightgray: '#E5E4E2',
};

const deviceSizes = {
  tablet: 1023,
  mobile: 767,
};

const mediaQuery = {
  tablet: `(max-width: ${deviceSizes.tablet}px)`,
  mobile: `(max-width: ${deviceSizes.mobile}px)`,
};

const containerWidth = {
  desktop: '1280px',
  tablet: '100%',
  mobile: '100%',
};

const containerPadding = {
  desktop: '40px',
  tablet: '40px',
  mobile: '20px',
};

const theme = {
  colors,
  mediaQuery,
  containerWidth,
  containerPadding,
};

export default theme;

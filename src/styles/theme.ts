export interface Props {
  [key: string]: string;
}

const colors: Props = {
  blue: '#0047AB',
  lightblue: '#F0F8FF',
  white: '#fff',
  whitesmoke: '#f4f4f4',
  babypowder: '#FEFEFA',
  black: '#222',
  gray: '#999',
  lightgray: '#E5E4E2',
};

const containerWidth = {
  desktop: '1280px',
  tablet: '100%',
  mobile: '100%',
};

const tabletFontSize: Props = {
  title: '48px',
  subtitle: '32px',
  text: '24px',
};

const theme = {
  colors,
  containerWidth,
  tabletFontSize,
};

export default theme;

export interface Props {
  [key: string]: string;
}

const colors: Props = {
  black: '#000000',
  grey: '#999999',
  red: '#ff0000',
};

const tabletFontSize: Props = {
  title: '48px',
  subtitle: '32px',
  text: '24px',
};

const theme = {
  colors,
  tabletFontSize,
};

export default theme;

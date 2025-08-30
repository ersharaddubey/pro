// theme.js
// Centralized theme configuration for OTT-grade UI

const palette = {
  bg: '#000',
  text: '#fff',
  textDim: '#aaa',
  accent: '#FF6F00',
  border: '#333',
  card: '#222',
  cardAlt: '#1A1A1A',
  accentAlt: '#FF7A00',
  textDark: '#222',
  danger: '#FF0000',
};

const spacing = {
  xs: 4,
  sm: 8,
  md: 12,
  lg: 16,
  xl: 24,
  xxl: 32,
};

const typography = {
  small: 12,
  body: 14,
  title: 16,
  h1: 20,
  h2: 18,
  weightSemi: '600',
  weightBold: '700',
};

const radius = {
  xs: 2,
  md: 8,
  lg: 12,
  pill: 999,
};

// Export a single theme object
export const theme = {
  palette,
  spacing,
  typography,
  radius,
};

export default theme;

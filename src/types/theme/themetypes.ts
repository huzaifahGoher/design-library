export interface ThemeTypes {
  colors: {
    primary: string;
    primaryHover: string;
    secondary: string;
    secondaryHover: string;
    accent: string;
    accentHover: string;
    background: string;
    surface: string;
    text: string;
    textMuted: string;
    border: string;
    error: string;
    success: string;
  };
  spacing: {
    xs: string;
    sm: string;
    md: string;
    lg: string;
    xl: string;
  };
  borderRadius: {
    sm: string;
    md: string;
    lg: string;
    full: string;
  };
  fontSizes: {
    sm: string;
    md: string;
    lg: string;
  };
  fontWeights: {
    normal: number;
    medium: number;
    bold: number;
  };
  transitions: {
    fast: string;
    normal: string;
  };
}

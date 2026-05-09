import { ThemeTypes } from "../types/theme/themetypes";

export const defaultLightTheme: ThemeTypes = {
  colors: {
    primary: "#dfdfdf",
    secondary: "#f1f5f9",
    background: "#ffffff",
    text: "#171717",
    border: "#2a2a2b",
  },
  spacing: {
    xs: "4px",
    sm: "8px",
    md: "16px",
    lg: "24px",
    xl: "32px",
  },
  borderRadius: {
    sm: "4px",
    md: "8px",
    lg: "12px",
  },
  fontSizes: {
    sm: "12px",
    md: "14px",
    lg: "18px",
  },
};

export const defaultDarkTheme: ThemeTypes = {
  colors: {
    primary: "#222222",
    secondary: "#5a5a5a",
    background: "#0a0a0a",
    text: "#ededed",
    border: "#c4c1c1",
  },
  spacing: {
    xs: "4px",
    sm: "8px",
    md: "16px",
    lg: "24px",
    xl: "32px",
  },
  borderRadius: {
    sm: "4px",
    md: "8px",
    lg: "12px",
  },
  fontSizes: {
    sm: "12px",
    md: "14px",
    lg: "18px",
  },
};

export const defaultTheme = defaultLightTheme;

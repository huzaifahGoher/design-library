import { ThemeTypes } from "../types/theme/themetypes";

const sharedSpacing = {
  xs: "4px",
  sm: "8px",
  md: "16px",
  lg: "24px",
  xl: "32px",
};

const sharedBorderRadius = {
  sm: "6px",
  md: "10px",
  lg: "16px",
  full: "9999px",
};

const sharedFontSizes = {
  sm: "12px",
  md: "14px",
  lg: "18px",
};

const sharedFontWeights = {
  normal: 400,
  medium: 500,
  bold: 700,
};

const sharedTransitions = {
  fast: "all 0.12s ease",
  normal: "all 0.22s ease",
};

export const defaultLightTheme: ThemeTypes = {
  colors: {
    primary: "#6366f1",
    primaryHover: "#4f46e5",
    secondary: "#f1f5f9",
    secondaryHover: "#e2e8f0",
    accent: "#f59e0b",
    accentHover: "#d97706",
    background: "#ffffff",
    surface: "#f8fafc",
    text: "#0f172a",
    textMuted: "#64748b",
    border: "#e2e8f0",
    error: "#ef4444",
    success: "#22c55e",
  },
  spacing: sharedSpacing,
  borderRadius: sharedBorderRadius,
  fontSizes: sharedFontSizes,
  fontWeights: sharedFontWeights,
  transitions: sharedTransitions,
};

export const defaultDarkTheme: ThemeTypes = {
  colors: {
    primary: "#818cf8",
    primaryHover: "#6366f1",
    secondary: "#1e293b",
    secondaryHover: "#334155",
    accent: "#fbbf24",
    accentHover: "#f59e0b",
    background: "#0f172a",
    surface: "#1e293b",
    text: "#f1f5f9",
    textMuted: "#94a3b8",
    border: "#334155",
    error: "#f87171",
    success: "#4ade80",
  },
  spacing: sharedSpacing,
  borderRadius: sharedBorderRadius,
  fontSizes: sharedFontSizes,
  fontWeights: sharedFontWeights,
  transitions: sharedTransitions,
};

export const defaultTheme = defaultLightTheme;

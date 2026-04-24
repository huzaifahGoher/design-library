import React, { createContext, useContext, useMemo } from "react";
import { ThemeTypes } from "../types/theme/themetypes";
import { defaultDarkTheme, defaultLightTheme } from "./defaulttheme";
import { useColorScheme, ColorScheme } from "../hooks/useColorScheme";

const ThemeContext = createContext<ThemeTypes & { colorScheme: ColorScheme }>(
  { ...defaultLightTheme, colorScheme: "light" }
);

export const useTheme = () => useContext(ThemeContext);

interface ThemeProviderProps {
  lightTheme?: Partial<ThemeTypes>;
  darkTheme?: Partial<ThemeTypes>;
  themeType?: "light" | "dark";
  children: React.ReactNode;
}

function deepMerge(base: any, override: any): any {
  const result = { ...base };
  for (const key in override) {
    if (override[key] && typeof override[key] === "object" && !Array.isArray(override[key])) {
      result[key] = deepMerge(base[key] || {}, override[key]);
    } else {
      result[key] = override[key];
    }
  }
  return result;
}

export const ThemeProvider = ({ lightTheme, darkTheme, themeType = "dark", children }: ThemeProviderProps) => {
  const colorScheme = themeType;
  const base = colorScheme === "dark" ? defaultDarkTheme : defaultLightTheme;
  const override = colorScheme === "dark" ? darkTheme : lightTheme;
  const merged = useMemo(
    () => ({ ...(override ? deepMerge(base, override) : base), colorScheme }),
    [base, override, colorScheme]
  );

  return <ThemeContext.Provider value={merged}>{children}</ThemeContext.Provider>;
};

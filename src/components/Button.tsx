import React, { useState } from "react";
import { useTheme } from "../theme/ThemeProvider";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "accent" | "ghost" | "danger";
  size?: "sm" | "md" | "lg";
}

export const Button = ({ variant = "primary", size = "md", children, style, disabled, ...props }: ButtonProps) => {
  const theme = useTheme();
  const [hovering, setHovering] = useState(false);

  const variants: Record<string, { bg: string; fg: string; hbg: string; border: string }> = {
    primary: {
      bg: theme.colors.primary,
      fg: "#ffffff",
      hbg: theme.colors.primaryHover,
      border: "transparent",
    },
    secondary: {
      bg: theme.colors.secondary,
      fg: theme.colors.text,
      hbg: theme.colors.secondaryHover,
      border: theme.colors.border,
    },
    accent: {
      bg: theme.colors.accent,
      fg: "#ffffff",
      hbg: theme.colors.accentHover,
      border: "transparent",
    },
    ghost: {
      bg: "transparent",
      fg: theme.colors.primary,
      hbg: theme.colors.secondary,
      border: theme.colors.primary,
    },
    danger: {
      bg: theme.colors.error,
      fg: "#ffffff",
      hbg: "#dc2626",
      border: "transparent",
    },
  };

  const sizes = {
    sm: { padding: `${theme.spacing.xs} ${theme.spacing.sm}`, fontSize: theme.fontSizes.sm },
    md: { padding: `${theme.spacing.sm} ${theme.spacing.md}`, fontSize: theme.fontSizes.md },
    lg: { padding: `${theme.spacing.md} ${theme.spacing.lg}`, fontSize: theme.fontSizes.lg },
  };

  const { bg, fg, hbg, border } = variants[variant];
  const { padding, fontSize } = sizes[size];

  return (
    <button
      disabled={disabled}
      onMouseEnter={() => setHovering(true)}
      onMouseLeave={() => setHovering(false)}
      style={{
        background: hovering && !disabled ? hbg : bg,
        color: fg,
        padding,
        border: `1px solid ${border}`,
        borderRadius: theme.borderRadius.md,
        fontSize,
        fontWeight: theme.fontWeights.medium,
        cursor: disabled ? "not-allowed" : "pointer",
        opacity: disabled ? 0.5 : 1,
        transition: theme.transitions.fast,
        letterSpacing: "0.01em",
        ...style,
      }}
      {...props}
    >
      {children}
    </button>
  );
};

import React from "react";
import { useTheme } from "../theme/ThemeProvider";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary";
}

export const Button = ({ variant = "primary", children, style, ...props }: ButtonProps) => {
  const theme = useTheme();

  const variants = {
    primary: { bg: theme.colors.primary, fg: theme.colors.primary },
    secondary: { bg: theme.colors.secondary, fg: theme.colors.secondary },
  };

  const { bg, fg } = variants[variant];

  return (
    <button
      style={{
        background: bg,
        color: fg,
        padding: `${theme.spacing.sm} ${theme.spacing.xs}`,
        border: `1px solid ${theme.colors.border}`,
        borderRadius: theme.borderRadius.sm,
        fontSize: theme.fontSizes.md,
        cursor: "pointer",
        ...style,
      }}
      {...props}
    >
      {children}
    </button>
  );
};

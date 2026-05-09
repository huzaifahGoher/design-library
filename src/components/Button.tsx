import React, { useState } from "react";
import { useTheme } from "../theme/ThemeProvider";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary";
}

export const Button = ({ variant = "primary", children, style, ...props }: ButtonProps) => {
  const theme = useTheme();
  const [hovering, setHovering] = useState(false);

  const variants = {
    primary: { bg: theme.colors.primary, fg: theme.colors.text, hbg: theme.colors.secondary },
    secondary: { bg: theme.colors.secondary, fg: theme.colors.text, hbg: theme.colors.primary },
  };

  const { bg, fg, hbg } = variants[variant];

  return (
    <button
      onMouseEnter={()=>{setHovering(true)}}
      onMouseLeave={()=>{setHovering(false)}}
      style={{
        background: hovering ? hbg : bg,
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

import React, { useState } from "react";
import { useTheme } from "../theme/ThemeProvider";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  active?: boolean;
}

export const Button = ({ children, style, active = false, ...props }: ButtonProps) => {
  const theme = useTheme();
  const [hovering, setHovering] = useState(false);

  return (
    <button
      onMouseEnter={()=>{setHovering(true)}}
      onMouseLeave={()=>{setHovering(false)}}
      style={{
        background: active ? theme.colors.bgChecked : hovering ? theme.colors.bgHover : theme.colors.bg,
        color: theme.colors.text,
        padding: `${theme.spacing.sm} ${theme.spacing.xs}`,
        border: `1px solid ${active ? theme.colors.borderChecked : theme.colors.border}`,
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

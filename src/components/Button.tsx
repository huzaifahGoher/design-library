import React, { forwardRef, useState } from "react";
import { useTheme } from "../theme/ThemeProvider";
import { ThemeTypes } from "../types/theme/themetypes";

export type ButtonVariant = "default" | "subtle" | "filled" | "danger";

interface VariantStyleResult {
  background: string;
  color: string;
  borderColor: string;
}

export function getVariantStyles(
  variant: ButtonVariant,
  theme: ThemeTypes,
  hovering: boolean,
  active: boolean
): VariantStyleResult {
  switch (variant) {
    case "default":
      return {
        background: active
          ? theme.colors.bgChecked
          : hovering
            ? theme.colors.bgHover
            : theme.colors.bg,
        color: theme.colors.text,
        borderColor: active ? theme.colors.borderChecked : theme.colors.border,
      };

    case "subtle":
      return {
        background: hovering
          ? theme.colors.bgCheckedHover
          : theme.colors.bgChecked,
        color: theme.colors.actionText,
        borderColor: theme.colors.borderChecked,
      };

    case "filled":
      return {
        background: hovering
          ? theme.colors.actionPrimaryHover
          : theme.colors.actionPrimary,
        color: theme.colors.textOnAccent,
        borderColor: hovering
          ? theme.colors.actionPrimaryHover
          : theme.colors.actionPrimary,
      };

    case "danger":
      return {
        background: hovering
          ? theme.colors.actionDangerHover
          : theme.colors.bgDanger,
        color: hovering
          ? theme.colors.textOnDanger
          : theme.colors.textDanger,
        borderColor: theme.colors.borderDanger,
      };
  }
}

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  active?: boolean;
  variant?: ButtonVariant;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ children, style, active = false, variant = "default", ...props }, ref) => {
    const theme = useTheme();
    const [hovering, setHovering] = useState(false);

    const variantStyles = getVariantStyles(variant, theme, hovering, active);

    return (
      <button
        onMouseEnter={() => setHovering(true)}
        onMouseLeave={() => setHovering(false)}
        style={{
          background: variantStyles.background,
          color: variantStyles.color,
          padding: `${theme.spacing.sm} ${theme.spacing.xs}`,
          border: `1px solid ${variantStyles.borderColor}`,
          borderRadius: theme.borderRadius.sm,
          fontSize: theme.fontSizes.md,
          cursor: "pointer",
          ...style,
        }}
        ref={ref}
        {...props}
      >
        {children}
      </button>
    );
  }
);

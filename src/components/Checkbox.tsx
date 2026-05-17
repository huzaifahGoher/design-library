import React, { forwardRef, useState } from "react";
import { useTheme } from "../theme/ThemeProvider";

export type CheckboxVariant = "highlighted" | "minimal";

interface CheckboxProps {
  checked: boolean;
  onChange: (checked: boolean) => void;
  label?: string;
  description?: string;
  variant?: CheckboxVariant;
  disabled?: boolean;
  style?: React.CSSProperties;
}

export const Checkbox = forwardRef<HTMLDivElement, CheckboxProps>(
  (
    {
      checked,
      onChange,
      label,
      description,
      variant = "highlighted",
      disabled = false,
      style,
    },
    ref
  ) => {
    const theme = useTheme();
    const [hovering, setHovering] = useState(false);

    const isHighlighted = variant === "highlighted";

    // Container background based on variant
    const containerBg = disabled
      ? theme.colors.bgRaised
      : isHighlighted
      ? checked
        ? theme.colors.bgChecked
        : theme.colors.bgSurface
      : "transparent";

    const containerBorder = disabled
      ? theme.colors.border
      : isHighlighted
      ? checked
        ? theme.colors.borderChecked
        : theme.colors.border
      : "none";

    // Checkbox box colors
    const boxBorder = checked
      ? theme.colors.checkboxChecked
      : theme.colors.checkboxUnchecked;
    const boxBg = checked ? theme.colors.checkboxChecked : "transparent";

    return (
      <div
        ref={ref}
        onClick={() => {
          if (!disabled) onChange(!checked);
        }}
        onMouseEnter={() => setHovering(true)}
        onMouseLeave={() => setHovering(false)}
        role="checkbox"
        aria-checked={checked}
        aria-disabled={disabled}
        aria-label={label}
        tabIndex={disabled ? -1 : 0}
        onKeyDown={(e) => {
          if ((e.key === " " || e.key === "Enter") && !disabled) {
            e.preventDefault();
            onChange(!checked);
          }
        }}
        style={{
          display: "flex",
          alignItems: "center",
          gap: theme.spacing.sm,
          padding: isHighlighted
            ? `${theme.spacing.sm} ${theme.spacing.md}`
            : theme.spacing.xs,
          borderRadius: theme.borderRadius.md,
          cursor: disabled ? "not-allowed" : "pointer",
          background: hovering && !disabled && isHighlighted
            ? checked
              ? theme.colors.bgCheckedHover
              : theme.colors.bgHover
            : containerBg,
          border: isHighlighted ? `1px solid ${containerBorder}` : "none",
          transition: "all 0.15s ease",
          opacity: disabled ? 0.6 : 1,
          ...style,
        }}
      >
        {/* Checkbox box */}
        <div
          style={{
            width: 18,
            height: 18,
            borderRadius: theme.borderRadius.sm,
            border: `2px solid ${boxBorder}`,
            background: boxBg,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexShrink: 0,
            transition: "all 0.15s",
          }}
        >
          {checked && (
            <svg width="11" height="9" viewBox="0 0 11 9" fill="none">
              <path
                d="M1 4L4 7L10 1"
                stroke={theme.colors.checkboxIcon}
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          )}
        </div>

        {/* Label and description */}
        {(label || description) && (
          <div style={{ flex: 1 }}>
            {label && (
              <div
                style={{
                  fontSize: theme.fontSizes.md,
                  fontWeight: 500,
                  color: disabled
                    ? theme.colors.textFaint
                    : checked && isHighlighted
                    ? theme.colors.textAccent
                    : theme.colors.text,
                  transition: "color 0.15s",
                }}
              >
                {label}
              </div>
            )}
            {description && (
              <div
                style={{
                  fontSize: theme.fontSizes.sm,
                  color: theme.colors.textMuted,
                  marginTop: "2px",
                  lineHeight: 1.4,
                }}
              >
                {description}
              </div>
            )}
          </div>
        )}
      </div>
    );
  }
);

import React, { forwardRef, useState, useRef, useCallback } from "react";
import { useTheme } from "../theme/ThemeProvider";

interface SliderProps {
  value: number;
  onChange: (value: number) => void;
  min?: number;
  max?: number;
  step?: number;
  label?: string;
  showValue?: boolean;
  formatValue?: (value: number) => string;
  disabled?: boolean;
  style?: React.CSSProperties;
}

export const Slider = forwardRef<HTMLDivElement, SliderProps>(
  (
    {
      value,
      onChange,
      min = 0,
      max = 100,
      step = 1,
      label,
      showValue = true,
      formatValue,
      disabled = false,
      style,
    },
    ref
  ) => {
    const theme = useTheme();
    const [hovering, setHovering] = useState(false);
    const [dragging, setDragging] = useState(false);
    const trackRef = useRef<HTMLDivElement>(null);

    // Calculate fill percentage
    const percentage = ((value - min) / (max - min)) * 100;

    // Display value
    const displayValue = formatValue ? formatValue(value) : String(value);

    // Handle click/drag on track
    const updateValue = useCallback(
      (clientX: number) => {
        const track = trackRef.current;
        if (!track || disabled) return;
        const rect = track.getBoundingClientRect();
        const ratio = Math.max(0, Math.min(1, (clientX - rect.left) / rect.width));
        const raw = min + ratio * (max - min);
        const stepped = Math.round(raw / step) * step;
        const clamped = Math.max(min, Math.min(max, stepped));
        onChange(clamped);
      },
      [min, max, step, disabled, onChange]
    );

    const handleMouseDown = (e: React.MouseEvent) => {
      if (disabled) return;
      setDragging(true);
      updateValue(e.clientX);

      const handleMouseMove = (ev: MouseEvent) => updateValue(ev.clientX);
      const handleMouseUp = () => {
        setDragging(false);
        document.removeEventListener("mousemove", handleMouseMove);
        document.removeEventListener("mouseup", handleMouseUp);
      };

      document.addEventListener("mousemove", handleMouseMove);
      document.addEventListener("mouseup", handleMouseUp);
    };

    const thumbColor = disabled
      ? theme.colors.textFaint
      : dragging
        ? theme.colors.actionPrimaryHover
        : hovering
          ? theme.colors.actionPrimaryHover
          : theme.colors.actionPrimary;

    const fillColor = disabled
      ? theme.colors.textFaint
      : theme.colors.actionPrimary;

    const trackBgColor = disabled
      ? theme.colors.bgRaised
      : theme.colors.progressBg;

    return (
      <div
        ref={ref}
        onMouseEnter={() => setHovering(true)}
        onMouseLeave={() => setHovering(false)}
        style={{
          opacity: disabled ? 0.6 : 1,
          cursor: disabled ? "not-allowed" : "default",
          ...style,
        }}
      >
        {/* Label row */}
        {(label || showValue) && (
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginBottom: theme.spacing.xs,
            }}
          >
            {label && (
              <span
                style={{
                  fontSize: theme.fontSizes.sm,
                  fontWeight: 500,
                  color: disabled ? theme.colors.textFaint : theme.colors.text,
                }}
              >
                {label}
              </span>
            )}
            {showValue && (
              <span
                style={{
                  fontSize: theme.fontSizes.sm,
                  color: disabled
                    ? theme.colors.textFaint
                    : theme.colors.textMuted,
                  fontVariantNumeric: "tabular-nums",
                }}
              >
                {displayValue}
              </span>
            )}
          </div>
        )}

        {/* Track */}
        <div
          ref={trackRef}
          onMouseDown={handleMouseDown}
          style={{
            position: "relative",
            height: "20px",
            display: "flex",
            alignItems: "center",
            cursor: disabled ? "not-allowed" : "pointer",
          }}
        >
          {/* Track background */}
          <div
            style={{
              position: "absolute",
              left: 0,
              right: 0,
              height: "4px",
              borderRadius: "2px",
              background: trackBgColor,
            }}
          />

          {/* Track fill */}
          <div
            style={{
              position: "absolute",
              left: 0,
              width: `${percentage}%`,
              height: "4px",
              borderRadius: "2px",
              background: fillColor,
            }}
          />

          {/* Thumb */}
          <div
            style={{
              position: "absolute",
              left: `${percentage}%`,
              width: "14px",
              height: "14px",
              borderRadius: "50%",
              background: thumbColor,
              transform: "translateX(-50%)",
              transition: dragging ? "none" : "box-shadow 0.15s ease",
              boxShadow:
                hovering || dragging
                  ? `0 0 0 4px ${theme.colors.actionPrimary}33`
                  : "none",
            }}
          />
        </div>
      </div>
    );
  }
);

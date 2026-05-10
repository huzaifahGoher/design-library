import { forwardRef, useEffect, useRef, useState } from "react";
import { useTheme } from "../theme/ThemeProvider";
import { Button } from "./Button";
import { DownArrow } from "../assets/DownArrow";

export const Select = forwardRef<
  HTMLButtonElement,
  {
    onChange: (value: string) => void;
    options: any[];
    defaultValue: any;
    startIcon?: React.ReactNode;
    endIcon?: React.ReactNode;
  }
>(({ onChange, options, defaultValue, startIcon, endIcon }, ref) => {
  const buttonRef = useRef<HTMLButtonElement | null>(null);
  const menuRef = useRef<HTMLDivElement | null>(null);
  const theme = useTheme();
  const [selectedValue, setSelectedValue] = useState(defaultValue);
  const [open, setOpen] = useState(false);
  const getTop = (): number => {
    let top = 0;
    if (buttonRef.current)
      top =
        buttonRef?.current?.getBoundingClientRect().top +
        buttonRef.current.getBoundingClientRect().height +
        parseFloat(theme.spacing.xs);

    return top;
  };

  const getLeft = (): number => {
    let left = 0;
    if (buttonRef.current)
      left = buttonRef?.current?.getBoundingClientRect().left;
    return left;
  };

  useEffect(() => {
    const handleMouseDown = (event: MouseEvent) => {
      const target = event.target as Node;
      if (
        buttonRef.current &&
        !buttonRef.current.contains(target) &&
        menuRef.current &&
        !menuRef.current.contains(target)
      ) {
        setOpen(false);
      }
    };

    window.addEventListener("mousedown", handleMouseDown);
    return () => {
      window.removeEventListener("mousedown", handleMouseDown);
    };
  });

  const onOptionChange = (option: any) => {
    setSelectedValue(option);
    onChange(option.value);
    setOpen(false);
  };

  return (
    <>
      <Button
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          minWidth: "100px",
        }}
        onClick={() => {
          setOpen(!open);
        }}
        ref={(el) => {
          buttonRef.current = el;
          if (typeof ref === "function") ref(el);
          else if (ref) ref.current = el;
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: theme.spacing.sm,
          }}
        >
          {startIcon} {selectedValue.label}
        </div>
        {endIcon || <DownArrow />}
      </Button>
      {open && (
        <div
          ref={menuRef}
          style={{
            position: "fixed",
            top: `${getTop()}px`,
            left: `${getLeft()}px`,
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
            backgroundColor: theme.colors.bg,
            color: theme.colors.text,
            border: `1px solid ${theme.colors.border}`,
            borderRadius: theme.borderRadius.md,
          }}
        >
          {options.map((option: any, index: number) => {
            return (
              <div
                key={`${index}-${option.label}`}
                style={{
                  display: "flex",
                  gap: theme.spacing.sm,
                  padding: theme.spacing.sm,
                  cursor: "pointer",
                }}
                onClick={() => {
                  onOptionChange(option);
                }}
              >
                {option.icon} {option.label}
              </div>
            );
          })}
        </div>
      )}
    </>
  );
});

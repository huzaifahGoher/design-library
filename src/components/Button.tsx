import React, { useState } from "react";

export const Button = ({
  className,
  onClick,
  image,
  title,
  styles,
}: {
  className?: string;
  onClick: () => void;
  image?: string;
  title?: string;
  styles?: any;
}) => {
  const [hovering, setHovering] = useState(false);
  return (
    <button
      className={className || ""}
      onClick={onClick}
      onMouseEnter={() => {
        setHovering(true);
      }}
      onMouseLeave={() => {
        setHovering(false);
      }}
      style={{
        ...styles,
        padding: "3px",
        border: "1px solid black",
        borderRadius: "5px",
        cursor: "pointer",
        backgroundColor: hovering ? "grey" : "",
      }}
    >
      {image && <img src={image} alt={title || ""} />}
      {title && <span>{title}</span>}
    </button>
  );
};

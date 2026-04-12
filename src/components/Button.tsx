import type React from "react";

interface buttonProps {
  title: string;
  variant: string;
  className?: string; 
}

export const Button: React.FC<buttonProps> = ({
  title,
  variant,
  className = "",
}) => {
  const primary = `
  bg-red-900 text-white p-4 rounded-lg
  hover:gb-red800 hover:shadow-lg hover:shadow-red-300
  transition-all duration-300`;
  const outline = `
  border border-red-900 text-red-900 p-4 rounded-lg
  hover:bg-red-900 hover:text-white
  transition-all duration-300
  `;

  return (
    <button
      className={`${variant == "primary" ? primary : outline} ${className}`}
    >
      {title}
    </button>
  );
};

export default Button;
import React from "react";

interface ButtonProps {
  children: React.ReactNode;
  className?: string;
  onClick?: React.MouseEventHandler | undefined;
}

const Button: React.FC<ButtonProps> = ({
  children = "",
  className = "",
  onClick,
}) => {
  return (
    <button
      className={`bg-accent py-3.5 px-9 hover:bg-white duration-200 outline-none border-0 text-base font-medium text-primary hover:text-secondary rounded-full ${className} `}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;

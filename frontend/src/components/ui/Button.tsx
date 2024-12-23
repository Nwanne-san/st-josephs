import React, { ReactNode } from "react";
import { TailSpin } from "react-loader-spinner";

// Define types for the component props
interface ButtonProps {
  children?: ReactNode;
  child?: ReactNode;
  disabled?: boolean;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  loading?: boolean;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({
  child,
  children,
  disabled,
  onClick,
  loading,
  className = "",
}) => {
  return (
    <button
      className={`px-6 py-[11px] bg-secondary hover:bg-secondary-hover text-white rounded-md text-base font-semibold duration-150 disabled:bg-gray-400 ${className} ${
        disabled || loading
      }`}
      onClick={onClick}
      disabled={disabled || loading}
    >
      {loading ? (
        <div className="flex justify-center items-center gap-2 duration-500">
          {child}
          <TailSpin
            visible={true}
            height="24"
            width="24"
            color="#fff"
            ariaLabel="tail-spin-loading"
            radius="2"
          />
        </div>
      ) : (
        children
      )}
    </button>
  );
};

export default Button;

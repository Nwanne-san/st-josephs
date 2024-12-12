import React from "react";

interface WrapperProps {
  children: React.ReactNode;
  className?: string;
  disablePadding?: boolean; // New prop to control padding
  style?: React.CSSProperties | undefined;
  id?: string;
}

const Wrapper: React.FC<WrapperProps> = ({
  children,
  className = "",
  disablePadding = false,
  style,
  id,
}) => {
  return (
    <section
      className={` w-full ${
        disablePadding
          ? "py-2 px-3 sm:px-10 xl:px-16"
          : " px-3 xl:px-24 sm:px-14" // Conditionally add padding
      } ${className}`}
      style={style}
      id={id}
    >
      {children}
    </section>
  );
};

export default Wrapper;

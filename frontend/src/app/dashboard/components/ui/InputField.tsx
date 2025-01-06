import React from "react";

const InputField = ({
  label,
  value,
  onChange,
  type = "text",
  required = true,
}: {
  label: string;
  value: string | number;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  type?: string;
  required?: boolean;
}) => (
  <div>
    <label className="block text-sm font-medium">{label}</label>
    <input
      type={type}
      value={value}
      onChange={onChange}
      className="w-full px-4 py-2 border rounded-lg"
      required={required}
    />
  </div>
);
export default InputField;

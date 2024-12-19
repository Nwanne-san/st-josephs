import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { ChevronUp } from "lucide-react";

interface DropdownProps {
  name: string;
  options: string[];
  placeholder: string | undefined;
  className?: string;
  onChange: (option: string) => void; // Pass a function to handle option selection
  selectedOption: string; // Receive selected option as prop
}

const Dropdown: React.FC<DropdownProps> = ({
  name,
  options,
  placeholder,
  className,
  onChange,
  selectedOption,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  // const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const toggleDropdown = () => setIsOpen((prev) => !prev);

  const handleOptionClick = (option: string) => {
    onChange(option);
    // setSelectedOption(option);
    setIsOpen(false);
  };

  // const handleChange = () => {
  //   onChange && onChange(selectedOption); // Pass the selected value (not the options array)
  // };

  const handleClickOutside = (event: MouseEvent) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target as Node)
    ) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div ref={dropdownRef} className="relative w-full">
      <button
        type="button"
        onClick={toggleDropdown}
        className={`w-full bg-transparent px-4 py-3 text-left flex justify-between items-center border-b border-l border-accent ${className}`}
      >
        {selectedOption || placeholder}
        <ChevronUp
          className={`transform transition-transform duration-500 ${
            isOpen ? "rotate-180" : "rotate-0"
          }`}
        />
      </button>
      {isOpen && (
        <motion.ul
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute w-full bg-white border border-gray-300 rounded-lg mt-2 max-h-48 overflow-y-auto shadow-lg z-10"
        >
          {options.map((option, index) => (
            <li
              key={index}
              onClick={() => handleOptionClick(option)}
              className="px-4 py-2 cursor-pointer hover:bg-gray-100 text-primary"
            >
              {option}
            </li>
          ))}
        </motion.ul>
      )}
      <input type="hidden" name={name} value={selectedOption || ""} />
    </div>
  );
};

export default Dropdown;

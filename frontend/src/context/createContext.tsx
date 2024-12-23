"use client";
import React, { createContext, useState, useContext } from "react";

interface AuthContextType {
  user: null;
  setUser: React.Dispatch<React.SetStateAction<null>>;
}
// Define context
const ContactContext = createContext<AuthContextType | undefined>(undefined);

// Context provider component
export const ContactProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [user, setUser] = useState(null);

  return (
    <ContactContext.Provider value={{ user, setUser }}>
      {children}
    </ContactContext.Provider>
  );
};

// Custom hook to use context
export const useContact = () => useContext(ContactContext);

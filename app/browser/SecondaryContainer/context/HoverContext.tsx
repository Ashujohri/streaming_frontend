"use client";

import { createContext, useContext, useState } from "react";

interface HoverContextType {
  activeId: number | null;
  setActiveId: (id: number | null) => void;
}

const HoverContext = createContext<HoverContextType | null>(null);

export const HoverProvider = ({ children }: { children: React.ReactNode }) => {
  const [activeId, setActiveId] = useState<number | null>(null);

  return (
    <HoverContext.Provider value={{ activeId, setActiveId }}>
      {children}
    </HoverContext.Provider>
  );
};

export const useHoverContext = () => {
  const ctx = useContext(HoverContext);
  if (!ctx) throw new Error("Wrap with HoverProvider");
  return ctx;
};

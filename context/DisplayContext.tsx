"use client";

import { useLocalStorage } from "@/hooks/useLocalStorage";
import { createContext, useContext, useMemo } from "react";

export type DisplayMode =
  | "linebyline"
  | "reading"
  | "hifzlinebyline"
  | "hifzreading";

type DisplayContextType = {
  displayMode: DisplayMode;
  setDisplayMode: (mode: DisplayMode) => void;
};

const DisplayContext = createContext<DisplayContextType | undefined>(undefined);

export function DisplayProvider({ children }: { children: React.ReactNode }) {
  const [displayMode, setDisplayMode] = useLocalStorage<DisplayMode>(
    "displaymode",
    "linebyline",
  );

  const value = useMemo(
    () => ({
      displayMode,
      setDisplayMode,
    }),
    [displayMode, setDisplayMode],
  );

  return (
    <DisplayContext.Provider value={value}>{children}</DisplayContext.Provider>
  );
}

export function useDisplay() {
  const context = useContext(DisplayContext);
  if (!context) {
    throw new Error("useDisplay must be used within a DisplayProvider");
  }
  return context;
}

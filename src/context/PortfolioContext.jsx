import { createContext, useContext, useMemo, useState } from "react";

const PortfolioContext = createContext(null);

export function PortfolioProvider({ children }) {
  const [activeStack, setActiveStack] = useState(null);
  const [toast, setToast] = useState("");

  const value = useMemo(
    () => ({
      activeStack,
      setActiveStack,
      toast,
      showToast: (message) => {
        setToast(message);
        window.setTimeout(() => setToast(""), 2200);
      },
    }),
    [activeStack, toast]
  );

  return <PortfolioContext.Provider value={value}>{children}</PortfolioContext.Provider>;
}

export function usePortfolio() {
  const ctx = useContext(PortfolioContext);
  if (!ctx) throw new Error("usePortfolio must be used inside PortfolioProvider");
  return ctx;
}

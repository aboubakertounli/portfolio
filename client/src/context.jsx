import { createContext, useContext } from "react";

export const AppContext = createContext(null);

export function useApp() {
  return useContext(AppContext);
}

export function Title({ children }) {
  return <h1>{children}<span className="dot">.</span></h1>;
}

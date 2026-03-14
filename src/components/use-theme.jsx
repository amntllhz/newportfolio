// use-theme.js
import { createContext, useContext } from "react"

// Kita ekspor context-nya juga agar bisa dipakai Provider
export const ThemeProviderContext = createContext({
  theme: "system",
  setTheme: () => null,
})

export function useTheme() {
  const context = useContext(ThemeProviderContext)

  if (!context) {
    throw new Error("useTheme must be used within ThemeProvider")
  }

  return context
}
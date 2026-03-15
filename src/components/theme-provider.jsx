// theme-provider.jsx
import { useEffect, useState } from "react"
import { ThemeProviderContext } from "./use-theme" // Impor dari file tadi

export function ThemeProvider({
  children,
  defaultTheme = "system",
  storageKey = "vite-ui-theme",
}) {
  const [theme, setTheme] = useState(
    () => localStorage.getItem(storageKey) || defaultTheme
  )

  useEffect(() => {
    const root = window.document.documentElement
    root.classList.remove("light", "dark")

    const appliedTheme = theme === "system" 
      ? (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light")
      : theme

    root.classList.add(appliedTheme)

    // Logika meta theme-color yang kita buat tadi
    const metaThemeColor = window.document.querySelector('meta[name="theme-color"]')
    if (metaThemeColor) {
      const color = appliedTheme === "dark" ? "#0A0A0A" : "#ffffff"
      metaThemeColor.setAttribute("content", color)
    }
  }, [theme])

  const value = {
    theme,
    setTheme: (theme) => {
      localStorage.setItem(storageKey, theme)
      setTheme(theme)
    },
  }

  return (
    <ThemeProviderContext.Provider value={value}>
      {children}
    </ThemeProviderContext.Provider>
  )
}
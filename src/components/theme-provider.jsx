// theme-provider.jsx
import { useEffect, useState } from "react"
import { ThemeProviderContext } from "./use-theme"

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

    const resolvedTheme = theme === "system"
      ? (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light")
      : theme

    // Only remove the opposite class — never remove the current one.
    // This prevents a repaint flash when the inline script in index.html
    // already applied the correct class before React mounted.
    const oppositeTheme = resolvedTheme === "dark" ? "light" : "dark"
    root.classList.remove(oppositeTheme)
    root.classList.add(resolvedTheme)

    const metaThemeColor = window.document.querySelector('meta[name="theme-color"]')
    if (metaThemeColor) {
      metaThemeColor.setAttribute("content", resolvedTheme === "dark" ? "#0A0A0A" : "#ffffff")
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

import { Moon, Sun } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useTheme } from "@/components/theme-provider"

export function ModeToggle() {
  const { theme, setTheme } = useTheme()

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark")
  }

  return (
    <div className="fixed bottom-4 right-5 z-50">
      <Button
        variant="secondary"
        size="icon"
        onClick={toggleTheme}
        className="relative bg-gray-100 dark:bg-neutral-900 cursor-pointer"
      >
        <Sun className="h-[1.2rem] w-[1.2rem] text-gray-400 transition-all dark:rotate-90 dark:scale-0" />
        <Moon className="absolute h-[1.2rem] text-neutral-400 w-[1.2rem] transition-all rotate-90 scale-0 dark:rotate-0 dark:scale-100" />
      </Button>
    </div>
  )
}

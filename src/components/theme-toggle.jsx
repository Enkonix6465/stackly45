import { Moon, Sun } from "lucide-react"
import { useTheme } from "./theme-provider"
import { cn } from "../lib/utils"

export function ThemeToggle({ className }) {
  const { theme, toggleTheme } = useTheme()

  return (
    <button
      onClick={toggleTheme}
      className={cn(
        "inline-flex items-center justify-center rounded-lg text-sm font-medium transition-all duration-300 hover:bg-gray-100 h-10 w-10 relative border border-black dark:border-black hover:border-black dark:hover:border-black hover:shadow-md bg-white dark:bg-white text-black dark:text-black",
        className
      )}
      title={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
    >
      <Sun 
        className={cn(
          "h-5 w-5 transition-all duration-300 text-yellow-500",
          theme === "light" ? "rotate-0 scale-100 opacity-100" : "-rotate-90 scale-0 opacity-0"
        )} 
      />
      <Moon 
        className={cn(
          "absolute h-5 w-5 transition-all duration-300 text-black",
          theme === "dark" ? "rotate-0 scale-100 opacity-100" : "rotate-90 scale-0 opacity-0"
        )} 
      />
      <span className="sr-only">Toggle theme</span>
    </button>
  )
}

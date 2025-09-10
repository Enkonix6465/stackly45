import { Moon, Sun } from "lucide-react"
import { useTheme } from "./theme-provider"
import { cn } from "../lib/utils"

export function ThemeToggle({ className }) {
  const { theme, toggleTheme } = useTheme()

  return (
    <button
      onClick={toggleTheme}
      className={cn(
        "inline-flex items-center justify-center rounded-lg text-sm font-medium transition-all duration-300 hover:bg-gray-100 hover:text-gray-900 dark:hover:bg-gray-700 dark:hover:text-gray-50 h-10 w-10 relative border border-gray-200 dark:border-gray-600 hover:border-gray-300 dark:hover:border-gray-500 hover:shadow-md",
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
          "absolute h-5 w-5 transition-all duration-300 text-blue-400",
          theme === "dark" ? "rotate-0 scale-100 opacity-100" : "rotate-90 scale-0 opacity-0"
        )} 
      />
      <span className="sr-only">Toggle theme</span>
    </button>
  )
}

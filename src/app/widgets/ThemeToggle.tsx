"use client"
import { useState, useEffect } from "react"
import { useTheme } from "next-themes"
import { Icon } from "@/components"

export const ThemeToggle = () => {
    const [mounted, setMounted] = useState<boolean>(false)
    const { theme, setTheme } = useTheme()

    useEffect(() => {
        setMounted(true)
        const theme = localStorage.getItem("theme") || "light"
        setTheme(theme)
    }, [])

    if (!mounted) {
        return null
    }

    return (
        <button
            className="w-8 h-8 flex items-center justify-center text-text-light-1 dark:text-text-dark-1 rounded-full border border-solid border-border-light dark:border-border-dark"
            onClick={() => theme === "dark" ? setTheme("light") : setTheme("dark")}
        >
            {theme === "dark" ? (
                <Icon iconName="sun" fill="#fff" />
            ) : (
                <Icon iconName="moon" fill="#707070" />
            )}
        </button>
    )

}

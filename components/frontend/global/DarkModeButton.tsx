'use client'
import { useTheme } from "next-themes"
import { useState, useEffect } from "react"
import { SunIcon, MoonIcon } from "@heroicons/react/24/solid"

function DarModeButton() {

    const [mounted, setMounted] = useState(false);
    const { systemTheme, theme, setTheme } = useTheme();

    useEffect(() => {
      setMounted(true);
    }, [])

    if (!mounted) {
        return null;
    }

    const currentTheme = theme === "system" ? systemTheme : theme

    return (
        <div>
            {currentTheme === "dark" ? (
                <SunIcon 
                    className="w-7 h-7 text-amber-500 cursor-pointer"
                    onClick={() => setTheme("light")}
                />
            ) : (
                <MoonIcon 
                    className="w-7 h-7 text-neutral-900 cursor-pointer"
                    onClick={() => setTheme("dark")}
                />
            )}
        </div>
    )
}

export default DarModeButton
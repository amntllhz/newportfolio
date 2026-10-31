import { useEffect, useState } from "react"
import { useTheme } from "@/components/use-theme"
import GradientASCII from "./GradientASCII"

const SiteBackground = () => {
    const { theme } = useTheme()
    const [isDark, setIsDark] = useState(() => {
        if (typeof document === "undefined") return false
        return document.documentElement.classList.contains("dark")
    })

    useEffect(() => {
        const updateDark = () => {
            const dark =
                theme === "dark" ||
                (theme === "system"
                    ? window.matchMedia("(prefers-color-scheme: dark)").matches
                    : document.documentElement.classList.contains("dark"))
            setIsDark(dark)
        }

        updateDark()

        const media = window.matchMedia("(prefers-color-scheme: dark)")
        media.addEventListener("change", updateDark)
        return () => media.removeEventListener("change", updateDark)
    }, [theme])

    return (
        <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
            <GradientASCII
                key={isDark ? "dark" : "light"}
                colors={
                    isDark
                        ? ["#1e3fd8", "#f6f8ff", "#a5d8ff", "#38bdf8"]
                        : ["#1e3a8a", "#2563eb", "#60a5fa", "#93c5fd"]
                }
                shape="horizon"
                characters=" =+xX0S8#@"
                cellSize={18}
                density={0.65}
                glyphOpacity={isDark ? 0.45 : 0.4}
                gradientOpacity={isDark ? 0.6 : 0.5}
                glow={isDark ? 0.2 : 0}
                flicker={0.1}
                grain={0.04}
                speed={0.6}
                flow={0.5}
                softness={0.5}
                mouseInteraction={false}
                intro
                lightMode={!isDark}
            />
        </div>
    )
}

export default SiteBackground

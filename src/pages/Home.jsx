import { ThemeToggle } from "../components/ThemeToggle"
import { StarBackground } from "../components/StarBackground"
import { Navbar } from "../components/Navbar"
import { HeroSection } from "../components/HeroSection"
import { AboutSection } from "../components/AboutSection"

export const Home = () => {
    return <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
        {/* Handle our theme*/}
        <ThemeToggle />
        {/* Background effects here*/}
        <StarBackground />


        {/* Navbar*/}
        <Navbar />
        {/* Main content*/}
        <main>
            <HeroSection />
            <AboutSection />
        </main>

        {/* Footer */}
    </div>
}
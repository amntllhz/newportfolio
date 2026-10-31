import Hero from "../sections/Hero"
import Navigation from "../components/Navigation"
import { useState } from "react"
import Education from "../sections/Education";
import Projects from "@/sections/Projects";
import Contact from "../sections/Contact";
import SettingsFAB from "@/components/SettingsFAB";
import Skill from "@/sections/Skill";
import SiteBackground from "@/components/SiteBackground";

const SECTION_MAP = {
    profile: Hero,
    skill: Skill,
    education: Education,
    projects: Projects,
    contact: Contact
};

const Home = () => {
    const [activeSection, setActiveSection] = useState("profile");

    const ActiveSection = SECTION_MAP[activeSection];

    return (
        <div className="relative isolate min-h-screen">
            <SiteBackground />

            <main className="relative z-10">
                {ActiveSection && <ActiveSection />}

                <Navigation
                    active={activeSection}
                    onChange={setActiveSection}
                />

                <SettingsFAB />
            </main>
        </div>
    )
}

export default Home

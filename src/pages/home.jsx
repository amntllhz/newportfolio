import Hero from "../sections/Hero"
import Navigation from "../components/Navigation"
import { useState } from "react"
import Education from "../sections/Education";
import Projects from "@/sections/Projects";
import Contact from "../sections/Contact";
import SettingsFAB from "@/components/SettingsFAB";

const SECTION_MAP = {
  profile: Hero, 
  education: Education,
  projects: Projects,
  contact: Contact
};

const Home = () => {
    const [activeSection, setActiveSection] = useState("profile");

    const ActiveSection = SECTION_MAP[activeSection];

    return (
        <>                        
            {ActiveSection && <ActiveSection />}            
            
            <Navigation
                active={activeSection}
                onChange={setActiveSection}
            />

            <SettingsFAB />
        </>
    )
}

export default Home
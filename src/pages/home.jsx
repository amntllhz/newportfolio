import Hero from "../sections/Hero"
import Navigation from "../components/Navigation"
import { useState } from "react"
import Education from "../sections/Education";
import Projects from "@/sections/Projects";

const SECTION_MAP = {
  profile: Hero, 
  education: Education,
  projects: Projects
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
        </>
    )
}

export default Home
import techstack from "../../data/techstack"
import { SiAdobeillustrator, SiAdobephotoshop, SiAlpinedotjs, SiBootstrap, SiCss3, SiFigma, SiFilament, SiGit, SiGithub, SiHtml5, SiJavascript, SiLaravel, SiMysql, SiNpm, SiPhp, SiReact, SiTailwindcss, SiVite } from "react-icons/si"
import { motion } from "framer-motion"

const IconMap = {
    "HTML": SiHtml5,
    "CSS": SiCss3,
    "JS": SiJavascript,
    "PHP": SiPhp,
    "Laravel": SiLaravel,
    "MySQL": SiMysql,
    "React": SiReact,
    "TailwindCSS": SiTailwindcss,
    "Bootstrap": SiBootstrap,
    "Git": SiGit,
    "GitHub": SiGithub,
    "Vite": SiVite,
    "NPM": SiNpm,
    "Figma": SiFigma,
    "Photoshop": SiAdobephotoshop,
    "Illustrator": SiAdobeillustrator,
    "AlpineJS": SiAlpinedotjs,
    "Filament": SiFilament,
};

const Techbadge = ({variants, items, iconSize = "text-3xl", roundedSize = "rounded-md"}) => {

    const displayItems = items || techstack.map(t => t.icon);

    return (
        <>
            <div className="relative flex justify-center items-center">
                <div className="flex flex-wrap lg:max-w-lg xs:max-w-full justify-left items-center gap-2.5">
                    {displayItems.map((techName) => {
                        const Icon = IconMap[techName];
                        if (!Icon) return null;
                        return (
                            <motion.div variants={variants} key={techName} className="relative flex justify-center items-center">
                                <Icon className={`${iconSize} text-gray-400/70 p-1 ${roundedSize} bg-gray-100`}/>                                
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </>
    )
}

export default Techbadge
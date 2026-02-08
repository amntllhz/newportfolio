import techstack from "../../data/techstack"
import { SiAdobeillustrator, SiAdobephotoshop, SiBootstrap, SiCss3, SiFigma, SiGit, SiGithub, SiHtml5, SiJavascript, SiLaravel, SiMysql, SiNpm, SiPhp, SiReact, SiTailwindcss, SiVite } from "react-icons/si"
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
};

const Techbadge = ({variants}) => {
    return (
        <>
            <div className="relative flex justify-center items-center">
                <div className="flex flex-wrap max-w-lg justify-left items-center gap-2.5">
                    {techstack.map((tech) => {
                        const Icon = IconMap[tech.icon];
                        return (
                            <motion.div variants={variants} key={tech.name} className="relative flex justify-center items-center">
                                <Icon className="text-3xl text-gray-400 p-1 rounded-md bg-gray-100"/>                                
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </>
    )
}

export default Techbadge
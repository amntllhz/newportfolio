import techstack from "../../data/techstack"
import { SiAdobeillustrator, SiAdobephotoshop, SiAlpinedotjs, SiBootstrap, SiCss3, SiFigma, SiFilament, SiGit, SiGithub, SiHtml5, SiJavascript, SiLaravel, SiMysql, SiNpm, SiPhp, SiPython, SiReact, SiTailwindcss, SiVite } from "react-icons/si"
import { motion } from "framer-motion"
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip"

// Gunakan tanda kurung ( ) agar otomatis mereturn JSX
const Customtkinter = ({ className }) => (
  <svg
    className={className}
    viewBox="0 0 256 256" // Ubah ke 256 sesuai koordinat path kamu
    width="1em"
    height="1em"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M191 0C226.899 0 256 29.1015 256 65V191C256 226.899 226.899 256 191 256H65C29.1015 256 0 226.899 0 191V65C0 29.1015 29.1015 0 65 0H191ZM98 63C78.67 63 63 78.67 63 98V158C63 177.33 78.67 193 98 193H158C177.33 193 193 177.33 193 158V98C193 78.67 177.33 63 158 63H98Z"
      fill="currentColor" // Gunakan currentColor agar bisa berubah warna lewat Tailwind
    />
    <path
      d="M191 0C226.899 0 256 29.1015 256 65V191C256 226.899 226.899 256 191 256H166V255.387C167.677 255.657 169.397 255.8 171.15 255.8C188.906 255.8 203.3 241.406 203.3 223.65C203.3 205.895 188.906 191.5 171.15 191.5C169.886 191.5 168.638 191.575 167.412 191.717C182.17 187.606 193 174.069 193 158V98C193 81.4227 181.474 67.5404 166 63.9219V63.8877C167.677 64.1579 169.397 64.2998 171.15 64.2998C188.906 64.2996 203.3 49.906 203.3 32.1504C203.3 14.3946 188.906 0.000210284 171.15 0C169.397 0 167.677 0.142057 166 0.412109V0H191Z"
      fillOpacity="0.3" // Jika ingin memberikan efek bayangan/dual tone yang tetap mengikuti warna teks
      fill="currentColor"
    />
  </svg>
);

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
    "Python": SiPython,    
    "Customtkinter": Customtkinter,
};

const Techbadge = ({variants, items, iconSize = "text-3xl", roundedSize = "rounded-md"}) => {

    const displayItems = items || techstack.map(t => t.icon);

    return (
        <>
            <div className="relative flex justify-center items-center">
                <div variants={variants} className="flex flex-wrap lg:max-w-lg xs:max-w-full justify-left items-center gap-2.5">
                    {displayItems.map((techName) => {
                        const Icon = IconMap[techName];
                        if (!Icon) return null;
                        return (
                            <Tooltip key={techName}>
                                <TooltipTrigger asChild>
                                    <motion.div variants={variants} className="relative flex justify-center items-center">
                                        <Icon className={`${iconSize} text-gray-400/70 p-1 ${roundedSize} bg-gray-100 dark:bg-neutral-900 dark:text-neutral-500`}/>                                
                                    </motion.div>
                                </TooltipTrigger>
                                <TooltipContent className="">
                                    <p className="font-main text-xs">{techName}</p>
                                </TooltipContent>
                            </Tooltip>
                        );
                    })}
                </div>
            </div>
        </>
    )
}

export default Techbadge
import { motion } from "framer-motion";
import { SiGithub, SiGmail, SiInstagram, SiLinkedin } from "react-icons/si";
import Talklink from "../../data/talk";


const IconMap = {
    "Email": SiGmail,
    "Linkedin": SiLinkedin,
    "Github": SiGithub,
    "Instagram": SiInstagram,    
};

const Talk = ({variants, iconSize = "text-3xl", roundedSize = "rounded-md"}) => {
    return (
        <>
            <div className="relative flex justify-center items-center">
                <div className="flex flex-wrap max-w-lg justify-left items-center gap-4 mt-2">
                    {Talklink.map((item) => {
                        const Icon = IconMap[item.name];
                        if (!Icon) return null;
                        return (
                            <motion.a variants={variants} key={item.id} href={item.link} target={item.link.startsWith("mailto:") ? "_self" : "_blank"} rel="noopener noreferrer" className="relative flex justify-center items-center cursor-pointer">
                                <Icon className={`${iconSize} text-gray-300/70 p-1 ${roundedSize} bg-gray-100 dark:bg-neutral-900 hover:text-gray-400/70 dark:text-neutral-400 dark:hover:text-neutral-700 transition ease-in-out duration-300`}/>                                
                            </motion.a>
                        );
                    })}
                </div>
            </div>
        </>
    )
}

export default Talk
import { CiLocationOn } from "react-icons/ci"
import { PiBuildingOfficeThin } from "react-icons/pi"
import experience from "../../data/experience"
import { motion } from "framer-motion"
import { useTranslation } from "react-i18next"
import { useState } from "react"
import { Skeleton } from "../ui/skeleton"

const Expcard = ({variants}) => {
    const { i18n } = useTranslation();    
    const currentLang = i18n.language.split('-')[0];
    const dataDescending = experience.sort((a, b) => b.id - a.id);
    return (
        <>
            {dataDescending.map((exp) => {
                return <ExpcardItem key={exp.id} exp={exp} variants={variants} currentLang={currentLang} />
            })}                    
        </>
    )
}

// Pisah jadi komponen kecil agar tiap item punya state isLoaded sendiri
const ExpcardItem = ({ exp, variants, currentLang }) => {
    const [isLoaded, setIsLoaded] = useState(false);

    return (
        <motion.div variants={variants} className="flex rounded-xl p-1 justify-left items-start outline outline-offset-0 outline-gray-300/80 w-full gap-1 dark:outline-neutral-800">
            
            {/* Tambah relative + ukuran eksplisit */}
            <div className="relative lg:w-20 lg:h-20 xs:w-18 xs:h-18 shrink-0 overflow-hidden rounded-lg bg-radial from-transparent to-transparent dark:bg-radial dark:from-transparent dark:to-neutral-50/5 outline outline-offset-0 outline-gray-300/80 dark:outline-neutral-800">
                
                {!isLoaded && (
                    <Skeleton className="absolute inset-0 w-full h-full rounded-lg z-10" />
                )}

                <img 
                    src={exp.image} 
                    alt="" 
                    className={`w-full h-full object-cover transition-opacity pointer-events-none duration-700 ${
                        isLoaded ? "opacity-100" : "opacity-0"
                    }`}
                    onLoad={() => setIsLoaded(true)}
                />
            </div>

            <div className="flex flex-col gap-0.5 py-2 px-3">  
                <div className="flex items-center">
                    <p className="font-main font-semibold lg:text-sm xs:text-[10px] text-gray-500/80 dark:text-neutral-100">{exp.title}</p>
                    <p className="font-main font-extralight lg:text-sm xs:text-[10px] text-gray-400 dark:text-neutral-400 mx-2">|</p>
                    <p className="font-main lg:text-xs xs:text-[10px] text-gray-400 dark:text-neutral-400">{exp.category[currentLang]}</p>
                </div>                      
                <div className="flex flex-col gap-1 mt-1">
                    <div className="flex gap-1">
                        <PiBuildingOfficeThin className="lg:text-sm xs:text-xs text-gray-400 dark:text-neutral-400"/>
                        <p className="font-main lg:text-xs xs:text-[9px] text-gray-400 dark:text-neutral-400">{exp.company}</p>
                    </div>
                    <div className="flex gap-1">
                        <CiLocationOn className="lg:text-sm xs:text-xs text-gray-400 dark:text-neutral-400"/>
                        <p className="font-main lg:text-xs xs:text-[9px] text-gray-400 dark:text-neutral-400">{exp.address[currentLang]}</p>
                        <p className="font-main font-semibold lg:text-xs xs:text-[9px] text-gray-400 dark:text-neutral-400 mx-1">•</p>
                        <p className="font-main lg:text-xs xs:text-[9px] text-gray-400 dark:text-neutral-400">{exp.date[currentLang]}</p>
                    </div>
                </div>
            </div>
        </motion.div>
    )
}

export default Expcard
import { CiLocationOn } from "react-icons/ci"
import { PiBuildingOfficeThin } from "react-icons/pi"
import experience from "../../data/experience"
import { motion } from "framer-motion"
import { useTranslation } from "react-i18next"
import { useState } from "react"
import { Skeleton } from "../ui/skeleton"

const Expcard = ({ variants }) => {
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
        <motion.div variants={variants} className="flex rounded-xl p-1 justify-left items-start outline -outline-offset-1 outline-gray-300/10 w-full gap-1 dark:bg-neutral-900/5 backdrop-blur-sm dark:outline-neutral-800/10">

            {/* Tambah relative + ukuran eksplisit */}
            <div className="relative lg:w-20 lg:h-20 xs:w-18 xs:h-18 shrink-0 overflow-hidden rounded-lg bg-radial from-transparent to-transparent dark:bg-radial dark:from-transparent dark:to-neutral-400/5 backdrop-blur-sm outline outline-offset-0 outline-gray-300/10 dark:outline-neutral-800/10">

                {!isLoaded && (
                    <Skeleton className="absolute inset-0 w-full h-full rounded-lg z-10" />
                )}

                <img
                    src={exp.image}
                    alt=""
                    className={`w-full h-full object-cover transition-opacity pointer-events-none duration-700 ${isLoaded ? "opacity-100" : "opacity-0"
                        }`}
                    onLoad={() => setIsLoaded(true)}
                />
            </div>

            <div className="flex flex-col gap-0.5 py-2 px-3">
                <div className="flex items-center">
                    <p className="font-main font-semibold lg:text-sm xs:text-[10px] text-slate-900 dark:text-white">{exp.title}</p>
                    <p className="font-main font-extralight lg:text-sm xs:text-[10px] text-slate-900 dark:text-neutral-300 mx-2">|</p>
                    <p className="font-main lg:text-xs xs:text-[10px] text-slate-900 dark:text-neutral-300">{exp.category[currentLang]}</p>
                </div>
                <div className="flex flex-col gap-1 mt-1">
                    <div className="flex gap-1">
                        <PiBuildingOfficeThin className="lg:text-sm xs:text-xs text-slate-600 dark:text-neutral-300" />
                        <p className="font-main lg:text-xs xs:text-[9px] text-slate-600 dark:text-neutral-300">{exp.company}</p>
                    </div>
                    <div className="flex gap-1">
                        <CiLocationOn className="lg:text-sm xs:text-xs text-slate-600 dark:text-neutral-300" />
                        <p className="font-main lg:text-xs xs:text-[9px] text-slate-600 dark:text-neutral-300">{exp.address[currentLang]}</p>
                        <p className="font-main font-semibold lg:text-xs xs:text-[9px] text-slate-600 dark:text-neutral-300 mx-1">•</p>
                        <p className="font-main lg:text-xs xs:text-[9px] text-slate-600 dark:text-neutral-300">{exp.date[currentLang]}</p>
                    </div>
                </div>
            </div>
        </motion.div>
    )
}

export default Expcard
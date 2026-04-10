import { motion } from "framer-motion"
import Techbadge from "../Techbadge"
import { useState } from "react"
import { Skeleton } from "../ui/skeleton"

const Showcard = ({data, variants, onSelect}) => {    

    const dataDescending = data.sort((a, b) => b.id - a.id);
    return (
        <>            
            <div className="grid lg:grid-cols-3 grid-cols-1 lg:max-w-2xl xs:max-w-full w-full justify-between items-center gap-5">
                {dataDescending.map((show) => {                                       
                    return <ShowcardItem key={show.id} show={show} variants={variants} onSelect={onSelect} />
                })}
            </div>            
        </>
    )
}

const ShowcardItem = ({ show, variants, onSelect }) => {
    const [isLoaded, setIsLoaded] = useState(false);
    const limitedTech = show.techstack.slice(0, 4);
    const extraTech = show.techstack.length - 4;

    return (
        <motion.button 
            layout 
            onClick={() => onSelect(show)} 
            variants={variants} 
            className="group flex flex-col outline outline-offset-0 outline-gray-300/80 lg:p-1 xs:p-1.5 w-full rounded-xl gap-2 cursor-pointer dark:outline-neutral-800"
        >                                
            {/* Rasio eksak 1616:976 agar skeleton & gambar identik */}
            <div className="relative aspect-1616/976 w-full rounded-lg overflow-hidden outline outline-offset-0 outline-gray-300/80 dark:outline-neutral-800">
                
                {!isLoaded && (
                    <Skeleton className="absolute inset-0 w-full h-full rounded-lg z-10" />
                )}

                <img 
                    src={show.cover}
                    loading="lazy"
                    className={`w-full h-full object-cover transition-opacity duration-700 ${
                        isLoaded ? "opacity-100" : "opacity-0"
                    }`}
                    onLoad={() => setIsLoaded(true)}
                />
                
                {/* Overlay Shadow */}
                <div 
                    className="absolute bottom-0 left-0 w-full h-2/4 bg-linear-to-t from-neutral-900/20 dark:from-neutral-50/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" 
                />
            </div>

            <div className="flex flex-col justify-left items-start px-1.5 py-1.5 gap-1.5">
                <p className="font-main font-semibold lg:text-xs xs:text-md text-gray-500/80 dark:text-neutral-100">
                    {show.title}
                </p>                                    
                <div className="flex flex-wrap w-full gap-1 items-center">
                    <Techbadge roundedSize="rounded-sm" iconSize="text-xl" items={limitedTech} />
                    {extraTech > 0 && (
                        <span className="font-main ml-1 font-normal text-xs text-gray-400 dark:text-neutral-400">
                            +{extraTech}
                        </span>
                    )}
                </div>
            </div>
        </motion.button>
    )
}

export default Showcard
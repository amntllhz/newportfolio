import { motion } from "framer-motion"
import Techbadge from "../Techbadge"


const Showcard = ({data, variants, onSelect}) => {    

    const dataDescending = data.sort((a, b) => b.id - a.id);
    return (
        <>            
            <div className="flex lg:flex-row xs:flex-col lg:max-w-2xl xs:max-w-full w-full justify-between items-center gap-5">
                {dataDescending.map((show) => {  
                    const limitedTech = show.techstack.slice(0, 4);
                    const extraTech = show.techstack.length - 4;                  

                    return (
                        <motion.button layout onClick={()=> onSelect(show)} variants={variants} key={show.id} className="group flex flex-col outline outline-offset-0 outline-gray-300/80 lg:p-1 xs:p-1.5 w-fit rounded-xl gap-2 cursor-pointer dark:outline-neutral-800">                                
                            <div className="relative  rounded-lg overflow-hidden outline outline-offset-0 outline-gray-300/80 dark:outline-neutral-800">
                                <img 
                                    src={show.cover} 
                                    className="w-full h-full object-cover" 
                                />
                                
                                {/* Overlay Shadow */}
                                <div 
                                    className="absolute bottom-0 left-0 w-full h-2/4 bg-linear-to-t from-gray-400/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" 
                                />
                            </div>
                            <div className="flex flex-col justify-left items-start px-1.5 py-1.5 gap-1.5">
                                <p className="font-main font-semibold lg:text-xs xs:text-md text-gray-500/80 dark:text-neutral-100">{show.title}</p>                                    
                                <div className="flex flex-wrap w-full gap-1 items-center">
                                    <Techbadge roundedSize="rounded-sm" iconSize="text-xl" items={limitedTech}></Techbadge>
                                    {extraTech > 0 && (
                                        <span className="font-main ml-1 font-normal text-xs text-gray-400 dark:text-neutral-400">+{extraTech}</span>
                                    )}
                                </div>
                            </div>
                        </motion.button>
                    )
                })}
            </div>            
        </>
    )
}

export default Showcard
import showcase from "../../data/showcase"
import { motion } from "framer-motion"
import Techbadge from "../Techbadge"


const Showcard = ({variants, onSelect}) => {    

    return (
        <>            
            <div className="flex flex-wrap max-w-2xl w-full justify-between items-center gap-5">
                {showcase.map((show, index) => {  
                    const limitedTech = show.techstack.slice(0, 5);
                    const extraTech = show.techstack.length - 5;                  

                    return (
                        <motion.button onClick={()=> onSelect(show)} variants={variants} key={index} className="group flex flex-col outline outline-offset-0 outline-gray-300/80 p-1 w-fit rounded-xl gap-2 cursor-pointer">                                
                            <div className="relative w-50 h-30 rounded-lg overflow-hidden outline outline-offset-0 outline-gray-300/80">
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
                                <p className="font-main font-semibold text-xs text-gray-500/80">{show.title}</p>                                    
                                <div className="flex flex-wrap w-full gap-1 items-center">
                                    <Techbadge roundedSize="rounded-sm" iconSize="text-xl" items={limitedTech}></Techbadge>
                                    {extraTech > 0 && (
                                        <span className="font-main ml-1 font-normal text-xs text-gray-400">+{extraTech}</span>
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
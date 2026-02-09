import showcase from "../../data/showcase"
import { motion } from "framer-motion"
import Techbadge from "../Techbadge"


const Showcard = ({variants, onSelect}) => {    

    return (
        <>
            <div className="relative flex justify-center items-center">
                <div className="flex flex-wrap max-w-xl w-full justify-left items-center gap-2.5">
                    {showcase.map((show, index) => {  
                        const limitedTech = show.techstack.slice(0, 4);
                        const extraTech = show.techstack.length - 4;                  

                        return (
                            <motion.button onClick={()=> onSelect(show)} variants={variants} key={index} className="flex flex-col outline outline-offset-0 outline-gray-300/80 p-1 w-fit rounded-xl gap-2 cursor-pointer">
                                <img src={show.cover} alt="" className="w-40 h-30 object-cover rounded-lg"/>
                                <div className="flex flex-col justify-left items-start px-1.5 py-1.5 gap-1 w-40">
                                    <p className="font-main font-semibold text-xs text-gray-500/80">{show.title}</p>                                    
                                    <div className="flex flex-wrap gap-1 items-center">
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
            </div>
        </>
    )
}

export default Showcard
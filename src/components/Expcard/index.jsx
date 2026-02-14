import { CiLocationOn } from "react-icons/ci"
import { PiBuildingOfficeThin } from "react-icons/pi"
import experience from "../../data/experience"
import { motion } from "framer-motion"

const Expcard = ({variants}) => {
    const dataDescending = experience.sort((a, b) => b.id - a.id);
    return (
        <>
            {dataDescending.map((exp) => {
                return (
                    <motion.div key={exp.id} variants={variants} className="flex rounded-xl p-1 justify-left items-start outline outline-offset-0 outline-gray-300/80 w-full gap-1">
                        <div className="w-fit overflow-hidden rounded-lg outline outline-offset-0 outline-gray-300/80">
                            <img src={exp.image} alt="" className="lg:w-20 lg:h-20 xs:w-18 xs:h-18 object-cover"/>
                        </div>
                        <div className="flex flex-col gap-0.5 py-2 px-3">  
                            <div className="flex items-center">
                                <p className="font-main font-semibold lg:text-sm xs:text-[10px] text-gray-500/80">{exp.title}</p>
                                <p className="font-main font-extralight lg:text-sm xs:text-[10px] text-gray-400 mx-2">|</p>
                                <p className="font-main lg:text-xs xs:text-[10px] text-gray-400">{exp.category}</p>
                            </div>                      
                            <div className="flex flex-col gap-1 mt-1">
                                <div className="flex gap-1">
                                    <PiBuildingOfficeThin className="lg:text-sm xs:text-xs text-gray-400"/>
                                    <p className="font-main lg:text-xs xs:text-[9px] text-gray-400">{exp.company}</p>
                                </div>
                                <div className="flex gap-1">
                                    <CiLocationOn className="lg:text-sm xs:text-xs text-gray-400"/>
                                    <p className="font-main lg:text-xs xs:text-[9px] text-gray-400">{exp.address}</p>
                                    <p className="font-main font-semibold lg:text-xs xs:text-[9px] text-gray-400 mx-1">•</p>
                                    <p className="font-main lg:text-xs xs:text-[9px] text-gray-400">{exp.date}</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                )
            })}                    
        </>
    )
}

export default Expcard
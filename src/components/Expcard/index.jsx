import { CiLocationOn } from "react-icons/ci"
import { PiBuildingOfficeThin } from "react-icons/pi"
import experience from "../../data/experience"
import { motion } from "framer-motion"

const Expcard = ({variants}) => {
    return (
        <>
            {experience.map((exp, index) => {
                return (
                    <motion.div key={index} variants={variants} className="flex rounded-xl p-1 justify-left items-start outline outline-offset-0 outline-gray-300/80 w-lg  gap-1">
                        <div className="w-fit overflow-hidden rounded-lg">
                            <img src={exp.image} alt="" className="w-20 h-20 object-cover"/>
                        </div>
                        <div className="flex flex-col gap-0.5 py-2 px-3">  
                            <div className="flex">
                                <p className="font-main font-semibold text-sm text-gray-500/80">{exp.title}</p>
                                <p className="font-main font-semibold text-sm text-gray-500/80 mx-2">•</p>
                                <p className="font-main font-semibold text-sm text-gray-500/80">{exp.category}</p>
                            </div>                      
                            <div className="flex flex-col gap-1 mt-1">
                                <div className="flex gap-1">
                                    <PiBuildingOfficeThin className="text-sm text-gray-400"/>
                                    <p className="font-main text-xs text-gray-400">{exp.company}</p>
                                </div>
                                <div className="flex gap-1">
                                    <CiLocationOn className="text-sm text-gray-400"/>
                                    <p className="font-main text-xs text-gray-400">{exp.address}</p>
                                    <p className="font-main font-semibold text-xs text-gray-500/80 mx-1">•</p>
                                    <p className="font-main text-xs text-gray-400">{exp.date}</p>
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
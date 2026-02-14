import { CiLocationOn } from "react-icons/ci"
import school from "../../data/school"
import { GoLightBulb } from "react-icons/go"
import { motion } from "framer-motion"

const Schcard = ({variants}) => {
    const dataDescending = school.sort((a, b) => b.id - a.id);
    return (
        <>
            {dataDescending.map((sch) => {
                return (
                    <motion.div key={sch.id} variants={variants} className="flex rounded-xl p-1 justify-left items-start outline outline-offset-0 outline-gray-300/80 w-full gap-1">
                        <div className="w-fit overflow-hidden rounded-lg outline outline-offset-0 outline-gray-300/80">
                            <img src={sch.image} alt="" className="lg:w-20 lg:h-20 xs:w-18 xs:h-18 object-cover"/>
                        </div>
                        <div className="flex flex-col gap-0.5 py-2 px-3">  
                            <div className="flex">
                                <p className="font-main font-semibold lg:text-sm xs:text-[10px] line-clamp-1 text-gray-500/80">{sch.title}</p>                                                                
                            </div>                      
                            <div className="flex flex-col gap-1 mt-1">
                                <div className="flex gap-1">
                                    <GoLightBulb className="lg:text-sm xs:text-xs text-gray-400"/>
                                    <p className="font-main lg:text-xs xs:text-[9px] text-gray-400">{sch.major}</p>
                                </div>
                                <div className="flex gap-1">
                                    <CiLocationOn className="lg:text-sm xs:text-xs text-gray-400"/>
                                    <p className="font-main lg:text-xs xs:text-[9px] text-gray-400">{sch.address}</p>
                                    <p className="font-main font-semibold lg:text-xs xs:text-[9px] text-gray-500/80 mx-1">•</p>
                                    <p className="font-main lg:text-xs xs:text-[9px] text-gray-400">{sch.duration}</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                )
            })}                    
        </>
    )
}

export default Schcard
import { motion } from "framer-motion"
import Subdetail from "../Subdetail"
import { CiCircleChevLeft, CiStar } from "react-icons/ci"
import Techbadge from "../Techbadge"
import { PiChartPolarLight, PiSealWarningLight } from "react-icons/pi"
import { BsCaretRight } from "react-icons/bs"

const Showdetail = ({project, onBack, variants}) => {
    return (
        <>  
                <motion.div                      
                    variants={variants}                                           
                    className="max-w-lg w-full flex flex-col gap-4">                
                        {/* Header khusus di dalam Detail */}
                        
                        <motion.button onClick={onBack} className="text-left w-fit flex items-center gap-1 hover:gap-1.5 transform ease-in-out duration-300 cursor-pointer">
                            <CiCircleChevLeft className="text-2xl text-gray-400 p-1 rounded-md" />
                            <p className="font-main text-sm text-gray-500/80">Back</p>                        
                        </motion.button>

                        <motion.img variants={variants} src={project.cover} className="w-64 object-cover rounded-xl" />                        

                        <motion.div variants={variants} className="flex flex-col gap-2">

                            {/* Nama Aplikasi */}
                            <div className="flex">
                                <p className="font-main font-semibold text-sm text-gray-900">{project.title}</p>
                                <p className="font-main font-semibold text-sm text-gray-900 mx-2">•</p>
                                <p className="font-main font-semibold text-sm text-gray-900">{project.subtitle}</p>
                            </div>

                            {/* Deskripsi */}
                            <p className="font-main text-xs text-justify text-gray-400 leading-relaxed">
                                {project.description}
                            </p>  

                            {/* Techstack */}
                            <motion.div className="flex justify-start items-center gap-1.5">
                                <p className="font-main text-xs text-gray-400">Build with : </p>
                                <Techbadge roundedSize="rounded-sm" iconSize="text-2xl" items={project.techstack} variants={variants}></Techbadge>
                            </motion.div> 

                            {/* Problem Statement */}
                            <motion.div className="flex flex-col gap-0.5 mt-4 justify-left items-start">
                                <Subdetail fontWeight="font-medium" labelColor="text-gray-900" labelSize="text-sm" icon={PiSealWarningLight}>Problem Statement</Subdetail>                
                                <p className="font-main text-xs text-justify text-gray-400 leading-relaxed mb-2">
                                    {project.problem}
                                </p>  
                                <div className="flex flex-col items-start">
                                    {project.subproblem.map((subproblem, index) => {
                                        return(                                        
                                            <Subdetail key={index} textAlign="text-justify" padding="py-0 pr-2.5" fontWeight="font-normal" labelColor="text-gray-400" iconSize="text-xl" labelSize="text-xs" icon={BsCaretRight}>{subproblem}</Subdetail>
                                        )
                                    })}
                                </div>
                            </motion.div>

                            {/* Problem Solving */}
                            <motion.div className="flex flex-col gap-0.5 mt-4 justify-left items-start">
                                <Subdetail fontWeight="font-medium" labelColor="text-gray-900" labelSize="text-sm" icon={PiChartPolarLight}>Problem Resolution</Subdetail>                
                                <p className="font-main text-xs text-justify text-gray-400 leading-relaxed mb-2">
                                    {project.solution}
                                </p>                                  
                            </motion.div>

                            {/* Key Features */}
                            <motion.div className="flex flex-col gap-0.5 mt-4 justify-left items-start">
                                <Subdetail fontWeight="font-medium" labelColor="text-gray-900" labelSize="text-sm" icon={CiStar}>Development Result</Subdetail>                
                                <p className="font-main text-xs text-justify text-gray-400 leading-relaxed mb-2">
                                    {project.keyfeaturesdesc}
                                </p>  
                                <div className="flex flex-col items-start">
                                    {project.keyfeatures.map((keyfeatures, index) => {
                                        return(                                        
                                            <Subdetail key={index} textAlign="text-justify" padding="py-0 pr-2.5" fontWeight="font-normal" labelColor="text-gray-400" iconSize="text-xl" labelSize="text-xs" icon={BsCaretRight}>{keyfeatures}</Subdetail>
                                        )
                                    })}
                                </div>
                            </motion.div>

                        </motion.div>                
                </motion.div>                
                     
        </>
    )
}

export default Showdetail
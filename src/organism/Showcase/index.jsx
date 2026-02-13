import { CiBoxList } from "react-icons/ci"
import Subhead from "../../components/Subhead"
import { motion, AnimatePresence } from "framer-motion"
import Showcard from "@/components/Showcard";
import { useState } from "react";
import Showdetail from "@/components/Showdetail";
import showcase from "../../data/showcase"

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      // Memberikan jeda 0.2 detik antar elemen anak
      staggerChildren: 0.1, 
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { type: "spring", stiffness: 100 } 
  },
};

const Showcase = () => {
    const [selectedProject, setSelectedProject] = useState(null);   
    const [activeTab, setActiveTab] = useState("web");
    const filteredData = showcase.filter((item) => item.category === activeTab); 

    return (
        <>
            <div className="px-1 mt-8 mb-8 flex flex-col justify-center items-center w-full">                

                
                {!selectedProject && (
                    <motion.div layout variants={containerVariants} initial="hidden" animate="visible" exit="hidden" className="flex justify-between lg:max-w-2xl xs:max-w-full w-full mb-2.5">
                        <Subhead icon={CiBoxList }>Showcase</Subhead>

                        <motion.div variants={itemVariants} className="flex gap-2 p-1 bg-gray-100/50 w-fit rounded-lg border border-gray-200">
                            {["web", "design"].map((tab) => (
                                <button                                                                        
                                    key={tab}
                                    onClick={() => setActiveTab(tab)}
                                    className={`px-4 py-1.5 rounded-md text-xs font-main transition-colors duration-200 cursor-pointer border ${
                                    activeTab === tab
                                        ? "bg-white text-gray-900 border-gray-200"
                                        : "text-gray-400 border-transparent hover:text-gray-600"
                                    }`}
                                >
                                    {tab === "web" ? "Web App" : "Design"}
                                </button>
                            ))}
                        </motion.div>
                    </motion.div>                    
                )}                

                <AnimatePresence mode="wait">
                    {selectedProject ? (  
                        <motion.div 
                            key="condetail" 
                            variants={containerVariants} 
                            initial="hidden" 
                            animate="visible" 
                            exit="hidden"
                            className="flex flex-col gap-2.5 w-full max-w-full justify-left items-start "
                        >
                            <Showdetail 
                                key="detail"
                                variants={itemVariants}
                                project={selectedProject} 
                                onBack={() => setSelectedProject(null)}
                            />
                        </motion.div>
                    ) : (                      
                        <motion.div                           
                            key={`list-${activeTab}`}
                            variants={containerVariants} 
                            initial="hidden" 
                            animate="visible" 
                            exit="hidden"
                            className="flex flex-col w-full justify-left items-start "
                        >                                 

                            <Showcard 
                                key={activeTab}
                                data={filteredData}                               
                                variants={itemVariants} 
                                onSelect={(project) => setSelectedProject(project)} 
                            />
                        </motion.div>
                    )}
                </AnimatePresence>                

            </div>
        </>
    )
}    

export default Showcase
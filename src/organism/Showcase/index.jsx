import { CiBoxList } from "react-icons/ci"
import Subhead from "../../components/Subhead"
import { motion, AnimatePresence } from "framer-motion"
import Showcard from "@/components/Showcard";
import { useState } from "react";
import Showdetail from "@/components/Showdetail";



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

    return (
        <>
            <div className="px-4 mt-8 mb-8">
                <AnimatePresence mode="wait">
                  {selectedProject ? (  
                      <motion.div 
                          key="condetail" 
                          variants={containerVariants} 
                          initial="hidden" 
                          animate="visible" 
                          exit="hidden"
                          className="flex flex-col gap-2.5 w-fit justify-left items-start "
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
                          key="list" 
                          variants={containerVariants} 
                          initial="hidden" 
                          animate="visible" 
                          exit="hidden"
                          className="flex flex-col gap-2.5 w-fit justify-left items-start "
                      >
                          <Subhead icon={CiBoxList }>Showcase</Subhead>
                          <Showcard 
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
import Subhead from "../../components/Subhead"
import { motion } from "framer-motion"
import Expcard from "../../components/Expcard"
import { PiBriefcaseLight } from "react-icons/pi";

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

const Experience = () => {
    return (
        <>
            <motion.div variants={containerVariants} initial="hidden" animate="visible" className="w-full flex flex-col gap-2.5 justify-left items-start mt-8 lg:max-w-full xs:max-w-[90%] lg:px-2 xs:px-1">

                <motion.div variants={itemVariants}>
                    <Subhead icon={PiBriefcaseLight}>Experience</Subhead>                
                </motion.div>

                <Expcard variants={itemVariants}></Expcard>
            </motion.div>
        </>
    )
}

export default Experience
import Subhead from "../../components/Subhead"
import { motion } from "framer-motion"
import Schcard from "@/components/Schcard"
import { CiMedal } from "react-icons/ci"

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

const School = () => {
    return (
        <>
            <motion.div variants={containerVariants} initial="hidden" animate="visible" className="w-fit flex flex-col gap-2.5 justify-left items-start px-4 mt-8 mb-8">

                <motion.div variants={itemVariants}>
                    <Subhead icon={ CiMedal }>Education</Subhead>                                                              
                </motion.div>

                <Schcard variants={itemVariants}></Schcard>
            </motion.div>
        </>
    )
}

export default School
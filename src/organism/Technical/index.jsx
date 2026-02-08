import Techbadge from "@/components/Techbadge"
import { CiDesktopMouse1 } from "react-icons/ci"
import { motion } from "framer-motion"
import Subhead from "@/components/Subhead"

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

const Technical = () => {
    return (
        <>
            <motion.div variants={containerVariants} initial="hidden" animate="visible" className="w-fit flex flex-col gap-2.5 justify-left items-start px-4 mt-8 mb-8">

                <motion.div variants={itemVariants}>
                    <Subhead icon={ CiDesktopMouse1 }>Technical Skill</Subhead>                                                              
                </motion.div>

                <Techbadge variants={itemVariants}></Techbadge>
            </motion.div>
        </>
    )
}

export default Technical
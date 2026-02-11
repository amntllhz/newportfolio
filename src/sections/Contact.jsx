import Badge from "@/components/Badge"
import { motion } from "framer-motion"
import Talk from "../components/Talk"

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

const Contact = () => {
    return (
        <>
            <div className="w-full h-screen flex items-center justify-center">                
                <motion.div variants={containerVariants} initial="hidden" animate="visible" className="flex flex-col items-center gap-2 max-w-lg">
                    <Badge variants={itemVariants}>Available</Badge>                    
                    <motion.h1 variants={itemVariants} className="font-main font-semibold text-3xl text-gray-900">Maybe we can Talk</motion.h1>                                            
                    <motion.p variants={itemVariants} className="font-main text-xs text-gray-400 text-center leading-normal">
                        I'm currently available for new opportunities and collaborations. If you think my skills align with your needs, feel free to start a conversation everywhere
                    </motion.p>
                    <Talk variants={itemVariants}></Talk>
                </motion.div>                                    
            </div>
        </>
    )
}

export default Contact
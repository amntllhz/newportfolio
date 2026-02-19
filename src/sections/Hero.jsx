import Card from "../components/Card"
import { motion } from "framer-motion"


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

const Hero = () => {
    return (
        <>
            <motion.div initial="hidden" animate="visible" variants={containerVariants} className="w-full h-screen flex gap-6 items-center justify-center lg:flex-row xs:flex-col">                
                <Card variants={itemVariants}></Card> 
                <div className="flex flex-col gap-2 lg:max-w-lg xs:max-w-9/10">
                        <motion.h1 variants={itemVariants} className="font-main font-semibold lg:text-xl xs:text-md text-gray-900 lg:text-left xs:text-center dark:text-white">Halo, I'm M. Aldi Amanatullah Syahputra,</motion.h1> 
                        <motion.p variants={itemVariants} className="font-main text-xs text-gray-400 text-justify leading-normal dark:text-neutral-400">
                            A passionate individual with a deep enthusiasm for visual technology and modern design. As a 
                            <span className=" font-semibold text-gray-500/80 dark:text-neutral-100"> Front-end Web Developer, Graphic Designer,</span> and <span className="font-semibold text-gray-500/80 dark:text-neutral-100">UI Designer</span>, I focus on creating digital products that are not only functional but also visually balanced and aesthetically pleasing.
                        </motion.p>
                        <motion.p variants={itemVariants} className="font-main text-xs text-gray-400 text-justify leading-normal dark:text-neutral-400">
                            I always strive to deliver modern interfaces with seamless user experience, while keeping innovation and usability in harmony. I value teamwork highly, i believe collaboration creates more efficient and effective solutions.
                        </motion.p>                    
                </div>
            </motion.div>
        </>
    )
}

export default Hero
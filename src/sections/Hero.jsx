import Card from "../components/Card"
import { motion } from "framer-motion"
import { useTranslation } from "react-i18next";

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
    const { t } = useTranslation();

    return (
        <>
            <motion.div initial="hidden" animate="visible" variants={containerVariants} className="w-full h-screen flex gap-6 items-center justify-center lg:flex-row xs:flex-col">                
                <Card variants={itemVariants}></Card> 
                <div className="flex flex-col gap-2 lg:max-w-lg xs:max-w-9/10">
                        <motion.h1 variants={itemVariants} className="font-main font-semibold lg:text-xl xs:text-md text-gray-900 lg:text-left xs:text-center dark:text-white">
                          {t("hero.greeting")}
                        </motion.h1> 
                        <motion.p variants={itemVariants} className="font-main text-xs text-gray-400 text-justify leading-normal dark:text-neutral-400">
                            {t("hero.p1_start")}
                            <span className=" font-semibold text-gray-500/80 dark:text-neutral-100"> Front-end Web Developer, Graphic Designer, </span> 
                            {t("hero.p1_middle")}
                            <span className="font-semibold text-gray-500/80 dark:text-neutral-100"> UI Designer </span>
                            {t("hero.p1_end")}
                        </motion.p>
                        <motion.p variants={itemVariants} className="font-main text-xs text-gray-400 text-justify leading-normal dark:text-neutral-400">
                            {t("hero.p2")}
                        </motion.p>                    
                </div>
            </motion.div>
        </>
    )
}

export default Hero
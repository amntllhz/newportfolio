import Badge from "@/components/Badge"
import { motion } from "framer-motion"
import Talk from "../components/Talk"
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

const Contact = () => {
    const { t } = useTranslation();
    return (
        <>
            <div className="w-full h-screen flex items-center justify-center">                
                <motion.div variants={containerVariants} initial="hidden" animate="visible" className="flex flex-col items-center gap-2 lg:max-w-lg xs:max-w-[85%]">
                    <Badge variants={itemVariants}>{t("contact.status")}</Badge>                    
                    <motion.h1 variants={itemVariants} className="font-main text-center font-semibold text-3xl text-gray-900 dark:text-neutral-100">{t("contact.title")}</motion.h1>                                            
                    <motion.p variants={itemVariants} className="font-main text-xs text-gray-400 text-center leading-normal dark:text-neutral-400">
                        {t("contact.desc")}
                    </motion.p>
                    <Talk variants={itemVariants}></Talk>
                </motion.div>                                    
            </div>
        </>
    )
}

export default Contact
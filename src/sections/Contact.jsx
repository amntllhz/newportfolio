import { motion } from "framer-motion"
import Talk from "../components/Talk"
import { useTranslation } from "react-i18next";
import { ImagesBadge } from "@/components/ui/images-badge";
import Images1 from "../assets/weestaw/weestaw-car-5.webp"

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

const Images = [
  Images1
]

const Contact = () => {
    const { t } = useTranslation();
    return (
        <>
            <div className="w-full h-dvh flex items-center justify-center">                
                <motion.div variants={containerVariants} initial="hidden" animate="visible" className="flex flex-col items-center gap-2 lg:max-w-lg xs:max-w-[85%]">
                    <motion.div className="flex bg-gray-100 dark:bg-neutral-900 rounded-sm px-2 py-1" variants={itemVariants}>                      
                      <ImagesBadge 
                          images={Images} 
                          variants={itemVariants}
                          text={t("contact.cv")}
                          href="/cv.pdf"
                          target="_blank"
                          folderSize={{ width: 22, height: 16 }}
                          teaserImageSize={{ width: 14, height: 10 }}
                          hoverImageSize={{ width: 36, height: 24 }}
                          hoverTranslateY={-28}
                          hoverSpread={14}>
                      </ImagesBadge>
                    </motion.div>                    
                    <motion.h1 variants={itemVariants} className="font-main text-center font-semibold lg:text-3xl xs:text-2xl text-gray-900 dark:text-neutral-100">{t("contact.title")}</motion.h1>                                            
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
import Subhead from "../../components/Subhead"
import { motion } from "framer-motion"
import Schcard from "@/components/Schcard"
import { CiBank } from "react-icons/ci"
import { useTranslation } from "react-i18next"

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
    const { t } = useTranslation();
    return (
        <>
            <motion.div variants={containerVariants} initial="hidden" animate="visible" className="w-full flex flex-col gap-2.5 justify-left items-start mt-10 lg:mb-8 xs:mb-16 lg:max-w-full xs:max-w-[90%] lg:px-2 xs:px-1">

                <motion.div variants={itemVariants}>
                    <Subhead icon={ CiBank }>{t("subhead.school")}</Subhead>                                                              
                </motion.div>

                <Schcard variants={itemVariants}></Schcard>
            </motion.div>
        </>
    )
}

export default School
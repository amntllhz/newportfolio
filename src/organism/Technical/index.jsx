import Techbadge from "@/components/Techbadge"
import { motion } from "framer-motion"
import Subhead from "@/components/Subhead"
import { PiGraphLight, PiMouseMiddleClickLight } from "react-icons/pi";
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

const Technical = () => {
  const { t } = useTranslation();
  return (
    <>
      <motion.div variants={containerVariants} initial="hidden" animate="visible" className="w-full flex flex-col gap-2 justify-center items-center lg:max-w-full xs:max-w-[90%] lg:px-2 xs:px-1">
        <div className="flex flex-col gap-0.5 justify-center items-center lg:max-w-md xs:max-w-xs mb-3">
          <motion.h1 variants={itemVariants} className="font-main text-center font-semibold lg:text-xl xs:text-xl text-gray-900 dark:text-neutral-100">{t("subhead.technical")}</motion.h1>
          <motion.p variants={itemVariants} className="font-main text-xs text-gray-400 text-center leading-normal dark:text-neutral-400">{t("skill.techdesc")}</motion.p>
        </div>

        <Techbadge variants={itemVariants}></Techbadge>
      </motion.div>
    </>
  )
}

export default Technical
import OpenWork from "@/components/OpenWork";
import Card from "../components/Card"
import { motion } from "framer-motion"
import { useTranslation } from "react-i18next";
import BaseIn from "@/components/BaseIn";

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

      <motion.div initial="hidden" animate="visible" variants={containerVariants} className="w-full h-dvh flex lg:gap-6 xs:gap-3.5 items-center justify-center lg:flex-row xs:flex-col">

        <div className="lg:contents xs:flex xs:flex-row xs:items-center xs:gap-3 xs:w-full xs:max-w-9/10 lg:gap-0 lg:w-auto lg:max-w-none">
          <Card variants={itemVariants} />

          <div className="flex flex-col gap-1 lg:hidden">
            <motion.h1 variants={itemVariants} className="font-main font-semibold xs:text-md text-gray-900 dark:text-white">
              {t("hero.greeting")}
            </motion.h1>
            <motion.div variants={itemVariants} className="flex items-center gap-3.5">
              <BaseIn />
              <OpenWork />
            </motion.div>
          </div>
        </div>


        <div className="flex flex-col gap-1 lg:max-w-lg xs:max-w-9/10">
          <div className="flex flex-col space-y-1 mb-1.5 lg:block xs:hidden">
            <motion.h1 variants={itemVariants} className="font-main font-semibold lg:text-xl text-gray-900 lg:text-left dark:text-white">
              {t("hero.greeting")}
            </motion.h1>
            <motion.div variants={itemVariants} className="flex items-center gap-3.5 lg:justify-start">
              <BaseIn />
              <OpenWork />
            </motion.div>
          </div>
          <motion.p variants={itemVariants} className="font-main text-xs text-gray-400 text-justify leading-normal dark:text-neutral-400">
            {t("hero.p1_start")}
            <span className="font-semibold text-gray-500/80 dark:text-neutral-100"> Web Developer </span>
            {t("hero.p1_middle")}
            <span className="font-semibold text-gray-500/80 dark:text-neutral-100"> Graphic Designer </span>
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
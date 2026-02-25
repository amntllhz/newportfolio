import { Button } from "@/components/ui/button"
import { useTranslation } from 'react-i18next'
import { motion, AnimatePresence } from "framer-motion"

export function LanguageToggle() {
  const { i18n } = useTranslation();
  const currentLang = i18n.language.split('-')[0];

  const toggleLanguage = () => {
    const newLang = currentLang === 'en' ? 'id' : 'en';
    i18n.changeLanguage(newLang);
  };

  return (
    <Button
      variant="secondary"
      size="icon"
      onClick={toggleLanguage}
      // Samakan persis dengan class ModeToggle kamu
      className="bg-gray-100 dark:bg-neutral-900 cursor-pointer"
    >
      <AnimatePresence mode="wait">
        <motion.span
          key={currentLang}
          initial={{ y: 5, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -5, opacity: 0 }}
          transition={{ duration: 0.1 }}
          className="text-xs font-bold text-gray-400 dark:text-neutral-400"
        >
          {currentLang.toUpperCase()}
        </motion.span>
      </AnimatePresence>
    </Button>
  )
}
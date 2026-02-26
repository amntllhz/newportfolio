import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Settings, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { LanguageToggle } from "@/components/LanguageToggle";
import { ModeToggle } from "@/components/ModeToggle";

const menuVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1, // Otomatis mengatur jeda antar anak
      delayChildren: 0.03,
    },
  },
  exit: { 
    opacity: 0,
    transition: { staggerChildren: 0.03, staggerDirection: -1 } // Keluar satu per satu terbalik
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20, scale: 0.8 },
  visible: { 
    opacity: 1, 
    y: 0, 
    scale: 1,
    transition: { type: "spring", stiffness: 400, damping: 25 } 
  },
  exit: { opacity: 0, y: 10, scale: 0.8 }
};

const SettingsFAB = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    // Container tetap di pojok
    <div className="fixed bottom-4 right-5 z-99 flex flex-col items-center gap-3">
      
      {/* Menu Pop-up ke Atas */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            variants={menuVariants} // Mengacu ke objek di atas
            initial="hidden"
            animate="visible"
            exit="exit"
            className="flex flex-col gap-3"
          >
            {/* 2. Setiap anak tinggal pakai itemVariants */}
            <motion.div variants={itemVariants}>
              <LanguageToggle />
            </motion.div>
            
            <motion.div variants={itemVariants}>
              <ModeToggle />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Tombol Utama (Setting) - Dibuat Identik */}
      <Button
        variant="secondary"
        size="icon"
        onClick={() => setIsOpen(!isOpen)}
        className="bg-gray-100 dark:bg-neutral-900 cursor-pointer"
      >
        <motion.div
          animate={{ rotate: isOpen ? 90 : 0 }}
          transition={{ type: "spring", stiffness: 300, damping: 15 }}
        >
          {isOpen ? (
            <X className="h-[1.2rem] w-[1.2rem] text-gray-400 dark:text-neutral-400" />
          ) : (
            <Settings className="h-[1.2rem] w-[1.2rem] text-gray-400 dark:text-neutral-400" />
          )}
        </motion.div>
      </Button>
    </div>
  );
};

export default SettingsFAB;
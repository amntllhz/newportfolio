import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Settings, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { LanguageToggle } from "@/components/LanguageToggle";
import { ModeToggle } from "@/components/ModeToggle";

const SettingsFAB = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    // Container tetap di pojok
    <div className="fixed bottom-4 right-5 z-99 flex flex-col items-center gap-3">
      
      {/* Menu Pop-up ke Atas */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            className="flex flex-col gap-3"
          >
            <LanguageToggle />
            <ModeToggle />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Tombol Utama (Setting) - Dibuat Identik */}
      <Button
        variant="secondary"
        size="icon"
        onClick={() => setIsOpen(!isOpen)}
        className="bg-gray-100 dark:bg-neutral-900 cursor-pointer shadow-md"
      >
        <motion.div
          animate={{ rotate: isOpen ? 90 : 0 }}
          transition={{ type: "spring", stiffness: 200, damping: 15 }}
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
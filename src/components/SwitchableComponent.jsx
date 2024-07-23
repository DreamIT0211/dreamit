import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Team from "./Team";
import Intern from "./Intern";

const SwitchableComponent = () => {
  const [showTeam, setShowTeam] = useState(true);

  return (
    <div className="h-auto mt-28 md:mb-48 mb-4 md:pb-0 lg:pb-0 pb-[700px] flex justify-center items-center bg-white select-none relative">
      <AnimatePresence initial={false}>
        {showTeam ? (
          <motion.div
            key="team"
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 100 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="absolute h-auto w-full"
          >
            <Team onSwitch={() => setShowTeam(false)} />
          </motion.div>
        ) : (
          <motion.div
            key="intern"
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="absolute h-auto w-full"
          >
            <Intern onSwitch={() => setShowTeam(true)} />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default SwitchableComponent;

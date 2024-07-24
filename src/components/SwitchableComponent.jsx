import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Team from "./Team";
import Developer from "./Developer";
import Intern from "./Intern";

const SwitchableComponent = () => {
  const [currentComponent, setCurrentComponent] = useState("team");

  return (
    <div className="h-auto mt-28 md:mb-48 mb-4 md:pb-0 lg:pb-0 pb-[700px] flex justify-center items-center bg-white select-none relative">
      <AnimatePresence initial={false}>
        {currentComponent === "team" && (
          <motion.div
            key="team"
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 100 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="absolute h-auto w-full"
          >
            <Team
              onSwitchToDev={() => setCurrentComponent("developer")}
              onSwitchToIntern={() => setCurrentComponent("intern")}
            />
          </motion.div>
        )}
        {currentComponent === "developer" && (
          <motion.div
            key="developer"
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="absolute h-auto w-full"
          >
            <Developer
              onSwitchToTeam={() => setCurrentComponent("team")}
              onSwitchToIntern={() => setCurrentComponent("intern")}
            />
          </motion.div>
        )}
        {currentComponent === "intern" && (
          <motion.div
            key="intern"
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="absolute h-auto w-full"
          >
            <Intern
              onSwitchToTeam={() => setCurrentComponent("team")}
              onSwitchToDev={() => setCurrentComponent("developer")}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default SwitchableComponent;

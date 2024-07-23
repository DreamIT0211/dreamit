import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import cknews from "../assets/work/cknews.jpg";
import gpmcnews from "../assets/work/gpmcnews.jpg";
import gtvknews from "../assets/work/gtvknews.jpg";
import redchillez from "../assets/work/redchillez.jpg";
import revivalpharmacy from "../assets/work/revivalpharmacy.jpg";
import vmtdakor from "../assets/work/vmtdakor.png";
import { useInView } from "react-intersection-observer";

const ourWorks = [
  {
    id: 1,
    title: "Charotar Kheda News",
    subtitle: "News",
    image: cknews,
    description:
      "This is a website made by DreamIT Infotech Private Limited. All rights reserved. This site is of Charotar Kheda News.",
  },
  {
    id: 2,
    title: "Gujarat Press and Media Club",
    subtitle: "Media",
    image: gpmcnews,
    description:
      "This is a website made by DreamIT Infotech Private Limited. All rights reserved. This site is of Gujarat Press and Media Club.",
  },
  {
    id: 3,
    title: "Gatividhi Kapadvanj News",
    subtitle: "News",
    image: gtvknews,
    description:
      "This is a website made by DreamIT Infotech Private Limited. All rights reserved. This site is of Gatividhi Kapadvanj News.",
  },
  {
    id: 4,
    title: "Red Chillez Indian Cuisine",
    subtitle: "Cuisine",
    image: redchillez,
    description:
      "This is a website made by DreamIT Infotech Private Limited. All rights reserved. This site is of Red Chillez Indian Cuisine.",
  },
  {
    id: 5,
    title: "Revival Pharmacy",
    subtitle: "Pharmacy",
    image: revivalpharmacy,
    description:
      "This is a website made by DreamIT Infotech Private Limited. All rights reserved. This site is of Revival Pharmacy.",
  },
  {
    id: 6,
    title: "Shri Vishwakarma Mandir Dakor",
    subtitle: "Temple",
    image: vmtdakor,
    description:
      "This is a website made by DreamIT Infotech Private Limited. All rights reserved. This site is of Shri Vishwakarma Mandir Dakor.",
  },
];

const containerVariants = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
};

const Work = () => {
  const [selectedId, setSelectedId] = useState(null);
  const [fullScreenImage, setFullScreenImage] = useState(null);
  const { ref: sectionRef, inView } = useInView({
    triggerOnce: false,
    threshold: 0.3,
  });
  const selectedWork = ourWorks.find((item) => item.id === selectedId);

  const openFullScreen = (image) => {
    setFullScreenImage(image);
  };

  const closeFullScreen = () => {
    setFullScreenImage(null);
  };

  return (
    <div
      ref={sectionRef}
      className="p-10 bg-gray-50 flex flex-col justify-center items-center"
    >
      <h1 className="text-4xl font-bold text-gray-900 mb-10">Our Work</h1>

      <motion.div
        className="grid grid-cols-1 md:grid-cols-3 gap-8"
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
      >
        {ourWorks.map((item) => (
          <motion.div
            key={item.id}
            layoutId={item.id}
            onClick={() => setSelectedId(item.id)}
            variants={itemVariants}
            className="flex flex-col items-center p-4 bg-white rounded-xl shadow-xl transition duration-700 group hover:shadow-[0_35px_60px_-15px_rgba(171,71,188,0.3)]"
          >
            <img
              src={item.image}
              alt={item.title}
              onClick={(e) => {
                e.stopPropagation();
                openFullScreen(item.image);
              }}
              className="w-64 h-32 rounded-xl shadow-inner mb-4 transition duration-700 group-hover:scale-105 ease-in-out cursor-pointer"
            />
            <motion.h5 className="text-xl font-semibold text-gray-800 transition duration-500 group-hover:text-purple-400">
              {item.subtitle}
            </motion.h5>
            <motion.h2 className="text-md font-medium text-cyan-600">
              {item.title}
            </motion.h2>
          </motion.div>
        ))}
      </motion.div>

      <AnimatePresence>
        {selectedId && selectedWork && (
          <motion.div
            layoutId={selectedId}
            className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50 z-50"
          >
            <motion.div className="flex flex-col p-8 bg-white rounded-xl shadow-xl text-center md:flex-row">
              <div className="flex flex-col justify-center items-center md:hidden mb-4">
                <motion.h5 className="text-xl font-semibold mb-2">
                  {selectedWork.subtitle}
                </motion.h5>
                <img
                  src={selectedWork.image}
                  alt={selectedWork.title}
                  onClick={(e) => {
                    e.stopPropagation();
                    openFullScreen(selectedWork.image);
                  }}
                  className="w-64 h-32 rounded-xl shadow-inner mb-2 transition duration-700 ease-in-out cursor-pointer"
                />
                <motion.h2 className="text-2xl font-bold mb-2">
                  {selectedWork.title}
                </motion.h2>
                <motion.p className="text-gray-600 mb-4">
                  {selectedWork.description}
                </motion.p>
                <motion.button
                  onClick={() => setSelectedId(null)}
                  className="px-4 py-2 bg-cyan-600 font-semibold text-white rounded hover:bg-cyan-500 transition duration-300"
                >
                  Close
                </motion.button>
              </div>

              <div className="hidden md:flex md:flex-row md:items-center">
                <img
                  src={selectedWork.image}
                  alt={selectedWork.title}
                  className="w-64 h-32 md:w-96 md:h-auto rounded-xl shadow-inner mb-4 md:mb-0 md:mr-8 transition duration-700 ease-in-out cursor-pointer"
                  onClick={(e) => {
                    e.stopPropagation();
                    openFullScreen(selectedWork.image);
                  }}
                />
                <div className="flex flex-col justify-center items-center">
                  <motion.h5 className="text-xl font-semibold mb-4">
                    {selectedWork.subtitle}
                  </motion.h5>
                  <motion.h2 className="text-2xl font-bold mb-4">
                    {selectedWork.title}
                  </motion.h2>
                  <motion.p className="text-gray-600 mb-8">
                    {selectedWork.description}
                  </motion.p>
                  <motion.button
                    onClick={() => setSelectedId(null)}
                    className="px-4 py-2 bg-cyan-600 font-semibold text-white rounded hover:bg-cyan-500 transition duration-300"
                  >
                    Close
                  </motion.button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}

        {fullScreenImage && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-90 flex justify-center items-center z-50"
            onClick={closeFullScreen}
          >
            <img
              src={fullScreenImage}
              alt="Full screen"
              className="max-w-full max-h-full object-contain cursor-pointer"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Work;

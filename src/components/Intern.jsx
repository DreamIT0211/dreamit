// Intern Component
import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Palak from "../assets/team/palak.jpg"; 
import Shreya from "../assets/team/shreya.jpg"; 
import Sushil from "../assets/team/susil.jpg"; 
import Deeprajsinh from "../assets/team/zala.jpg"; 
import Ravi from "../assets/team/ravi.jpg"; 

const container = {
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

const item = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
};

const Intern = ({ onSwitch }) => {
  const { ref: sectionRef, inView } = useInView({
    triggerOnce: false,
    threshold: 0.3,
  });

  const teamMembers = [
    {
      name: "Ms. Palak Patel",
      title: "Project Intern",
      image: Palak,
    },
    {
      name: "Ms. Shreya Patel",
      title: "Project Intern",
      image: Shreya,
    },
    {
      name: "Mr Sushil Yadav",
      title: "Project Intern",
      image: Sushil,
    },
    {
      name: "Mr Deeprajsinh Zala",
      title: "Project Intern",
      image: Deeprajsinh,
    },
    {
      name: "Mr. Ravi Parmar",
      title: "Project Intern",
      image: Ravi,
    },
  ];

  return (
    <div
      ref={sectionRef}
      className="bg-white h-auto flex flex-col justify-center items-center p-5"
    >
      <h1 className="text-4xl mb-8 font-bold text-gray-900">Our Interns</h1>

      <motion.div
        className="grid grid-cols-1 md:grid-cols-5 gap-8 mt-5"
        variants={container}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
      >
        {teamMembers.map((member, index) => (
          <motion.div
            key={index}
            variants={item}
            className="flex flex-col items-center p-4 bg-white rounded-xl shadow-lg hover:shadow-[0_35px_60px_-15px_rgba(171,71,188,0.3)] transition duration-700 group"
          >
            <img
              src={member.image}
              alt={member.name}
              className="w-32 h-32 rounded-xl  mb-4 transition duration-700 ease-in-out group-hover:scale-105"
            />
            <p className="text-xl font-semibold text-center text-gray-800 transition duration-500 group-hover:text-purple-400">
              {member.name}
            </p>
            <p className="text-md font-medium text-cyan-600">{member.title}</p>
          </motion.div>
        ))}
      </motion.div>
      <button
        onClick={onSwitch}
        className="mt-10 px-4 py-2 bg-cyan-600 font-semibold text-white rounded hover:bg-cyan-500 transition duration-300"
      >
        Our Team
      </button>
    </div>
  );
};

export default Intern;

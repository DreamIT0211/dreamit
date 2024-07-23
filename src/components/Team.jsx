// Team Component
import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import ceo from "../assets/team/CEO.jpg";
import cofounder from "../assets/team/cofounder.jpg";
import manager from "../assets/team/dp.jpg";
import prem from "../assets/team/prem.jpg";
import siddharth from "../assets/team/sid.jpg";

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

const Team = ({ onSwitch }) => {
  const { ref: sectionRef, inView } = useInView({
    triggerOnce: false,
    threshold: 0.3,
  });

  const teamMembers = [
    {
      name: "Mr. Vipul J Patel",
      title: "Founder",
      image: ceo,
      description:
        "Greetings from DreamITInfotech! I'm thrilled to lead our team in crafting innovative solutions. Join us on this exciting journey of transforming visions into reality.",
    },
    {
      name: "Mr. Rohan V Patel",
      title: "Co-Founder",
      image: cofounder,
      description:
        "Hello from DreamITInfotech! Excited to steer our team in creating innovative solutions. Come join us on this thrilling journey of turning visions into reality.",
    },
    {
      name: "Mr. Darpan Patel",
      title: "Manager",
      image: manager,
      description:
        "Hello Team, I'm very excited to lead DreamITInfotech using my great vision. Let's achieve great and wonderful success together! with lots of fun.",
    },
    // {
    //   name: "Mr. Siddharth Sutariya",
    //   title: "Full Stack Developer",
    //   image: siddharth,
    //   description:
    //     "Hi, I'm Siddharth Sutariya. As a Full Stack Developer at DreamITInfotech, I am passionate about building robust and scalable applications. Let's innovate together and push the boundaries of technology.",
    // },
    // {
    //   name: "Mr. Prem Patel",
    //   title: "Full Stack Developer",
    //   image: prem,
    //   description:
    //     "Greetings! I'm Prem Patel, a Full Stack Developer at DreamITInfotech. I love crafting seamless and efficient user experiences. Excited to be part of this team and transform ideas into impactful solutions.",
    // },
  ];

  return (
    <div
      ref={sectionRef}
      className="p-5 bg-white h-auto flex flex-col justify-center items-center"
    >
      <h1 className="text-4xl font-bold text-gray-900">Our Team</h1>

      <motion.div
        className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10"
        variants={container}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
      >
        {teamMembers.map((member, index) => (
          <motion.div
            key={index}
            variants={item}
            className="flex flex-col items-center p-4 bg-white rounded-xl shadow-xl transition duration-700 group  hover:shadow-[0_35px_60px_-15px_rgba(171,71,188,0.3)]"
          >
            <img
              src={member.image}
              alt={member.name}
              className="w-32 h-32 rounded-xl shadow-inner  mb-4 transition duration-700 group-hover:scale-105 ease-in-out"
            />
            <p className="text-xl font-semibold text-gray-800 transition duration-500 group-hover:text-purple-400">
              {member.name}
            </p>
            <p className="text-md font-medium text-cyan-600">{member.title}</p>
            <p className="text-justify text-gray-600 mt-4">
              {member.description}
            </p>
          </motion.div>
        ))}
      </motion.div>
      <button
        onClick={onSwitch}
        className="mt-10 px-4 py-2 bg-cyan-600 font-semibold text-white rounded hover:bg-cyan-500 transition duration-300"
      >
        Our Interns
      </button>
    </div>
  );
};

export default Team;

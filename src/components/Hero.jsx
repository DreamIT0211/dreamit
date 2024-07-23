import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import websites from "../assets/hero/responsive.svg";
import hosting from "../assets/hero/hosting.svg";
import mobile from "../assets/hero/mobile.svg";
import seo from "../assets/hero/seo.svg";
import graphics from "../assets/hero/graphics.svg";

const quotes = [
  {
    text: "We build responsive websites",
    image: websites,
    description:
      "Our websites adapt to any device, ensuring a seamless experience for all users.",
  },
  {
    text: "We provide reliable hosting",
    image: hosting,
    description:
      "Our hosting services guarantee uptime and fast loading speeds.",
  },
  {
    text: "We create mobile applications",
    image: mobile,
    description:
      "Our mobile apps are designed to provide an intuitive user experience.",
  },
  {
    text: "We optimize for SEO",
    image: seo,
    description:
      "Our SEO strategies improve your visibility and search engine rankings.",
  },
  {
    text: "We design stunning graphics and brand logo",
    image: graphics,
    description:
      "Our graphic designs are creative, professional, and impactful.",
  },
];

const Hero = () => {
  const [currentQuote, setCurrentQuote] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [displayedDescription, setDisplayedDescription] = useState("");

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentQuote((prev) => (prev + 1) % quotes.length);
    }, 6000);
    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    const quote = quotes[currentQuote].text;
    const description = quotes[currentQuote].description;
    let index = 0;
    setDisplayedDescription("");
    const typeIntervalId = setInterval(() => {
      setDisplayedText(quote.slice(0, index + 1));
      if (index === quote.length) {
        setDisplayedDescription(description);
        clearInterval(typeIntervalId);
      }
      index++;
    }, 80);
    return () => clearInterval(typeIntervalId);
  }, [currentQuote]);

  return (
    <>
      <div className="relative h-[500px] w-full overflow-hidden flex flex-col sm:flex-row items-center justify-center select-none">
        <motion.div
          className="bg-gradient-to-r from-blue-500 to-purple-600 h-[500px] w-full sm:w-full relative z-10 flex flex-col sm:flex-row items-center"
          animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
          transition={{ duration: 30, ease: "linear", repeat: Infinity }}
          style={{ backgroundSize: "200% 200%" }}
        >
          <motion.div
            className="shadow-lg bg-gradient-to-r from-blue-300 to-blue-500 h-[700px] w-1/2 rounded-[150px] rotate-45 absolute -ml-[290px] mt-[50px] left-0 bottom-0 top-0 hidden sm:block"
            animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
            transition={{ duration: 30, ease: "linear", repeat: Infinity }}
            style={{ backgroundSize: "200% 200%" }}
          ></motion.div>
          <motion.div
            className="shadow-lg bg-gradient-to-r from-orange-300 to-red-400 h-[400px] w-[400px] rounded-[75px] rounded-tl-none rotate-45 absolute -ml-[200px] mt-[200px] left-0 hidden sm:block"
            animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
            transition={{ duration: 30, ease: "linear", repeat: Infinity }}
            style={{ backgroundSize: "200% 200%" }}
          ></motion.div>
          <div className="relative z-20 w-full flex flex-col sm:flex-row items-center justify-between px-4 sm:px-10">
            <motion.img
              key={quotes[currentQuote].image}
              src={quotes[currentQuote].image}
              alt="Hero Image"
              initial={{ opacity: 0, x: 100, scale: 0.5 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, x: -100, scale: 0.5 }}
              transition={{ duration: 0.5 }}
              className="h-[200px] sm:h-[500px] w-auto rounded-2xl mb-4 sm:mb-0 sm:mr-10"
            />
            <div className="text-white text-xl sm:text-4xl font-bold w-full sm:w-1/2 ml-4 sm:ml-10 text-center sm:text-left">
              <span className="text-stroke-black">{displayedText}</span>
              <AnimatePresence>
                {displayedDescription && (
                  <motion.p
                    key={displayedDescription}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.5 }}
                    className="mt-4 text-white text-sm sm:text-lg"
                  >
                    {displayedDescription}
                  </motion.p>
                )}
              </AnimatePresence>
            </div>
          </div>
        </motion.div>
      </div>
      {/* <motion.div
        className="absolute w-full h-[69px] top-0 left-0 -ml-2 bg-gradient-to-r from-blue-200 to-purple-300 -rotate-2 -mb-10 z-0 hidden sm:block"
        animate={{ backgroundPosition: ["100% 50%", "0% 50%", "100% 50%"] }}
        transition={{ duration: 10, ease: "linear", repeat: Infinity }}
        style={{ backgroundSize: "200% 200%" }}
      ></motion.div>
      <motion.div
        className="w-full h-[68px] right-0 ml-3 bg-gradient-to-r from-blue-500 to-purple-600 rotate-3 -mt-14 hidden sm:block"
        animate={{ backgroundPosition: ["100% 50%", "0% 50%", "100% 50%"] }}
        transition={{ duration: 10, ease: "linear", repeat: Infinity }}
        style={{ backgroundSize: "200% 200%" }}
      ></motion.div> */}
    </>
  );
};

export default Hero;

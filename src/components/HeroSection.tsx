import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const titles = ["AI Developer", "Researcher", "Graphics Designer"];

const HeroSection = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((i) => (i + 1) % titles.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="min-h-[75svh] flex flex-col items-center justify-center text-center container-main">
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
        className="text-5xl md:text-7xl font-semibold tracking-tighter text-foreground"
      >
        Abdul Hannan Rakib Dalal
      </motion.h1>

      <div className="h-12 mt-6 flex items-center justify-center overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.h2
            key={titles[index]}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.35, ease: "easeInOut" }}
            className="text-xl md:text-2xl font-medium text-primary"
          >
            {titles[index]}
          </motion.h2>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default HeroSection;

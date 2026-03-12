import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, Phone, MapPin } from "lucide-react";
import AnimatedCounter from "./AnimatedCounter";
import { stats } from "@/data/portfolio";

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
    <section className="min-h-[80svh] flex flex-col items-center justify-center text-center container-main py-12">
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
        className="text-5xl md:text-7xl font-semibold tracking-tighter text-foreground"
      >
        Abdul Hannan Rakib Dalal
      </motion.h1>

      <div className="h-12 mt-4 flex items-center justify-center overflow-hidden">
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

      {/* Short description */}
      <motion.p
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="mt-4 text-muted-foreground max-w-2xl leading-relaxed text-base md:text-lg"
      >
        An Artificial Intelligence and Data Science undergraduate at Vishwakarma University, Pune,
        focused on AI systems, machine learning, IoT-based solutions, and research innovation.
      </motion.p>

      {/* Contact info */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.45 }}
        className="mt-6 flex flex-wrap items-center justify-center gap-5 text-sm text-muted-foreground"
      >
        <a href="mailto:dalalabdulhannan@gmail.com" className="flex items-center gap-1.5 hover:text-foreground transition-colors">
          <Mail size={15} className="text-primary" /> dalalabdulhannan@gmail.com
        </a>
        <span className="flex items-center gap-1.5">
          <Phone size={15} className="text-primary" /> +91 8421704953
        </span>
        <span className="flex items-center gap-1.5">
          <MapPin size={15} className="text-primary" /> Pune, Maharashtra, India
        </span>
      </motion.div>

      {/* Stats inline */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        className="mt-10 w-full"
      >
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-5">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              whileHover={{
                scale: 1.03,
                boxShadow: "0 0 0 1px rgba(0,0,0,.07), 0 4px 12px -2px rgba(0,0,0,.12)",
              }}
              className="bg-card rounded-xl p-5 text-center shadow-[0_0_0_1px_rgba(0,0,0,.05),0_1px_2px_0_rgba(0,0,0,.05)] cursor-default will-change-transform transition-shadow duration-200"
            >
              <div className="text-3xl md:text-4xl font-bold text-primary">
                <AnimatedCounter value={s.value} suffix={s.suffix} />
              </div>
              <p className="mt-2 label-style text-muted-foreground">{s.label}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;

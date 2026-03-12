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
      <h1 className="text-5xl md:text-7xl font-semibold tracking-tighter text-foreground">
        Abdul Hannan Rakib Dalal
      </h1>

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
      <p className="mt-4 text-muted-foreground max-w-2xl leading-relaxed text-base md:text-lg">
        An Artificial Intelligence and Data Science undergraduate at Vishwakarma University, Pune,
        focused on AI systems, machine learning, IoT-based solutions, and research innovation.
      </p>

      {/* Contact info */}
      <div className="mt-6 flex flex-wrap items-center justify-center gap-5 text-sm text-muted-foreground">
        <a href="mailto:dalalabdulhannan@gmail.com" className="flex items-center gap-1.5 hover:text-foreground transition-colors">
          <Mail size={15} className="text-primary" /> dalalabdulhannan@gmail.com
        </a>
        <span className="flex items-center gap-1.5">
          <Phone size={15} className="text-primary" /> +91 8421704953
        </span>
        <span className="flex items-center gap-1.5">
          <MapPin size={15} className="text-primary" /> Pune, Maharashtra, India
        </span>
      </div>

      {/* Stats inline - no animation, visible immediately */}
      <div className="mt-10 w-full">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-5">
          {stats.map((s) => (
            <div
              key={s.label}
              className="bg-card rounded-xl p-5 text-center shadow-[0_0_0_1px_rgba(0,0,0,.05),0_1px_2px_0_rgba(0,0,0,.05)] cursor-default will-change-transform transition-shadow duration-200 hover:shadow-[0_0_0_1px_rgba(0,0,0,.07),0_4px_12px_-2px_rgba(0,0,0,.12)] hover:scale-[1.03]"
            >
              <div className="text-3xl md:text-4xl font-bold text-primary">
                {s.value}{s.suffix}
              </div>
              <p className="mt-2 text-xs font-medium tracking-wide uppercase text-muted-foreground">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

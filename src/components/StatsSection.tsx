import { motion } from "framer-motion";
import AnimatedCounter from "./AnimatedCounter";
import { stats } from "@/data/portfolio";
import SectionWrapper from "./SectionWrapper";

const StatsSection = () => (
  <SectionWrapper className="section-spacing">
    <div className="container-main">
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
        {stats.map((s, i) => (
          <motion.div
            key={s.label}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.1, ease: [0.25, 0.1, 0.25, 1] }}
            whileHover={{
              scale: 1.03,
              boxShadow: "0 0 0 1px rgba(0,0,0,.07), 0 4px 12px -2px rgba(0,0,0,.12)",
            }}
            className="bg-card rounded-xl p-6 text-center shadow-[0_0_0_1px_rgba(0,0,0,.05),0_1px_2px_0_rgba(0,0,0,.05)] cursor-default will-change-transform transition-shadow duration-200"
          >
            <div className="text-3xl md:text-4xl font-bold text-primary">
              <AnimatedCounter value={s.value} suffix={s.suffix} />
            </div>
            <p className="mt-2 label-style text-muted-foreground">{s.label}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </SectionWrapper>
);

export default StatsSection;

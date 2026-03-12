import { motion } from "framer-motion";
import { ReactNode } from "react";

const SectionWrapper = ({ children, className = "" }: { children: ReactNode; className?: string }) => (
  <motion.section
    initial={{ opacity: 0, y: 16 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.2 }}
    transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
    className={className}
  >
    {children}
  </motion.section>
);

export default SectionWrapper;

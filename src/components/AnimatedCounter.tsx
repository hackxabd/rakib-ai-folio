import { useEffect, useRef, useState } from "react";
import { motion, useInView, animate } from "framer-motion";

interface Props {
  value: number;
  suffix?: string;
}

const AnimatedCounter = ({ value, suffix = "" }: Props) => {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    const controls = animate(0, value, {
      duration: 1.5,
      ease: "circOut",
      onUpdate: (v) => setDisplay(Math.round(v)),
    });
    return () => controls.stop();
  }, [isInView, value]);

  return (
    <motion.span ref={ref} className="tabular-nums">
      {display}{suffix}
    </motion.span>
  );
};

export default AnimatedCounter;

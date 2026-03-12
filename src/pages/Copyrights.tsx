import { motion } from "framer-motion";
import { copyrights } from "@/data/portfolio";
import SectionWrapper from "@/components/SectionWrapper";
import { FileCheck } from "lucide-react";

const Copyrights = () => (
  <div className="section-spacing">
    <div className="container-main">
      <SectionWrapper>
        <h1 className="text-4xl md:text-5xl font-semibold tracking-tighter text-foreground">Copyrights</h1>
        <p className="mt-3 text-muted-foreground max-w-2xl">Intellectual property works and registered copyrights.</p>
      </SectionWrapper>

      <div className="mt-12 space-y-5">
        {copyrights.map((c, i) => (
          <motion.article
            key={i}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.1, ease: [0.25, 0.1, 0.25, 1] }}
            whileHover={{
              scale: 1.01,
              boxShadow: "0 0 0 1px rgba(0,0,0,.07), 0 4px 12px -2px rgba(0,0,0,.12)",
            }}
            className="bg-card rounded-xl p-6 shadow-[0_0_0_1px_rgba(0,0,0,.05),0_1px_2px_0_rgba(0,0,0,.05)] will-change-transform transition-all duration-200"
          >
            <div className="flex items-start gap-3">
              <FileCheck size={20} className="mt-1 text-primary flex-shrink-0" />
              <div>
                <h2 className="text-lg font-semibold text-foreground leading-snug">{c.title}</h2>
                <span className={`mt-3 inline-block label-style px-2.5 py-1 rounded-full ${
                  c.status === "Granted"
                    ? "bg-accent text-primary"
                    : "bg-secondary text-muted-foreground"
                }`}>
                  {c.status} · {c.year}
                </span>
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </div>
  </div>
);

export default Copyrights;

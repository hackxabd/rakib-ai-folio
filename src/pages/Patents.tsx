import { motion } from "framer-motion";
import { patents } from "@/data/portfolio";
import SectionWrapper from "@/components/SectionWrapper";
import { Shield } from "lucide-react";

const Patents = () => (
  <div className="section-spacing">
    <div className="container-main">
      <SectionWrapper>
        <h1 className="text-4xl md:text-5xl font-semibold tracking-tighter text-foreground">Patents</h1>
        <p className="mt-3 text-muted-foreground max-w-2xl">Innovations in AI, security, and distributed systems.</p>
      </SectionWrapper>

      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-5">
        {patents.map((p, i) => (
          <motion.article
            key={i}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.1, ease: [0.25, 0.1, 0.25, 1] }}
            whileHover={{
              scale: 1.02,
              boxShadow: "0 0 0 1px rgba(0,0,0,.07), 0 4px 12px -2px rgba(0,0,0,.12)",
            }}
            className="bg-card rounded-xl p-6 shadow-[0_0_0_1px_rgba(0,0,0,.05),0_1px_2px_0_rgba(0,0,0,.05)] will-change-transform transition-all duration-200"
          >
            <div className="flex items-start gap-3">
              <Shield size={20} className="mt-1 text-primary flex-shrink-0" />
              <div>
                <h2 className="text-lg font-semibold text-foreground leading-snug">{p.title}</h2>
                <p className="mt-2 text-sm text-muted-foreground">{p.inventors}</p>
                <span className="mt-2 inline-block label-style text-primary bg-accent px-2.5 py-1 rounded-full">
                  {p.status} · {p.year}
                </span>
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </div>
  </div>
);

export default Patents;

import { motion } from "framer-motion";
import { publications } from "@/data/portfolio";
import SectionWrapper from "@/components/SectionWrapper";
import { ExternalLink } from "lucide-react";

const Publications = () => (
  <div className="section-spacing">
    <div className="container-main">
      <SectionWrapper>
        <h1 className="text-4xl md:text-5xl font-semibold tracking-tighter text-foreground">Publications</h1>
        <p className="mt-3 text-muted-foreground max-w-2xl">Peer-reviewed research contributions across AI, IoT, and education technology.</p>
      </SectionWrapper>

      <div className="mt-12 space-y-5">
        {publications.map((pub, i) => (
          <motion.article
            key={i}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.08, ease: [0.25, 0.1, 0.25, 1] }}
            whileHover={{
              scale: 1.01,
              boxShadow: "0 0 0 1px rgba(0,0,0,.07), 0 4px 12px -2px rgba(0,0,0,.12)",
            }}
            className="bg-card rounded-xl p-6 shadow-[0_0_0_1px_rgba(0,0,0,.05),0_1px_2px_0_rgba(0,0,0,.05)] will-change-transform transition-all duration-200"
          >
            <h2 className="text-lg font-semibold text-foreground leading-snug">{pub.title}</h2>
            <p className="mt-2 text-sm text-muted-foreground">{pub.authors}</p>
            <p className="mt-1 text-sm text-muted-foreground">{pub.journal} · {pub.year}</p>
            <a
              href={pub.doi}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:underline transition-colors"
            >
              View DOI <ExternalLink size={13} />
            </a>
          </motion.article>
        ))}
      </div>
    </div>
  </div>
);

export default Publications;

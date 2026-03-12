import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Award, BadgeCheck, Folder } from "lucide-react";
import HeroSection from "@/components/HeroSection";
import SectionWrapper from "@/components/SectionWrapper";
import { publications, projects, achievements, certifications } from "@/data/portfolio";

const Index = () => (
  <>
    <HeroSection />

    {/* Major Projects */}
    <SectionWrapper className="section-spacing">
      <div className="container-main">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tighter text-foreground">Major Projects</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {projects.map((p, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              whileHover={{
                scale: 1.02,
                boxShadow: "0 0 0 1px rgba(0,0,0,.07), 0 4px 12px -2px rgba(0,0,0,.12)",
              }}
              className="bg-card rounded-xl p-6 shadow-[0_0_0_1px_rgba(0,0,0,.05),0_1px_2px_0_rgba(0,0,0,.05)] will-change-transform transition-all duration-200"
            >
              <div className="flex items-center gap-2 mb-3">
                <Folder size={18} className="text-primary" />
                <h3 className="font-semibold text-foreground leading-snug">{p.title}</h3>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">{p.description}</p>
              <div className="mt-4 flex flex-wrap gap-1.5">
                {p.tags.map((t) => (
                  <span key={t} className="px-2 py-0.5 bg-secondary text-xs font-medium rounded-full text-foreground">
                    {t}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionWrapper>

    {/* Publications Preview */}
    <SectionWrapper className="section-spacing">
      <div className="container-main">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tighter text-foreground">Publications</h2>
          <Link
            to="/publications"
            className="flex items-center gap-1.5 text-sm font-medium text-primary hover:underline transition-colors"
          >
            View All <ArrowRight size={15} />
          </Link>
        </div>
        <div className="space-y-4">
          {publications.slice(0, 3).map((pub, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              whileHover={{
                scale: 1.01,
                boxShadow: "0 0 0 1px rgba(0,0,0,.07), 0 4px 12px -2px rgba(0,0,0,.12)",
              }}
              className="bg-card rounded-xl p-5 shadow-[0_0_0_1px_rgba(0,0,0,.05),0_1px_2px_0_rgba(0,0,0,.05)] will-change-transform transition-all duration-200"
            >
              <h3 className="font-semibold text-foreground leading-snug">{pub.title}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{pub.journal} · {pub.year}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionWrapper>

    {/* Achievements & Certifications */}
    <SectionWrapper className="section-spacing">
      <div className="container-main">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Achievements */}
          <div>
            <div className="flex items-center gap-2 mb-6">
              <Award size={20} className="text-primary" />
              <h2 className="text-2xl font-semibold tracking-tight text-foreground">Achievements</h2>
            </div>
            <div className="space-y-3">
              {achievements.map((a, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -12 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.35, delay: i * 0.08 }}
                  whileHover={{
                    scale: 1.01,
                    boxShadow: "0 0 0 1px rgba(0,0,0,.07), 0 4px 12px -2px rgba(0,0,0,.12)",
                  }}
                  className="bg-card rounded-xl p-4 shadow-[0_0_0_1px_rgba(0,0,0,.05),0_1px_2px_0_rgba(0,0,0,.05)] transition-all duration-200"
                >
                  <p className="text-sm text-foreground">{a}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div>
            <div className="flex items-center gap-2 mb-6">
              <BadgeCheck size={20} className="text-primary" />
              <h2 className="text-2xl font-semibold tracking-tight text-foreground">Certifications</h2>
            </div>
            <div className="space-y-3">
              {certifications.map((c, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 12 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.35, delay: i * 0.08 }}
                  whileHover={{
                    scale: 1.01,
                    boxShadow: "0 0 0 1px rgba(0,0,0,.07), 0 4px 12px -2px rgba(0,0,0,.12)",
                  }}
                  className="bg-card rounded-xl p-4 shadow-[0_0_0_1px_rgba(0,0,0,.05),0_1px_2px_0_rgba(0,0,0,.05)] transition-all duration-200"
                >
                  <p className="font-semibold text-sm text-foreground">{c.title}</p>
                  <p className="text-xs text-muted-foreground mt-0.5">{c.issuer}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  </>
);

export default Index;

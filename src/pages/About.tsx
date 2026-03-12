import { motion } from "framer-motion";
import profilePhoto from "@/assets/profile-photo.jpg";
import { researchInterests, experience } from "@/data/portfolio";
import SectionWrapper from "@/components/SectionWrapper";
import { Briefcase } from "lucide-react";

const About = () => (
  <div className="section-spacing">
    <div className="container-main">
      <SectionWrapper>
        <h1 className="text-4xl md:text-5xl font-semibold tracking-tighter text-foreground">About</h1>
      </SectionWrapper>

      <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* Photo */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="lg:col-span-4 flex justify-center"
        >
          <motion.img
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.3 }}
            src={profilePhoto}
            alt="Abdul Hannan Rakib Dalal"
            className="w-64 h-64 md:w-80 md:h-80 rounded-2xl object-cover shadow-lg outline outline-1 outline-border"
          />
        </motion.div>

        {/* Bio */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="lg:col-span-8"
        >
          <h2 className="text-2xl font-semibold text-foreground">Abdul Hannan Rakib Dalal</h2>
          <p className="mt-1 text-sm font-medium text-primary">AI Developer • Researcher • Graphics Designer</p>

          <p className="mt-6 text-muted-foreground leading-relaxed max-w-[65ch]">
            Abdul Hannan Rakib Dalal is an Artificial Intelligence and Data Science undergraduate at Vishwakarma University, Pune.
            His work focuses on artificial intelligence systems, machine learning, IoT-based solutions, and digital automation.
            He has contributed to multiple academic publications, intellectual property works, and interdisciplinary projects
            focused on sustainable technologies and intelligent systems.
          </p>

          {/* Research Interests */}
          <div className="mt-8">
            <h3 className="label-style text-muted-foreground mb-4">Research Interests</h3>
            <div className="flex flex-wrap gap-2">
              {researchInterests.map((interest) => (
                <span
                  key={interest}
                  className="px-3 py-1.5 bg-secondary rounded-full text-sm font-medium text-foreground transition-colors duration-200 hover:bg-accent hover:text-primary cursor-default"
                >
                  {interest}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>

      {/* Experience */}
      <SectionWrapper className="mt-20">
        <h2 className="text-2xl font-semibold text-foreground mb-8">Professional Experience</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {experience.map((exp, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              whileHover={{
                scale: 1.02,
                boxShadow: "0 0 0 1px rgba(0,0,0,.07), 0 4px 12px -2px rgba(0,0,0,.12)",
              }}
              className="bg-card rounded-xl p-5 shadow-[0_0_0_1px_rgba(0,0,0,.05),0_1px_2px_0_rgba(0,0,0,.05)] will-change-transform transition-all duration-200"
            >
              <div className="flex items-start gap-3">
                <Briefcase size={18} className="mt-0.5 text-primary flex-shrink-0" />
                <div>
                  <p className="font-semibold text-foreground">{exp.role}</p>
                  <p className="text-sm text-muted-foreground">{exp.org}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </SectionWrapper>
    </div>
  </div>
);

export default About;

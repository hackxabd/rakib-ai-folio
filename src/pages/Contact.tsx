import { motion } from "framer-motion";
import SectionWrapper from "@/components/SectionWrapper";
import { Mail, Phone, MapPin, Linkedin, GraduationCap } from "lucide-react";

const contactItems = [
  { icon: Mail, label: "Email", value: "dalalabdulhannan@gmail.com", href: "mailto:dalalabdulhannan@gmail.com" },
  { icon: Phone, label: "Phone", value: "+91 8421704953", href: "tel:+918421704953" },
  { icon: MapPin, label: "Location", value: "Pune, Maharashtra, India" },
];

const socialLinks = [
  { icon: Linkedin, label: "LinkedIn", href: "https://linkedin.com" },
  { icon: GraduationCap, label: "Google Scholar", href: "https://scholar.google.com" },
];

const Contact = () => (
  <div className="section-spacing">
    <div className="container-main max-w-2xl">
      <SectionWrapper>
        <h1 className="text-4xl md:text-5xl font-semibold tracking-tighter text-foreground">Contact</h1>
        <p className="mt-3 text-muted-foreground">Get in touch for collaborations, research opportunities, or inquiries.</p>
      </SectionWrapper>

      <div className="mt-12 space-y-4">
        {contactItems.map((item, i) => (
          <motion.div
            key={item.label}
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
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-lg bg-accent flex items-center justify-center">
                <item.icon size={18} className="text-primary" />
              </div>
              <div>
                <p className="label-style text-muted-foreground">{item.label}</p>
                {item.href ? (
                  <a href={item.href} className="text-foreground font-medium hover:text-primary transition-colors">
                    {item.value}
                  </a>
                ) : (
                  <p className="text-foreground font-medium">{item.value}</p>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="mt-8 flex gap-4">
        {socialLinks.map((link, i) => (
          <motion.a
            key={link.label}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.3 + i * 0.1 }}
            whileHover={{
              scale: 1.05,
              boxShadow: "0 0 0 1px rgba(0,0,0,.07), 0 4px 12px -2px rgba(0,0,0,.12)",
            }}
            className="flex-1 bg-card rounded-xl p-5 shadow-[0_0_0_1px_rgba(0,0,0,.05),0_1px_2px_0_rgba(0,0,0,.05)] will-change-transform transition-all duration-200 flex items-center gap-3"
          >
            <link.icon size={20} className="text-primary" />
            <span className="font-medium text-foreground">{link.label}</span>
          </motion.a>
        ))}
      </div>
    </div>
  </div>
);

export default Contact;

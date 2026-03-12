import { Mail, Phone, MapPin } from "lucide-react";

const Footer = () => (
  <footer className="bg-foreground text-primary-foreground">
    <div className="container-main py-12">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h3 className="text-lg font-semibold">Abdul Hannan Rakib Dalal</h3>
          <p className="mt-1 text-sm opacity-70">AI Developer • Researcher • Graphics Designer</p>
        </div>
        <div className="space-y-2">
          <div className="flex items-center gap-2 text-sm opacity-80">
            <Mail size={14} className="text-primary" />
            <a href="mailto:dalalabdulhannan@gmail.com" className="hover:opacity-100 transition-opacity">
              dalalabdulhannan@gmail.com
            </a>
          </div>
          <div className="flex items-center gap-2 text-sm opacity-80">
            <Phone size={14} className="text-primary" />
            <span>+91 8421704953</span>
          </div>
          <div className="flex items-center gap-2 text-sm opacity-80">
            <MapPin size={14} className="text-primary" />
            <span>Pune, Maharashtra, India</span>
          </div>
        </div>
        <div className="space-y-3">
          <div className="flex gap-4 md:justify-end">
            <a href="https://linkedin.com/in/" target="_blank" rel="noopener noreferrer" className="text-sm opacity-80 hover:opacity-100 hover:text-primary transition-all">
              LinkedIn
            </a>
            <a href="https://orcid.org/" target="_blank" rel="noopener noreferrer" className="text-sm opacity-80 hover:opacity-100 hover:text-primary transition-all">
              ORCID
            </a>
            <a href="https://scholar.google.com/" target="_blank" rel="noopener noreferrer" className="text-sm opacity-80 hover:opacity-100 hover:text-primary transition-all">
              Google Scholar
            </a>
          </div>
          <p className="text-sm opacity-60 md:text-right">© 2026 Abdul Hannan Rakib Dalal</p>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;

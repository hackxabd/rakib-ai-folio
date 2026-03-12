import { Mail, Phone, MapPin } from "lucide-react";

const Footer = () => (
  <footer className="border-t border-border bg-card">
    <div className="container-main py-12">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h3 className="text-lg font-semibold text-foreground">Abdul Hannan Rakib Dalal</h3>
          <p className="mt-1 text-sm text-muted-foreground">AI Developer • Researcher • Graphics Designer</p>
        </div>
        <div className="space-y-2">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Mail size={14} className="text-primary" />
            <a href="mailto:dalalabdulhannan@gmail.com" className="hover:text-foreground transition-colors">
              dalalabdulhannan@gmail.com
            </a>
          </div>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Phone size={14} className="text-primary" />
            <span>+91 8421704953</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <MapPin size={14} className="text-primary" />
            <span>Pune, Maharashtra, India</span>
          </div>
        </div>
        <div className="md:text-right">
          <p className="text-sm text-muted-foreground">© 2026 Abdul Hannan Rakib Dalal</p>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;

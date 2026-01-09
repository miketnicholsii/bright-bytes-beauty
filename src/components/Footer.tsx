import { Link } from "react-router-dom";
import { Instagram, Facebook, Mail, MapPin, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container-custom section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <h3 className="font-display text-2xl font-semibold mb-4">
              Thrive
            </h3>
            <p className="font-body text-primary-foreground/80 mb-6 leading-relaxed">
              Empowering you to live your healthiest, happiest life through holistic wellness coaching.
            </p>
            <div className="flex gap-4">
              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-primary-foreground/20 transition-colors"
              >
                <Facebook size={18} />
              </a>
              <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-primary-foreground/20 transition-colors"
              >
                <Instagram size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {["Home", "About", "Coaching", "Blog", "Contact"].map((item) => (
                <li key={item}>
                  <Link
                    to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                    className="font-body text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h4 className="font-display text-lg font-semibold mb-6">Programs</h4>
            <ul className="space-y-3">
              {["Elimination Program", "Pantry Purge", "Gut Health & Reset", "1-on-1 Coaching"].map((item) => (
                <li key={item}>
                  <Link
                    to="/coaching"
                    className="font-body text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display text-lg font-semibold mb-6">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Mail size={18} className="mt-1 flex-shrink-0" />
                <span className="font-body text-primary-foreground/80">
                  contactme@thrivewithcoachcandice.com
                </span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={18} className="mt-1 flex-shrink-0" />
                <span className="font-body text-primary-foreground/80">
                  265 Eastchester Drive, Suite 109<br />
                  High Point, NC 27262
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-primary-foreground/20 text-center">
          <p className="font-body text-sm text-primary-foreground/60">
            © {new Date().getFullYear()} Thrive with Coach Candice. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

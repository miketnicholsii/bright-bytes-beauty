import { Link } from "react-router-dom";
import { Mail, MapPin, ArrowUp } from "lucide-react";
import { motion } from "framer-motion";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-background relative overflow-hidden">
      {/* Top accent line */}
      <div className="h-px bg-gradient-to-r from-transparent via-primary to-transparent" />
      
      <div className="container-custom py-20 lg:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8">
          {/* Brand Column */}
          <motion.div 
            className="lg:col-span-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="mb-6">
              <span className="font-display text-3xl text-background block">
                Thrive
              </span>
              <span className="font-body text-[10px] tracking-[0.3em] uppercase text-background/50">
                with Coach Candice
              </span>
            </div>
            <p className="font-body text-background/60 leading-relaxed mb-8 max-w-xs">
              Empowering you to live your healthiest, happiest life through holistic wellness coaching.
            </p>
          </motion.div>

          {/* Navigation */}
          <motion.div
            className="lg:col-span-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <h4 className="font-display text-lg text-background mb-6">Navigate</h4>
            <ul className="space-y-3">
              {["Home", "About", "Programs", "Journal", "Contact"].map((item) => (
                <li key={item}>
                  <Link
                    to={item === "Home" ? "/" : item === "Programs" ? "/coaching" : item === "Journal" ? "/blog" : `/${item.toLowerCase()}`}
                    className="font-body text-background/60 hover:text-background transition-colors inline-flex items-center group"
                  >
                    <motion.span whileHover={{ x: 4 }} transition={{ duration: 0.2 }}>
                      {item}
                    </motion.span>
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Programs */}
          <motion.div
            className="lg:col-span-3"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h4 className="font-display text-lg text-background mb-6">Programs</h4>
            <ul className="space-y-3">
              {["Elimination Program", "Pantry Purge", "Gut Health & Reset", "1-on-1 Coaching"].map((item) => (
                <li key={item}>
                  <Link
                    to="/coaching"
                    className="font-body text-background/60 hover:text-background transition-colors"
                  >
                    <motion.span whileHover={{ x: 4 }} transition={{ duration: 0.2 }} className="inline-block">
                      {item}
                    </motion.span>
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div
            className="lg:col-span-3"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <h4 className="font-display text-lg text-background mb-6">Get in Touch</h4>
            <ul className="space-y-4">
              <li>
                <a 
                  href="mailto:contactme@thrivewithcoachcandice.com"
                  className="flex items-start gap-3 font-body text-background/60 hover:text-background transition-colors group"
                >
                  <Mail size={18} className="mt-0.5 flex-shrink-0" strokeWidth={1.5} />
                  <motion.span whileHover={{ x: 4 }} transition={{ duration: 0.2 }} className="inline-block">
                    contactme@thrivewithcoachcandice.com
                  </motion.span>
                </a>
              </li>
              <li className="flex items-start gap-3 text-background/60">
                <MapPin size={18} className="mt-0.5 flex-shrink-0" strokeWidth={1.5} />
                <span className="font-body">
                  265 Eastchester Drive, Suite 109<br />
                  High Point, NC 27262
                </span>
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div 
          className="mt-16 pt-8 border-t border-background/10 flex flex-col sm:flex-row items-center justify-between gap-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <p className="font-body text-sm text-background/40">
            © {currentYear} Thrive with Coach Candice. All rights reserved.
          </p>
          
          <motion.button
            onClick={scrollToTop}
            className="w-11 h-11 rounded-full border border-background/20 flex items-center justify-center text-background/60 hover:text-background hover:border-background/40 transition-all"
            whileHover={{ scale: 1.1, y: -4 }}
            whileTap={{ scale: 0.95 }}
          >
            <ArrowUp size={18} strokeWidth={1.5} />
          </motion.button>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;

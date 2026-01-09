import { Link } from "react-router-dom";
import { Instagram, Facebook, Mail, MapPin, Heart, ArrowUp } from "lucide-react";
import { motion } from "framer-motion";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const linkVariants = {
    initial: { x: 0 },
    hover: { x: 5 },
  };

  return (
    <TooltipProvider delayDuration={200}>
      <footer className="bg-primary text-primary-foreground relative overflow-hidden">
        {/* Decorative elements */}
        <motion.div
          className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl"
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.05, 0.1, 0.05]
          }}
          transition={{ duration: 10, repeat: Infinity }}
        />
        
        <div className="container-custom section-padding relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {/* Brand */}
            <motion.div 
              className="lg:col-span-1"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <motion.h3 
                className="font-display text-2xl font-semibold mb-4"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring" }}
              >
                Thrive
              </motion.h3>
              <p className="font-body text-primary-foreground/80 mb-6 leading-relaxed">
                Empowering you to live your healthiest, happiest life through holistic wellness coaching.
              </p>
              <div className="flex gap-3">
                <Tooltip>
                  <TooltipTrigger asChild>
                    <motion.a
                      href="https://www.facebook.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-primary-foreground/20 transition-colors"
                      whileHover={{ scale: 1.15, rotate: 5 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Facebook size={18} />
                    </motion.a>
                  </TooltipTrigger>
                  <TooltipContent>Follow on Facebook</TooltipContent>
                </Tooltip>
                
                <Tooltip>
                  <TooltipTrigger asChild>
                    <motion.a
                      href="https://www.instagram.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-primary-foreground/20 transition-colors"
                      whileHover={{ scale: 1.15, rotate: -5 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Instagram size={18} />
                    </motion.a>
                  </TooltipTrigger>
                  <TooltipContent>Follow on Instagram</TooltipContent>
                </Tooltip>
              </div>
            </motion.div>

            {/* Quick Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <h4 className="font-display text-lg font-semibold mb-6">Quick Links</h4>
              <ul className="space-y-3">
                {["Home", "About", "Coaching", "Blog", "Contact"].map((item, index) => (
                  <motion.li 
                    key={item}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                  >
                    <Link
                      to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                      className="font-body text-primary-foreground/80 hover:text-primary-foreground transition-colors inline-flex items-center group"
                    >
                      <motion.span
                        variants={linkVariants}
                        initial="initial"
                        whileHover="hover"
                      >
                        {item}
                      </motion.span>
                      <motion.span
                        className="ml-1 opacity-0 group-hover:opacity-100 transition-opacity"
                        initial={{ x: -5 }}
                        whileHover={{ x: 0 }}
                      >
                        →
                      </motion.span>
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Programs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <h4 className="font-display text-lg font-semibold mb-6">Programs</h4>
              <ul className="space-y-3">
                {["Elimination Program", "Pantry Purge", "Gut Health & Reset", "1-on-1 Coaching"].map((item, index) => (
                  <motion.li 
                    key={item}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                  >
                    <Link
                      to="/coaching"
                      className="font-body text-primary-foreground/80 hover:text-primary-foreground transition-colors inline-flex items-center group"
                    >
                      <motion.span
                        variants={linkVariants}
                        initial="initial"
                        whileHover="hover"
                      >
                        {item}
                      </motion.span>
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Contact */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <h4 className="font-display text-lg font-semibold mb-6">Contact</h4>
              <ul className="space-y-4">
                <motion.li 
                  className="flex items-start gap-3"
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Mail size={18} className="mt-1 flex-shrink-0 cursor-pointer" />
                    </TooltipTrigger>
                    <TooltipContent>Send an email</TooltipContent>
                  </Tooltip>
                  <a 
                    href="mailto:contactme@thrivewithcoachcandice.com"
                    className="font-body text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                  >
                    contactme@thrivewithcoachcandice.com
                  </a>
                </motion.li>
                <motion.li 
                  className="flex items-start gap-3"
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <MapPin size={18} className="mt-1 flex-shrink-0 cursor-pointer" />
                    </TooltipTrigger>
                    <TooltipContent>View on map</TooltipContent>
                  </Tooltip>
                  <span className="font-body text-primary-foreground/80">
                    265 Eastchester Drive, Suite 109<br />
                    High Point, NC 27262
                  </span>
                </motion.li>
              </ul>
            </motion.div>
          </div>

          <motion.div 
            className="mt-16 pt-8 border-t border-primary-foreground/20 flex flex-col sm:flex-row items-center justify-between gap-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <p className="font-body text-sm text-primary-foreground/60 flex items-center gap-1">
              © {new Date().getFullYear()} Thrive with Coach Candice. Made with 
              <motion.span
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 1, repeat: Infinity }}
              >
                <Heart className="w-4 h-4 text-accent fill-accent" />
              </motion.span>
            </p>
            
            <Tooltip>
              <TooltipTrigger asChild>
                <motion.button
                  onClick={scrollToTop}
                  className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-primary-foreground/20 transition-colors"
                  whileHover={{ scale: 1.1, y: -3 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <ArrowUp size={18} />
                </motion.button>
              </TooltipTrigger>
              <TooltipContent>Back to top</TooltipContent>
            </Tooltip>
          </motion.div>
        </div>
      </footer>
    </TooltipProvider>
  );
};

export default Footer;

import { useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Instagram, Facebook } from "lucide-react";
import { motion, AnimatePresence, useScroll, useTransform, useMotionValueEvent } from "framer-motion";
import { Button } from "@/components/ui/button";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Programs", path: "/coaching" },
  { name: "Journal", path: "/blog" },
  { name: "Contact", path: "/contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { scrollY } = useScroll();
  const [isScrolled, setIsScrolled] = useState(() => scrollY.get() > 50);
  const isScrolledRef = useRef(isScrolled);
  const location = useLocation();
 
  useMotionValueEvent(scrollY, "change", (latest) => {
    const nextScrolled = latest > 50;
    if (nextScrolled !== isScrolledRef.current) {
      isScrolledRef.current = nextScrolled;
      setIsScrolled(nextScrolled);
    }
  });

  const navBackground = useTransform(
    scrollY,
    [0, 100],
    ["rgba(255, 255, 255, 0)", "rgba(255, 255, 255, 0.95)"]
  );

  return (
    <>
      <motion.nav 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
          isScrolled ? "backdrop-blur-xl border-b border-border/50" : ""
        }`}
        style={{ backgroundColor: navBackground }}
      >
        <div className="container-custom">
          <div className="flex items-center justify-between h-20 md:h-24">
            {/* Logo */}
            <Link to="/" className="group">
              <motion.div 
                className="flex flex-col"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                <span className={`font-display text-2xl md:text-3xl font-medium tracking-tight transition-colors duration-500 ${
                  isScrolled ? "text-foreground" : "text-primary-foreground"
                }`}>
                  Thrive
                </span>
                <span className={`font-body text-[10px] tracking-[0.3em] uppercase transition-colors duration-500 ${
                  isScrolled ? "text-muted-foreground" : "text-primary-foreground/70"
                }`}>
                  with Coach Candice
                </span>
              </motion.div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className="relative px-5 py-2 group"
                >
                  <motion.span 
                    className={`font-body text-sm font-medium tracking-wide transition-all duration-300 ${
                      isScrolled 
                        ? location.pathname === link.path 
                          ? "text-primary" 
                          : "text-foreground/70 group-hover:text-foreground"
                        : location.pathname === link.path
                          ? "text-primary-foreground"
                          : "text-primary-foreground/80 group-hover:text-primary-foreground"
                    }`}
                  >
                    {link.name}
                  </motion.span>
                  
                  {/* Active/Hover indicator */}
                  <motion.span
                    className={`absolute bottom-0 left-1/2 h-0.5 rounded-full transition-all duration-300 ${
                      isScrolled ? "bg-primary" : "bg-primary-foreground"
                    }`}
                    initial={{ width: 0, x: "-50%" }}
                    animate={{ 
                      width: location.pathname === link.path ? "60%" : "0%",
                      x: "-50%"
                    }}
                    whileHover={{ width: "60%" }}
                    transition={{ duration: 0.3 }}
                  />
                </Link>
              ))}
            </div>

            {/* Desktop CTA & Social */}
            <div className="hidden lg:flex items-center gap-6">
              <div className="flex items-center gap-2">
                {[
                  { icon: Facebook, href: "https://www.facebook.com", label: "Facebook" },
                  { icon: Instagram, href: "https://www.instagram.com", label: "Instagram" },
                ].map((social) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-2 rounded-full transition-colors duration-300 ${
                      isScrolled 
                        ? "text-muted-foreground hover:text-primary hover:bg-primary/5" 
                        : "text-primary-foreground/70 hover:text-primary-foreground hover:bg-white/10"
                    }`}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <social.icon size={18} strokeWidth={1.5} />
                  </motion.a>
                ))}
              </div>
              
              <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }}>
                <Button className="btn-coral text-sm px-6 py-2.5">
                  Book a Call
                </Button>
              </motion.div>
            </div>

            {/* Mobile Menu Button */}
            <motion.button
              onClick={() => setIsOpen(!isOpen)}
              className={`lg:hidden p-2 rounded-lg transition-colors ${
                isScrolled ? "text-foreground" : "text-primary-foreground"
              }`}
              whileTap={{ scale: 0.9 }}
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={isOpen ? "close" : "menu"}
                  initial={{ opacity: 0, rotate: -90 }}
                  animate={{ opacity: 1, rotate: 0 }}
                  exit={{ opacity: 0, rotate: 90 }}
                  transition={{ duration: 0.2 }}
                >
                  {isOpen ? <X size={24} strokeWidth={1.5} /> : <Menu size={24} strokeWidth={1.5} />}
                </motion.div>
              </AnimatePresence>
            </motion.button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu - Full Screen */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 lg:hidden"
          >
            {/* Backdrop */}
            <motion.div 
              className="absolute inset-0 bg-primary"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            />
            
            {/* Content */}
            <div className="relative h-full flex flex-col justify-center px-8">
              <nav className="space-y-2">
                {navLinks.map((link, index) => (
                  <motion.div
                    key={link.path}
                    initial={{ opacity: 0, x: -40 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -40 }}
                    transition={{ delay: index * 0.08, duration: 0.4 }}
                  >
                    <Link
                      to={link.path}
                      onClick={() => setIsOpen(false)}
                      className="block py-4 group"
                    >
                      <span className={`font-display text-4xl md:text-5xl transition-colors ${
                        location.pathname === link.path
                          ? "text-accent"
                          : "text-primary-foreground/90 group-hover:text-primary-foreground"
                      }`}>
                        {link.name}
                      </span>
                    </Link>
                  </motion.div>
                ))}
              </nav>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ delay: 0.4 }}
                className="mt-12 pt-8 border-t border-primary-foreground/20"
              >
                <Button 
                  onClick={() => setIsOpen(false)}
                  className="btn-coral w-full text-lg"
                >
                  Book a Call
                </Button>
                
                <div className="flex items-center justify-center gap-6 mt-8">
                  {[
                    { icon: Facebook, href: "https://www.facebook.com" },
                    { icon: Instagram, href: "https://www.instagram.com" },
                  ].map((social, i) => (
                    <motion.a
                      key={i}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                      whileHover={{ scale: 1.1 }}
                    >
                      <social.icon size={24} strokeWidth={1.5} />
                    </motion.a>
                  ))}
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;

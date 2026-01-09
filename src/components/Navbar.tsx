import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Instagram, Facebook, Sparkles } from "lucide-react";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const navLinks = [
  { name: "Home", path: "/", description: "Welcome to Thrive" },
  { name: "About", path: "/about", description: "Meet Coach Candice" },
  { name: "Coaching", path: "/coaching", description: "Transform your health" },
  { name: "Blog", path: "/blog", description: "Wellness insights" },
  { name: "Contact", path: "/contact", description: "Get in touch" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const location = useLocation();

  const { scrollY } = useScroll();
  const navBackground = useTransform(
    scrollY,
    [0, 100],
    ["rgba(255, 255, 255, 0.5)", "rgba(255, 255, 255, 0.95)"]
  );
  const navShadow = useTransform(
    scrollY,
    [0, 100],
    ["0 0 0 0 transparent", "0 4px 30px -4px rgba(0, 0, 0, 0.1)"]
  );

  return (
    <TooltipProvider delayDuration={300}>
      <motion.nav 
        className="fixed top-0 left-0 right-0 z-50 backdrop-blur-lg border-b border-border/50"
        style={{ 
          backgroundColor: navBackground,
          boxShadow: navShadow
        }}
      >
        <div className="container-custom">
          <div className="flex items-center justify-between h-20">
            {/* Animated Logo */}
            <Link to="/" className="flex items-center gap-2 group">
              <motion.span 
                className="font-display text-2xl font-semibold text-primary relative"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                Thrive
                <motion.span
                  className="absolute -top-1 -right-2"
                  initial={{ scale: 0, rotate: -20 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{ delay: 0.5, type: "spring" }}
                >
                  <Sparkles className="w-3 h-3 text-accent" />
                </motion.span>
              </motion.span>
              <motion.span 
                className="font-body text-sm text-muted-foreground"
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
              >
                with Coach Candice
              </motion.span>
            </Link>

            {/* Desktop Navigation with hover indicator */}
            <div className="hidden md:flex items-center gap-1 relative">
              {navLinks.map((link, index) => (
                <Tooltip key={link.path}>
                  <TooltipTrigger asChild>
                    <Link
                      to={link.path}
                      onMouseEnter={() => setHoveredIndex(index)}
                      onMouseLeave={() => setHoveredIndex(null)}
                      className="relative px-4 py-2"
                    >
                      <span className={`font-body text-sm font-medium transition-colors relative z-10 ${
                        location.pathname === link.path
                          ? "text-primary"
                          : "text-foreground/70 hover:text-foreground"
                      }`}>
                        {link.name}
                      </span>
                      
                      {/* Active indicator */}
                      {location.pathname === link.path && (
                        <motion.div
                          layoutId="activeNav"
                          className="absolute inset-0 bg-primary/10 rounded-full"
                          transition={{ type: "spring", stiffness: 300, damping: 30 }}
                        />
                      )}
                      
                      {/* Hover indicator */}
                      <AnimatePresence>
                        {hoveredIndex === index && location.pathname !== link.path && (
                          <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.8 }}
                            className="absolute inset-0 bg-muted rounded-full -z-0"
                          />
                        )}
                      </AnimatePresence>
                    </Link>
                  </TooltipTrigger>
                  <TooltipContent side="bottom" className="font-medium">
                    {link.description}
                  </TooltipContent>
                </Tooltip>
              ))}
            </div>

            {/* CTA and Social */}
            <div className="hidden md:flex items-center gap-4">
              <div className="flex items-center gap-1">
                <Tooltip>
                  <TooltipTrigger asChild>
                    <motion.a
                      href="https://www.facebook.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 text-muted-foreground hover:text-primary transition-colors rounded-full hover:bg-primary/10"
                      whileHover={{ scale: 1.1, rotate: 5 }}
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
                      className="p-2 text-muted-foreground hover:text-primary transition-colors rounded-full hover:bg-primary/10"
                      whileHover={{ scale: 1.1, rotate: -5 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Instagram size={18} />
                    </motion.a>
                  </TooltipTrigger>
                  <TooltipContent>Follow on Instagram</TooltipContent>
                </Tooltip>
              </div>
              
              <Tooltip>
                <TooltipTrigger asChild>
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <Button className="btn-coral text-sm relative overflow-hidden group">
                      <motion.span
                        className="absolute inset-0 bg-white/20"
                        initial={{ x: "-100%" }}
                        whileHover={{ x: "100%" }}
                        transition={{ duration: 0.4 }}
                      />
                      <span className="relative">Book Today</span>
                    </Button>
                  </motion.div>
                </TooltipTrigger>
                <TooltipContent>Schedule your free consultation</TooltipContent>
              </Tooltip>
            </div>

            {/* Mobile Menu Button */}
            <motion.button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 text-foreground rounded-lg hover:bg-muted"
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
                  {isOpen ? <X size={24} /> : <Menu size={24} />}
                </motion.div>
              </AnimatePresence>
            </motion.button>
          </div>
        </div>

        {/* Mobile Menu with staggered animation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="md:hidden bg-card border-b border-border overflow-hidden"
            >
              <div className="container-custom py-6 flex flex-col gap-2">
                {navLinks.map((link, index) => (
                  <motion.div
                    key={link.path}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ delay: index * 0.05 }}
                  >
                    <Link
                      to={link.path}
                      onClick={() => setIsOpen(false)}
                      className={`font-body text-lg font-medium py-3 px-4 rounded-xl transition-all flex items-center justify-between ${
                        location.pathname === link.path
                          ? "text-primary bg-primary/10"
                          : "text-foreground/70 hover:bg-muted"
                      }`}
                    >
                      <span>{link.name}</span>
                      <span className="text-xs text-muted-foreground">{link.description}</span>
                    </Link>
                  </motion.div>
                ))}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  <Button className="btn-coral w-full mt-4">Book Today</Button>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </TooltipProvider>
  );
};

export default Navbar;

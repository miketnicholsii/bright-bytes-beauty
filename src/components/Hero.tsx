import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useRef } from "react";
import heroImage from "@/assets/hero-coach.jpg";

const Hero = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 1.1]);
  const textY = useTransform(scrollYProgress, [0, 1], [0, 100]);

  return (
    <section ref={containerRef} className="relative min-h-[100svh] flex items-center overflow-hidden">
      {/* Background Image with Parallax */}
      <motion.div className="absolute inset-0 z-0" style={{ scale }}>
        <img
          src={heroImage}
          alt="Coach Candice with fresh produce"
          className="w-full h-full object-cover object-center sm:object-top"
        />
        <div className="absolute inset-0 hero-gradient-overlay" />
        
        {/* Subtle grain texture overlay */}
        <div 
          className="absolute inset-0 opacity-[0.03] mix-blend-overlay"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
          }}
        />
      </motion.div>

      {/* Decorative Elements - Hidden on mobile for performance */}
      <motion.div
        className="absolute top-1/4 right-[10%] w-20 sm:w-24 md:w-32 h-20 sm:h-24 md:h-32 rounded-full border border-primary-foreground/10 hidden sm:block"
        style={{ y }}
        animate={{ 
          scale: [1, 1.1, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-1/4 left-[5%] w-16 sm:w-20 md:w-24 h-16 sm:h-20 md:h-24 rounded-full border border-accent/20 hidden sm:block"
        style={{ y: useTransform(scrollYProgress, [0, 1], [0, -100]) }}
        animate={{ 
          scale: [1, 1.2, 1],
        }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Main Content */}
      <motion.div 
        className="container-custom relative z-10 pt-20 sm:pt-24 pb-16 sm:pb-0 px-4 sm:px-6 lg:px-8"
        style={{ y: textY, opacity }}
      >
        <div className="max-w-3xl">
          {/* Editorial Label */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-4 sm:mb-6 md:mb-8"
          >
            <span className="label-editorial text-primary-foreground/70 text-[10px] sm:text-xs">
              <span className="inline-block w-4 sm:w-6 md:w-8 h-px bg-primary-foreground/50 mr-2 sm:mr-3" />
              Holistic Health Coaching
            </span>
          </motion.div>

          {/* Main Title */}
          <motion.h1 
            className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl text-primary-foreground leading-[0.95] mb-4 sm:mb-6 md:mb-8"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            <span className="block">Begin Your</span>
            <span className="block mt-1 sm:mt-2">
              <motion.span 
                className="italic text-accent inline-block"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
              >
                Journey
              </motion.span>
              {" "}to
            </span>
            <span className="block mt-1 sm:mt-2">Wellness</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="font-body text-base sm:text-lg md:text-xl text-primary-foreground/85 max-w-md sm:max-w-lg mb-8 sm:mb-10 md:mb-12 leading-relaxed font-light"
          >
            Partner with Coach Candice to unlock your body's full potential through personalized, holistic wellness coaching.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-3 sm:gap-4"
          >
            <motion.div
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
            >
              <Button asChild className="btn-coral group w-full sm:w-auto text-sm sm:text-base py-3 sm:py-4">
                <Link to="/contact#contact-form">
                  <span className="flex items-center justify-center gap-2">
                    Start Your Journey
                    <motion.span
                      className="inline-block"
                      animate={{ x: [0, 4, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    >
                      <ArrowRight className="w-4 h-4" />
                    </motion.span>
                  </span>
                </Link>
              </Button>
            </motion.div>
            
            <Link to="/coaching">
              <motion.div
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
              >
                <Button className="btn-outline border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 w-full sm:w-auto text-sm sm:text-base py-3 sm:py-4">
                  Explore Programs
                </Button>
              </motion.div>
            </Link>
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll Indicator - Hidden on very small screens */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-6 sm:bottom-12 left-1/2 -translate-x-1/2 z-10 hidden sm:block"
      >
        <motion.div 
          className="flex flex-col items-center gap-2 sm:gap-3"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <span className="font-body text-[9px] sm:text-[10px] tracking-[0.3em] uppercase text-primary-foreground/50">
            Scroll
          </span>
          <div className="w-px h-8 sm:h-12 bg-gradient-to-b from-primary-foreground/50 to-transparent" />
        </motion.div>
      </motion.div>

      {/* Bottom Gradient Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-20 sm:h-32 bg-gradient-to-t from-background to-transparent z-10" />
    </section>
  );
};

export default Hero;

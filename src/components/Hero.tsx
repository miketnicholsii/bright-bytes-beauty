import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useRef } from "react";
import heroImage from "@/assets/hero-coach.jpg";
import MagneticButton from "@/components/ui/MagneticButton";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const Hero = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 1.1]);

  // Text animation variants
  const letterVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.03,
        duration: 0.5,
        ease: "easeOut" as const,
      },
    }),
  };

  const titleText = "Start Your";
  const titleText2 = "to Wellness";

  return (
    <TooltipProvider delayDuration={200}>
      <section ref={containerRef} className="relative min-h-screen flex items-center overflow-hidden">
        {/* Animated Background */}
        <motion.div className="absolute inset-0 z-0" style={{ scale }}>
          <img
            src={heroImage}
            alt="Coach Candice with fresh produce"
            className="w-full h-full object-cover object-top"
          />
          <div className="absolute inset-0 hero-gradient-overlay" />
        </motion.div>

        {/* Floating decorative elements */}
        <motion.div
          className="absolute top-1/4 right-10 w-20 h-20 rounded-full bg-accent/20 blur-2xl"
          animate={{ 
            y: [0, -30, 0], 
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3]
          }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-1/3 left-20 w-32 h-32 rounded-full bg-primary/20 blur-3xl"
          animate={{ 
            y: [0, 40, 0], 
            x: [0, 20, 0],
            scale: [1, 1.3, 1]
          }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Content */}
        <motion.div 
          className="container-custom relative z-10 pt-20"
          style={{ y, opacity }}
        >
          <div className="max-w-3xl">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
            >
              <Tooltip>
                <TooltipTrigger asChild>
                  <motion.span 
                    className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-4 py-2 font-body text-sm tracking-widest uppercase text-primary-foreground/90 mb-6 cursor-pointer"
                    whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.15)" }}
                    transition={{ type: "spring", stiffness: 400 }}
                  >
                    <Sparkles className="w-4 h-4" />
                    Holistic Health Coaching
                  </motion.span>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Transform your mind, body & spirit</p>
                </TooltipContent>
              </Tooltip>
            </motion.div>

            {/* Animated Title */}
            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-medium text-primary-foreground leading-tight mb-6">
              <span className="inline-flex overflow-hidden">
                {titleText.split("").map((char, i) => (
                  <motion.span
                    key={i}
                    custom={i}
                    variants={letterVariants}
                    initial="hidden"
                    animate="visible"
                    className={char === " " ? "mr-4" : ""}
                  >
                    {char}
                  </motion.span>
                ))}
              </span>
              {" "}
              <motion.span 
                className="italic text-accent inline-block"
                initial={{ opacity: 0, rotateX: -90 }}
                animate={{ opacity: 1, rotateX: 0 }}
                transition={{ delay: 0.4, duration: 0.8, type: "spring" }}
              >
                Path
              </motion.span>
              <br />
              <span className="inline-flex overflow-hidden">
                {titleText2.split("").map((char, i) => (
                  <motion.span
                    key={i}
                    custom={i + titleText.length + 5}
                    variants={letterVariants}
                    initial="hidden"
                    animate="visible"
                    className={char === " " ? "mr-4" : ""}
                  >
                    {char}
                  </motion.span>
                ))}
              </span>
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="font-body text-lg md:text-xl text-primary-foreground/90 max-w-xl mb-10 leading-relaxed"
            >
              Partner with Coach Candice to unlock your body's full potential through personalized, holistic wellness coaching. Transform your life—mind, body, and spirit.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <MagneticButton>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button className="btn-coral group relative overflow-hidden">
                      <motion.span
                        className="absolute inset-0 bg-white/20"
                        initial={{ x: "-100%", skewX: "-15deg" }}
                        whileHover={{ x: "100%" }}
                        transition={{ duration: 0.5 }}
                      />
                      <span className="relative z-10 flex items-center">
                        Book Today
                        <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </span>
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Schedule your free consultation</p>
                  </TooltipContent>
                </Tooltip>
              </MagneticButton>
              
              <MagneticButton>
                <Link to="/coaching">
                  <Button variant="outline" className="bg-transparent border-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10 font-medium px-8 py-3 rounded-full group">
                    <span className="relative">
                      View Programs
                      <motion.span
                        className="absolute bottom-0 left-0 w-full h-0.5 bg-primary-foreground origin-left"
                        initial={{ scaleX: 0 }}
                        whileHover={{ scaleX: 1 }}
                        transition={{ duration: 0.3 }}
                      />
                    </span>
                  </Button>
                </Link>
              </MagneticButton>
            </motion.div>
          </div>
        </motion.div>

        {/* Enhanced Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10"
        >
          <Tooltip>
            <TooltipTrigger asChild>
              <motion.div 
                className="flex flex-col items-center gap-2 cursor-pointer"
                whileHover={{ y: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <motion.span
                  className="text-primary-foreground/60 text-xs uppercase tracking-widest"
                  animate={{ opacity: [0.4, 0.8, 0.4] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  Scroll
                </motion.span>
                <div className="w-6 h-10 rounded-full border-2 border-primary-foreground/50 flex justify-center pt-2">
                  <motion.div
                    animate={{ y: [0, 12, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                    className="w-1.5 h-1.5 bg-primary-foreground/80 rounded-full"
                  />
                </div>
              </motion.div>
            </TooltipTrigger>
            <TooltipContent>
              <p>Discover more below</p>
            </TooltipContent>
          </Tooltip>
        </motion.div>
      </section>
    </TooltipProvider>
  );
};

export default Hero;

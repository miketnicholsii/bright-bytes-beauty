import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Check, Clock, Users } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const programs = [
  {
    title: "Elimination Program",
    subtitle: '"Thrive" Food Elimination Program',
    description: "Learning your blood type and choosing foods that align with your body's type can set you up to thrive in digestion, weight loss, metabolism control, energy production, and disease prevention.",
    color: "bg-primary",
    features: ["Blood type analysis", "Custom food plan", "Weekly check-ins"],
    duration: "8 weeks",
    popular: true,
  },
  {
    title: "Pantry Purge",
    subtitle: '"Thrive" We Are What We Eat',
    description: "What you keep in your cupboards is likely to end up in your body. Having an organized pantry with healthy options can help you meet your personal food goals.",
    color: "bg-highlight",
    features: ["Kitchen audit", "Shopping guide", "Meal prep tips"],
    duration: "4 weeks",
    popular: false,
  },
  {
    title: "Gut Health & Reset",
    subtitle: '"Thrive" Gut Health and Reset',
    description: "Are you struggling with abdominal pain, heartburn, bloating, or low energy? This program provides you the tools to holistically thrive with your gut health.",
    color: "bg-sage-dark",
    features: ["Gut assessment", "Healing protocol", "Supplement guidance"],
    duration: "12 weeks",
    popular: false,
  },
];

const ProgramsPreview = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <TooltipProvider delayDuration={200}>
      <section className="section-padding bg-muted/50 overflow-hidden">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <motion.span 
              className="inline-block font-body text-sm tracking-widest uppercase text-primary mb-4"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
            >
              Transform Your Life
            </motion.span>
            <h2 className="font-display text-4xl md:text-5xl font-medium text-foreground mb-4">
              Coaching <span className="text-primary italic">Programs</span>
            </h2>
            <motion.p 
              className="font-body text-lg text-muted-foreground max-w-2xl mx-auto"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              "Beloved, I pray that in every way you may prosper and be in health even as your soul prospers." — 3 John 1:2
            </motion.p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {programs.map((program, index) => (
              <motion.div
                key={program.title}
                initial={{ opacity: 0, y: 50, rotateX: -10 }}
                whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15, type: "spring", stiffness: 100 }}
                onHoverStart={() => setHoveredIndex(index)}
                onHoverEnd={() => setHoveredIndex(null)}
                className={`${program.color} rounded-2xl p-8 text-primary-foreground relative overflow-hidden group`}
              >
                {/* Popular badge */}
                {program.popular && (
                  <motion.div
                    initial={{ x: 100, rotate: 45 }}
                    animate={{ x: 0, rotate: 45 }}
                    className="absolute -right-8 top-6 bg-accent text-accent-foreground px-10 py-1 text-xs font-bold uppercase tracking-wider"
                  >
                    Popular
                  </motion.div>
                )}
                
                {/* Animated background pattern */}
                <motion.div
                  className="absolute inset-0 opacity-10"
                  animate={{
                    backgroundPosition: hoveredIndex === index ? ["0% 0%", "100% 100%"] : "0% 0%",
                  }}
                  transition={{ duration: 3, repeat: hoveredIndex === index ? Infinity : 0 }}
                  style={{
                    backgroundImage: "radial-gradient(circle, white 1px, transparent 1px)",
                    backgroundSize: "20px 20px",
                  }}
                />
                
                <div className="relative z-10">
                  <div className="flex items-center gap-2 mb-2">
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <span className="flex items-center gap-1 text-xs bg-white/20 rounded-full px-2 py-1 cursor-pointer">
                          <Clock className="w-3 h-3" />
                          {program.duration}
                        </span>
                      </TooltipTrigger>
                      <TooltipContent>Program duration</TooltipContent>
                    </Tooltip>
                  </div>
                  
                  <motion.h3 
                    className="font-display text-2xl font-semibold uppercase tracking-wide mb-2"
                    layoutId={`title-${program.title}`}
                  >
                    {program.title}
                  </motion.h3>
                  <p className="font-body text-sm opacity-90 mb-4">
                    {program.subtitle}
                  </p>
                  <p className="font-body text-primary-foreground/85 leading-relaxed mb-6">
                    {program.description}
                  </p>
                  
                  {/* Features list */}
                  <AnimatePresence>
                    {hoveredIndex === index && (
                      <motion.ul
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="mb-6 space-y-2"
                      >
                        {program.features.map((feature, i) => (
                          <motion.li
                            key={feature}
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: i * 0.1 }}
                            className="flex items-center gap-2 text-sm"
                          >
                            <Check className="w-4 h-4" />
                            {feature}
                          </motion.li>
                        ))}
                      </motion.ul>
                    )}
                  </AnimatePresence>
                  
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Button className="bg-accent/90 hover:bg-accent text-accent-foreground w-full font-semibold rounded-full relative overflow-hidden group/btn">
                      <motion.span
                        className="absolute inset-0 bg-white/20"
                        initial={{ x: "-100%" }}
                        whileHover={{ x: "100%" }}
                        transition={{ duration: 0.4 }}
                      />
                      <span className="relative">Sign Me Up</span>
                    </Button>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <Link to="/coaching">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button className="btn-sage group">
                  View All Programs
                  <motion.span
                    className="inline-block ml-2"
                    animate={{ x: [0, 4, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    <ArrowRight className="h-4 w-4" />
                  </motion.span>
                </Button>
              </motion.div>
            </Link>
          </motion.div>
        </div>
      </section>
    </TooltipProvider>
  );
};

export default ProgramsPreview;

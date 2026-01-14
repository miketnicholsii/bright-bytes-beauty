import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Check, Clock, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const programs = [
  {
    title: "Elimination Program",
    subtitle: "Food Discovery Journey",
    description: "Learning your blood type and choosing foods that align with your body's type can set you up to thrive in digestion, weight loss, and energy production.",
    features: ["Blood type analysis", "Custom food plan", "Weekly check-ins", "Recipe guides"],
    duration: "8 weeks",
    popular: true,
    color: "from-primary to-sage-dark",
  },
  {
    title: "Pantry Purge",
    subtitle: "Kitchen Transformation",
    description: "What you keep in your cupboards is likely to end up in your body. Having an organized pantry with healthy options can help you meet your personal food goals.",
    features: ["Full kitchen audit", "Shopping guide", "Meal prep tips", "Label reading"],
    duration: "4 weeks",
    popular: false,
    color: "from-moss to-primary",
  },
  {
    title: "Gut Health & Reset",
    subtitle: "Digestive Wellness",
    description: "Are you struggling with abdominal pain, heartburn, bloating, or low energy? This program provides you the tools to holistically thrive with your gut health.",
    features: ["Gut assessment", "Healing protocol", "Supplement guidance", "Lifestyle changes"],
    duration: "12 weeks",
    popular: false,
    color: "from-sage-dark to-espresso",
  },
];

const ProgramsPreview = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section className="section-padding bg-background relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-[0.02]" style={{
        backgroundImage: `radial-gradient(circle at 1px 1px, hsl(var(--foreground)) 1px, transparent 0)`,
        backgroundSize: '40px 40px',
      }} />
      
      <div className="container-custom relative">
        {/* Section Header */}
        <div className="text-center mb-16 lg:mb-20">
          <motion.span 
            className="label-editorial text-primary mb-6 block"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="inline-block w-8 h-px bg-primary/50 mr-3" />
            Transform Your Life
            <span className="inline-block w-8 h-px bg-primary/50 ml-3" />
          </motion.span>
          
          <motion.h2 
            className="font-display text-4xl md:text-5xl lg:text-6xl text-foreground mb-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            Coaching <span className="italic text-primary">Programs</span>
          </motion.h2>
          
          <motion.p 
            className="font-body text-lg text-muted-foreground max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            "Beloved, I pray that in every way you may prosper and be in health even as your soul prospers."
            <span className="block text-sm mt-2 text-muted-foreground/70">— 3 John 1:2</span>
          </motion.p>
        </div>

        {/* Programs Grid */}
        <div className="grid lg:grid-cols-3 gap-6 lg:gap-8">
          {programs.map((program, index) => (
            <motion.div
              key={program.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 0.8 }}
              onHoverStart={() => setHoveredIndex(index)}
              onHoverEnd={() => setHoveredIndex(null)}
              className="group relative"
            >
              <motion.div
                className={`relative h-full rounded-2xl overflow-hidden bg-gradient-to-br ${program.color} p-8 lg:p-10 text-primary-foreground`}
                whileHover={{ y: -8, scale: 1.02 }}
                transition={{ duration: 0.4 }}
              >
                {/* Popular badge */}
                {program.popular && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="absolute top-6 right-6 flex items-center gap-1.5 bg-accent text-accent-foreground px-3 py-1.5 rounded-full text-xs font-medium"
                  >
                    <Sparkles className="w-3 h-3" />
                    Popular
                  </motion.div>
                )}
                
                {/* Duration badge */}
                <div className="flex items-center gap-1.5 text-primary-foreground/70 text-sm mb-6">
                  <Clock className="w-4 h-4" />
                  {program.duration}
                </div>
                
                {/* Title */}
                <h3 className="font-display text-2xl lg:text-3xl mb-2">
                  {program.title}
                </h3>
                <p className="font-body text-sm text-primary-foreground/70 mb-6">
                  {program.subtitle}
                </p>
                
                {/* Description */}
                <p className="font-body text-primary-foreground/85 leading-relaxed mb-8">
                  {program.description}
                </p>
                
                {/* Features - show on hover */}
                <AnimatePresence>
                  {hoveredIndex === index && (
                    <motion.ul
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      className="space-y-2 mb-8"
                    >
                      {program.features.map((feature, i) => (
                        <motion.li
                          key={feature}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: i * 0.05 }}
                          className="flex items-center gap-2 text-sm text-primary-foreground/80"
                        >
                          <Check className="w-4 h-4 text-accent" />
                          {feature}
                        </motion.li>
                      ))}
                    </motion.ul>
                  )}
                </AnimatePresence>
                
                {/* CTA Button */}
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Button asChild className="w-full bg-accent hover:bg-accent/90 text-accent-foreground font-medium rounded-full">
                    <Link to="/contact#contact-form">Get Started</Link>
                  </Button>
                </motion.div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* View All Link */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Link to="/coaching">
            <motion.div
              className="inline-flex items-center gap-2 font-body text-primary hover:text-primary/80 transition-colors group"
              whileHover={{ x: 4 }}
            >
              <span className="font-medium">View All Programs</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </motion.div>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default ProgramsPreview;

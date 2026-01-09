import { motion } from "framer-motion";
import { Leaf, Heart, Sparkles } from "lucide-react";
import GlowCard from "@/components/ui/GlowCard";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const philosophyItems = [
  {
    icon: Leaf,
    title: "Nourish",
    description: "Fuel your body with foods that heal and energize. Learn to eat right for YOUR unique body type.",
    tooltip: "Personalized nutrition plans",
    color: "rgba(134, 160, 108, 0.4)",
  },
  {
    icon: Heart,
    title: "Heal",
    description: "Address the root causes of imbalance. Your body is capable of healing itself when given the right tools.",
    tooltip: "Holistic healing approach",
    color: "rgba(232, 140, 130, 0.4)",
  },
  {
    icon: Sparkles,
    title: "Thrive",
    description: "Transform your life holistically—mind, body, and spirit. Experience true wellness and vitality.",
    tooltip: "Complete transformation",
    color: "rgba(80, 175, 170, 0.4)",
  },
];

const Philosophy = () => {
  return (
    <TooltipProvider delayDuration={200}>
      <section className="section-padding bg-secondary/50 overflow-hidden">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <motion.h2 
              className="font-display text-4xl md:text-5xl font-medium text-foreground mb-4"
            >
              {["Nourish.", "Heal.", "Thrive."].map((word, i) => (
                <motion.span
                  key={word}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.2 }}
                  className={i === 1 ? "text-primary italic mx-2" : "mx-1"}
                >
                  {word}
                </motion.span>
              ))}
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="font-body text-lg text-muted-foreground max-w-2xl mx-auto"
            >
              I believe each person is their own health expert—it is my role to teach you how to access that intuition and motivate you on your journey towards becoming your happiest, healthiest self.
            </motion.p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {philosophyItems.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 50, rotateX: -15 }}
                whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                viewport={{ once: true }}
                transition={{ 
                  delay: index * 0.15,
                  type: "spring",
                  stiffness: 100
                }}
              >
                <GlowCard 
                  glowColor={item.color}
                  className="bg-card rounded-2xl p-8 text-center shadow-soft h-full"
                >
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <motion.div
                        className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6 cursor-pointer"
                        whileHover={{ 
                          scale: 1.1, 
                          rotate: [0, -10, 10, 0],
                          backgroundColor: "rgba(134, 160, 108, 0.2)"
                        }}
                        transition={{ duration: 0.4 }}
                      >
                        <motion.div
                          initial={{ scale: 0, rotate: -180 }}
                          whileInView={{ scale: 1, rotate: 0 }}
                          viewport={{ once: true }}
                          transition={{ 
                            delay: index * 0.15 + 0.3,
                            type: "spring",
                            stiffness: 200
                          }}
                        >
                          <item.icon className="w-8 h-8 text-primary" />
                        </motion.div>
                      </motion.div>
                    </TooltipTrigger>
                    <TooltipContent>{item.tooltip}</TooltipContent>
                  </Tooltip>
                  
                  <motion.h3 
                    className="font-display text-2xl font-semibold text-foreground mb-4"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.15 + 0.2 }}
                  >
                    {item.title}
                  </motion.h3>
                  <motion.p 
                    className="font-body text-muted-foreground leading-relaxed"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.15 + 0.3 }}
                  >
                    {item.description}
                  </motion.p>
                </GlowCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </TooltipProvider>
  );
};

export default Philosophy;

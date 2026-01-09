import { motion } from "framer-motion";
import AnimatedCounter from "@/components/ui/AnimatedCounter";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Users, Heart, Award, Calendar } from "lucide-react";

const stats = [
  { 
    icon: Users, 
    value: 500, 
    suffix: "+", 
    label: "Happy Clients",
    tooltip: "Clients who have transformed their lives" 
  },
  { 
    icon: Heart, 
    value: 98, 
    suffix: "%", 
    label: "Success Rate",
    tooltip: "Of clients achieve their wellness goals" 
  },
  { 
    icon: Award, 
    value: 10, 
    suffix: "+", 
    label: "Years Experience",
    tooltip: "Dedicated to holistic wellness" 
  },
  { 
    icon: Calendar, 
    value: 5000, 
    suffix: "+", 
    label: "Sessions Completed",
    tooltip: "One-on-one coaching sessions" 
  },
];

const StatsSection = () => {
  return (
    <TooltipProvider delayDuration={200}>
      <section className="py-16 bg-primary relative overflow-hidden">
        {/* Animated background shapes */}
        <motion.div
          className="absolute top-0 left-0 w-64 h-64 bg-white/5 rounded-full blur-3xl"
          animate={{ 
            x: [0, 50, 0], 
            y: [0, 30, 0],
            scale: [1, 1.2, 1]
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-0 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl"
          animate={{ 
            x: [0, -30, 0], 
            y: [0, -50, 0],
            scale: [1, 1.1, 1]
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />

        <div className="container-custom relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <Tooltip>
                  <TooltipTrigger asChild>
                    <motion.div
                      whileHover={{ scale: 1.05, y: -5 }}
                      transition={{ type: "spring", stiffness: 300 }}
                      className="cursor-pointer"
                    >
                      <motion.div
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 + 0.2, type: "spring" }}
                        className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-white/10 backdrop-blur-sm flex items-center justify-center"
                      >
                        <stat.icon className="w-8 h-8 text-white" />
                      </motion.div>
                      <div className="font-display text-4xl md:text-5xl font-bold text-white mb-2">
                        <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                      </div>
                      <p className="font-body text-white/80 text-sm uppercase tracking-wider">
                        {stat.label}
                      </p>
                    </motion.div>
                  </TooltipTrigger>
                  <TooltipContent side="bottom" className="font-medium">
                    {stat.tooltip}
                  </TooltipContent>
                </Tooltip>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </TooltipProvider>
  );
};

export default StatsSection;

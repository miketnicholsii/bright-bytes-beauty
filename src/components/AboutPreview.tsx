import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Award, Leaf, Heart } from "lucide-react";
import { Link } from "react-router-dom";
import { useRef } from "react";
import { Button } from "@/components/ui/button";
import coachImage from "@/assets/coach-about.jpg";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const credentials = [
  { icon: Award, label: "Certified Coach", tooltip: "IIN Certified Health Coach" },
  { icon: Leaf, label: "Holistic Approach", tooltip: "Mind, body & spirit wellness" },
  { icon: Heart, label: "Personalized Care", tooltip: "Tailored to your unique needs" },
];

const AboutPreview = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const imageY = useTransform(scrollYProgress, [0, 1], [50, -50]);
  const textY = useTransform(scrollYProgress, [0, 1], [30, -30]);

  return (
    <TooltipProvider delayDuration={200}>
      <section ref={containerRef} className="section-padding bg-background overflow-hidden">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Text Content */}
            <motion.div
              style={{ y: textY }}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <motion.span 
                className="inline-block font-body text-sm tracking-widest uppercase text-primary mb-4"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                Meet Your Coach
              </motion.span>
              <h2 className="font-display text-4xl md:text-5xl font-medium text-foreground mb-6">
                Meet Your{" "}
                <motion.span 
                  className="text-primary italic inline-block"
                  initial={{ opacity: 0, rotateY: -90 }}
                  whileInView={{ opacity: 1, rotateY: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3, type: "spring" }}
                >
                  Health Coach
                </motion.span>
              </h2>
              
              {/* Credentials badges */}
              <motion.div 
                className="flex flex-wrap gap-3 mb-6"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
              >
                {credentials.map((cred, index) => (
                  <Tooltip key={cred.label}>
                    <TooltipTrigger asChild>
                      <motion.div
                        initial={{ opacity: 0, scale: 0.8, y: 10 }}
                        whileInView={{ opacity: 1, scale: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4 + index * 0.1 }}
                        whileHover={{ scale: 1.05, y: -2 }}
                        className="flex items-center gap-2 bg-secondary/50 rounded-full px-4 py-2 cursor-pointer"
                      >
                        <cred.icon className="w-4 h-4 text-primary" />
                        <span className="text-sm font-medium text-foreground">{cred.label}</span>
                      </motion.div>
                    </TooltipTrigger>
                    <TooltipContent>{cred.tooltip}</TooltipContent>
                  </Tooltip>
                ))}
              </motion.div>
              
              <div className="space-y-6 font-body text-muted-foreground leading-relaxed">
                {[
                  "My aim as a Holistic Health Coach is to partner with you to understand what works for your body and help you create and implement effective lifestyle changes and solutions that will improve your overall physical health + wellness.",
                  "I am here to debunk all of the so-called \"all you have to do is this\" myths. With general knowledge about your medical condition, your nutrition, and your diet, together we will identify behaviors and habits that must be altered to help transform your life holistically.",
                  "Health looks different for everyone—there is no one-stop shop, solution, or program that works for everyone. Thrive with Coach Candice is all about seeing each of us \"thrive\" mind, body, and spirit.",
                ].map((text, index) => (
                  <motion.p
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 + index * 0.1 }}
                  >
                    {text}
                  </motion.p>
                ))}
              </div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.8 }}
              >
                <Link to="/coaching">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="inline-block"
                  >
                    <Button className="btn-sage mt-8 group relative overflow-hidden">
                      <motion.span
                        className="absolute inset-0 bg-white/20"
                        initial={{ x: "-100%" }}
                        whileHover={{ x: "100%" }}
                        transition={{ duration: 0.4 }}
                      />
                      <span className="relative flex items-center">
                        Coaching Programs
                        <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </span>
                    </Button>
                  </motion.div>
                </Link>
              </motion.div>
            </motion.div>

            {/* Image with floating elements */}
            <motion.div
              style={{ y: imageY }}
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="relative">
                {/* Animated background gradient */}
                <motion.div 
                  className="absolute -inset-4 bg-gradient-to-br from-secondary to-accent/20 rounded-3xl -z-10"
                  animate={{ 
                    scale: [1, 1.02, 1],
                    rotate: [0, 1, 0, -1, 0]
                  }}
                  transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                />
                
                {/* Main image */}
                <motion.img
                  src={coachImage}
                  alt="Coach Candice"
                  className="w-full max-w-md mx-auto rounded-2xl shadow-elevated"
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 200 }}
                />
                
                {/* Floating badge */}
                <motion.div
                  className="absolute -right-4 top-1/4 bg-white rounded-2xl shadow-lg p-4"
                  initial={{ opacity: 0, scale: 0, x: 20 }}
                  whileInView={{ opacity: 1, scale: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.6, type: "spring" }}
                  animate={{ y: [0, -10, 0] }}
                  whileHover={{ scale: 1.1 }}
                >
                  <div className="text-center">
                    <span className="text-2xl font-bold text-primary">10+</span>
                    <p className="text-xs text-muted-foreground">Years</p>
                  </div>
                </motion.div>
                
                {/* Second floating element */}
                <motion.div
                  className="absolute -left-4 bottom-1/4 bg-accent text-white rounded-2xl shadow-lg p-4"
                  initial={{ opacity: 0, scale: 0, x: -20 }}
                  whileInView={{ opacity: 1, scale: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.8, type: "spring" }}
                  animate={{ y: [0, 10, 0] }}
                  whileHover={{ scale: 1.1 }}
                >
                  <Heart className="w-6 h-6" />
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </TooltipProvider>
  );
};

export default AboutPreview;

import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Award, Leaf, Heart } from "lucide-react";
import { Link } from "react-router-dom";
import { useRef } from "react";
import { Button } from "@/components/ui/button";
import coachImage from "@/assets/coach-about.jpg";

const credentials = [
  { icon: Award, label: "IIN Certified" },
  { icon: Leaf, label: "Holistic Approach" },
  { icon: Heart, label: "Personalized Care" },
];

const AboutPreview = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const imageY = useTransform(scrollYProgress, [0, 1], [80, -80]);

  return (
    <section ref={containerRef} className="section-padding bg-secondary/30 overflow-hidden">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image Column - Optimized size */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative order-2 lg:order-1 max-w-sm mx-auto lg:max-w-md"
          >
            <div className="relative">
              {/* Decorative frame */}
              <motion.div 
                className="absolute -inset-3 border border-primary/10 rounded-2xl"
                style={{ y: imageY }}
              />
              
              {/* Main image - More compact aspect ratio */}
              <motion.div
                className="relative rounded-xl overflow-hidden shadow-card"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.5 }}
              >
                <img
                  src={coachImage}
                  alt="Coach Candice"
                  className="w-full aspect-[3/4] object-cover object-top"
                />
                
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-primary/15 via-transparent to-transparent" />
              </motion.div>
              
              {/* Floating stats card - More compact */}
              <motion.div
                className="absolute -right-4 md:-right-8 top-1/4 bg-card rounded-xl shadow-soft p-4 border border-border/50"
                initial={{ opacity: 0, scale: 0.8, x: 20 }}
                whileInView={{ opacity: 1, scale: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4, duration: 0.5 }}
                whileHover={{ y: -3 }}
              >
                <span className="font-display text-3xl text-primary block">10+</span>
                <span className="font-body text-xs text-muted-foreground">Years Experience</span>
              </motion.div>
              
              {/* Decorative accent */}
              <motion.div
                className="absolute -left-4 bottom-1/4 w-12 h-12 bg-accent/20 rounded-full blur-xl"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 4, repeat: Infinity }}
              />
            </div>
          </motion.div>

          {/* Text Column */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="order-1 lg:order-2"
          >
            <span className="label-editorial text-primary mb-6 block">
              <span className="inline-block w-8 h-px bg-primary/50 mr-3" />
              Meet Your Coach
            </span>
            
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-foreground leading-[1.1] mb-8">
              Your Partner in{" "}
              <span className="italic text-primary">Wellness</span>
            </h2>
            
            {/* Credentials */}
            <motion.div 
              className="flex flex-wrap gap-3 mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              {credentials.map((cred, index) => (
                <motion.div
                  key={cred.label}
                  className="flex items-center gap-2 bg-card rounded-full px-4 py-2 border border-border/50"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 + index * 0.1 }}
                  whileHover={{ scale: 1.05, borderColor: "hsl(var(--primary) / 0.3)" }}
                >
                  <cred.icon className="w-4 h-4 text-primary" strokeWidth={1.5} />
                  <span className="text-sm font-medium text-foreground">{cred.label}</span>
                </motion.div>
              ))}
            </motion.div>
            
            <div className="space-y-5 mb-10">
              <p className="font-body text-lg text-muted-foreground leading-relaxed">
                My aim as a Holistic Health Coach is to partner with you to understand what works for your body and help you create and implement effective lifestyle changes.
              </p>
              <p className="font-body text-muted-foreground leading-relaxed">
                Health looks different for everyone—there is no one-stop shop, solution, or program that works for everyone. Thrive with Coach Candice is all about seeing each of us "thrive" mind, body, and spirit.
              </p>
            </div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
              className="flex flex-wrap gap-4"
            >
              <Link to="/about">
                <motion.div
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Button className="btn-sage group">
                    <span className="flex items-center gap-2">
                      Learn More
                      <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </span>
                  </Button>
                </motion.div>
              </Link>
              
              <Link to="/coaching">
                <motion.div
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Button variant="ghost" className="font-body text-primary hover:text-primary hover:bg-primary/5">
                    View Programs →
                  </Button>
                </motion.div>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutPreview;

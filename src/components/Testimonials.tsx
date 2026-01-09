import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Quote, ChevronLeft, ChevronRight, Star } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const testimonials = [
  {
    quote: "Coach Candice is amazing! Her passion to see people operate in who they are designed to be, sets her apart! She listens intently to understand the mindset that a person has toward diet and exercise. As a result, I have more energy, clearer focus, and renewed motivation to live!",
    author: "N. Morris",
    rating: 5,
    program: "Elimination Program",
  },
  {
    quote: "When I began working with her, I had depleted energy, brain fog, and just wasn't feeling like myself. She was determined to get to the root cause of why I was feeling out of sorts. Coach Candice has inspired me to take better care of my body, mind, and spirit.",
    author: "L. Brown",
    rating: 5,
    program: "Gut Health & Reset",
  },
  {
    quote: "The pantry purge was life-changing! I never realized how much the food in my kitchen was affecting my health. Coach Candice made the process easy and educational. I've lost 15 pounds and feel amazing!",
    author: "S. Johnson",
    rating: 5,
    program: "Pantry Purge",
  },
];

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0,
      scale: 0.9,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
      scale: 1,
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 300 : -300,
      opacity: 0,
      scale: 0.9,
    }),
  };

  const paginate = (newDirection: number) => {
    setDirection(newDirection);
    setActiveIndex((prev) => (prev + newDirection + testimonials.length) % testimonials.length);
  };

  return (
    <TooltipProvider delayDuration={200}>
      <section className="section-padding bg-background overflow-hidden">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <motion.span 
              className="inline-block font-body text-sm tracking-widest uppercase text-primary mb-4"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              Success Stories
            </motion.span>
            <h2 className="font-display text-4xl md:text-5xl font-medium text-foreground">
              Client <span className="text-primary italic">Testimonials</span>
            </h2>
          </motion.div>

          {/* Desktop Grid View */}
          <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.author}
                initial={{ opacity: 0, y: 50, rotateY: -10 }}
                whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15, type: "spring" }}
                whileHover={{ y: -10, boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.15)" }}
                className="bg-card rounded-2xl p-8 shadow-card relative group cursor-pointer"
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                />
                
                <Quote className="absolute top-6 right-6 w-12 h-12 text-primary/10 group-hover:text-primary/20 transition-colors" />
                
                {/* Rating stars */}
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 + i * 0.05 }}
                    >
                      <Star className="w-4 h-4 fill-accent text-accent" />
                    </motion.div>
                  ))}
                </div>
                
                <p className="font-body text-muted-foreground leading-relaxed mb-6 italic relative z-10">
                  "{testimonial.quote}"
                </p>
                
                <div className="flex items-center justify-between relative z-10">
                  <div className="flex items-center gap-4">
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <motion.div 
                          className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center cursor-pointer"
                          whileHover={{ scale: 1.1, rotate: 5 }}
                        >
                          <span className="font-display text-lg font-semibold text-primary">
                            {testimonial.author.charAt(0)}
                          </span>
                        </motion.div>
                      </TooltipTrigger>
                      <TooltipContent>Verified Client</TooltipContent>
                    </Tooltip>
                    <div>
                      <span className="font-display text-lg font-semibold text-foreground block">
                        {testimonial.author}
                      </span>
                      <span className="text-xs text-muted-foreground">
                        {testimonial.program}
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Mobile Carousel View */}
          <div className="md:hidden relative">
            <div className="overflow-hidden">
              <AnimatePresence initial={false} custom={direction} mode="wait">
                <motion.div
                  key={activeIndex}
                  custom={direction}
                  variants={slideVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{
                    x: { type: "spring", stiffness: 300, damping: 30 },
                    opacity: { duration: 0.2 },
                  }}
                  className="bg-card rounded-2xl p-8 shadow-card relative"
                >
                  <Quote className="absolute top-6 right-6 w-12 h-12 text-primary/10" />
                  
                  <div className="flex gap-1 mb-4">
                    {Array.from({ length: testimonials[activeIndex].rating }).map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                    ))}
                  </div>
                  
                  <p className="font-body text-muted-foreground leading-relaxed mb-6 italic">
                    "{testimonials[activeIndex].quote}"
                  </p>
                  
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                      <span className="font-display text-lg font-semibold text-primary">
                        {testimonials[activeIndex].author.charAt(0)}
                      </span>
                    </div>
                    <div>
                      <span className="font-display text-lg font-semibold text-foreground block">
                        {testimonials[activeIndex].author}
                      </span>
                      <span className="text-xs text-muted-foreground">
                        {testimonials[activeIndex].program}
                      </span>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Navigation arrows */}
            <div className="flex justify-center gap-4 mt-6">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => paginate(-1)}
                className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary hover:bg-primary/20 transition-colors"
              >
                <ChevronLeft className="w-6 h-6" />
              </motion.button>
              
              {/* Dots indicator */}
              <div className="flex items-center gap-2">
                {testimonials.map((_, index) => (
                  <motion.button
                    key={index}
                    onClick={() => {
                      setDirection(index > activeIndex ? 1 : -1);
                      setActiveIndex(index);
                    }}
                    className={`w-2 h-2 rounded-full transition-all ${
                      index === activeIndex ? "bg-primary w-6" : "bg-primary/30"
                    }`}
                    whileHover={{ scale: 1.2 }}
                  />
                ))}
              </div>
              
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => paginate(1)}
                className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary hover:bg-primary/20 transition-colors"
              >
                <ChevronRight className="w-6 h-6" />
              </motion.button>
            </div>
          </div>
        </div>
      </section>
    </TooltipProvider>
  );
};

export default Testimonials;

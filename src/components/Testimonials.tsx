import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react";

const testimonials = [
  {
    quote: "Coach Candice is amazing! Her passion to see people operate in who they are designed to be, sets her apart! She listens intently to understand the mindset that a person has toward diet and exercise. As a result, I have more energy, clearer focus, and renewed motivation to live!",
    author: "N. Morris",
    program: "Elimination Program",
    rating: 5,
  },
  {
    quote: "When I began working with her, I had depleted energy, brain fog, and just wasn't feeling like myself. She was determined to get to the root cause of why I was feeling out of sorts. Coach Candice has inspired me to take better care of my body, mind, and spirit.",
    author: "L. Brown",
    program: "Gut Health & Reset",
    rating: 5,
  },
  {
    quote: "The pantry purge was life-changing! I never realized how much the food in my kitchen was affecting my health. Coach Candice made the process easy and educational. I've lost 15 pounds and feel amazing!",
    author: "S. Johnson",
    program: "Pantry Purge",
    rating: 5,
  },
];

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 100 : -100,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 100 : -100,
      opacity: 0,
    }),
  };

  const paginate = (newDirection: number) => {
    setDirection(newDirection);
    setActiveIndex((prev) => (prev + newDirection + testimonials.length) % testimonials.length);
  };

  return (
    <section className="section-padding bg-primary relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary-foreground/10 to-transparent" />
      <motion.div
        className="absolute top-1/4 right-[10%] w-64 h-64 rounded-full border border-primary-foreground/5"
        animate={{ scale: [1, 1.1, 1], rotate: [0, 90, 0] }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      />
      
      <div className="container-custom relative">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="label-editorial text-primary-foreground/60 mb-6 block">
            <span className="inline-block w-8 h-px bg-primary-foreground/30 mr-3" />
            Client Stories
            <span className="inline-block w-8 h-px bg-primary-foreground/30 ml-3" />
          </span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-primary-foreground">
            Words of <span className="italic text-accent">Transformation</span>
          </h2>
        </motion.div>

        {/* Desktop Grid */}
        <div className="hidden lg:grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.author}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 0.8 }}
              className="group"
            >
              <motion.div
                className="relative bg-primary-foreground/5 backdrop-blur-sm rounded-2xl p-8 h-full border border-primary-foreground/10 transition-all duration-500 hover:bg-primary-foreground/10 hover:border-primary-foreground/20"
                whileHover={{ y: -8 }}
              >
                {/* Quote icon */}
                <Quote className="w-10 h-10 text-accent/30 mb-6" strokeWidth={1} />
                
                {/* Stars */}
                <div className="flex gap-1 mb-6">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                  ))}
                </div>
                
                {/* Quote */}
                <p className="font-body text-primary-foreground/90 leading-relaxed mb-8 text-[15px]">
                  "{testimonial.quote}"
                </p>
                
                {/* Author */}
                <div className="pt-6 border-t border-primary-foreground/10">
                  <span className="font-display text-xl text-primary-foreground block mb-1">
                    {testimonial.author}
                  </span>
                  <span className="font-body text-sm text-primary-foreground/60">
                    {testimonial.program}
                  </span>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Mobile Carousel */}
        <div className="lg:hidden">
          <div className="relative overflow-hidden">
            <AnimatePresence initial={false} custom={direction} mode="wait">
              <motion.div
                key={activeIndex}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                className="bg-primary-foreground/5 backdrop-blur-sm rounded-2xl p-8 border border-primary-foreground/10"
              >
                <Quote className="w-10 h-10 text-accent/30 mb-6" strokeWidth={1} />
                
                <div className="flex gap-1 mb-6">
                  {Array.from({ length: testimonials[activeIndex].rating }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                  ))}
                </div>
                
                <p className="font-body text-primary-foreground/90 leading-relaxed mb-8">
                  "{testimonials[activeIndex].quote}"
                </p>
                
                <div className="pt-6 border-t border-primary-foreground/10">
                  <span className="font-display text-xl text-primary-foreground block mb-1">
                    {testimonials[activeIndex].author}
                  </span>
                  <span className="font-body text-sm text-primary-foreground/60">
                    {testimonials[activeIndex].program}
                  </span>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-6 mt-8">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => paginate(-1)}
              className="w-12 h-12 rounded-full border border-primary-foreground/20 flex items-center justify-center text-primary-foreground/60 hover:text-primary-foreground hover:border-primary-foreground/40 transition-colors"
            >
              <ChevronLeft className="w-5 h-5" />
            </motion.button>
            
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setDirection(index > activeIndex ? 1 : -1);
                    setActiveIndex(index);
                  }}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === activeIndex 
                      ? "bg-accent w-6" 
                      : "bg-primary-foreground/30 hover:bg-primary-foreground/50"
                  }`}
                />
              ))}
            </div>
            
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => paginate(1)}
              className="w-12 h-12 rounded-full border border-primary-foreground/20 flex items-center justify-center text-primary-foreground/60 hover:text-primary-foreground hover:border-primary-foreground/40 transition-colors"
            >
              <ChevronRight className="w-5 h-5" />
            </motion.button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

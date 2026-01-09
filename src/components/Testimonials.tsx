import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const testimonials = [
  {
    quote: "Coach Candice is amazing! Her passion to see people operate in who they are designed to be, sets her apart! She listens intently to understand the mindset that a person has toward diet and exercise. As a result, I have more energy, clearer focus, and renewed motivation to live!",
    author: "N. Morris",
  },
  {
    quote: "When I began working with her, I had depleted energy, brain fog, and just wasn't feeling like myself. She was determined to get to the root cause of why I was feeling out of sorts. Coach Candice has inspired me to take better care of my body, mind, and spirit.",
    author: "L. Brown",
  },
];

const Testimonials = () => {
  return (
    <section className="section-padding bg-background">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block font-body text-sm tracking-widest uppercase text-primary mb-4">
            Success Stories
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-medium text-foreground">
            Client <span className="text-primary italic">Testimonials</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.author}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="bg-card rounded-2xl p-8 shadow-card relative"
            >
              <Quote className="absolute top-6 right-6 w-12 h-12 text-primary/10" />
              <p className="font-body text-muted-foreground leading-relaxed mb-6 italic">
                "{testimonial.quote}"
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                  <span className="font-display text-lg font-semibold text-primary">
                    {testimonial.author.charAt(0)}
                  </span>
                </div>
                <span className="font-display text-lg font-semibold text-foreground">
                  {testimonial.author}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

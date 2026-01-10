import { motion } from "framer-motion";
import { Leaf, Heart, Sparkles, ArrowUpRight } from "lucide-react";

const philosophyItems = [
  {
    icon: Leaf,
    title: "Nourish",
    number: "01",
    description: "Fuel your body with foods that heal and energize. Learn to eat right for YOUR unique body type and discover the power of intentional nutrition.",
  },
  {
    icon: Heart,
    title: "Heal",
    number: "02",
    description: "Address the root causes of imbalance. Your body is capable of extraordinary healing when given the right tools, guidance, and support.",
  },
  {
    icon: Sparkles,
    title: "Thrive",
    number: "03",
    description: "Transform your life holistically—mind, body, and spirit. Experience true wellness, vibrant energy, and lasting vitality every single day.",
  },
];

const Philosophy = () => {
  return (
    <section className="section-padding bg-background relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-secondary/50 to-transparent" />
      
      <div className="container-custom relative">
        {/* Section Header */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 mb-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="label-editorial text-primary mb-6 block">
              <span className="inline-block w-8 h-px bg-primary/50 mr-3" />
              The Philosophy
            </span>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-foreground leading-[1.1]">
              Nourish. <span className="italic text-primary">Heal.</span> Thrive.
            </h2>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:pt-8"
          >
            <p className="font-body text-lg text-muted-foreground leading-relaxed max-w-xl">
              I believe each person is their own health expert—it is my role to teach you how to access that intuition and motivate you on your journey towards becoming your happiest, healthiest self.
            </p>
          </motion.div>
        </div>

        {/* Philosophy Cards */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {philosophyItems.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ 
                delay: index * 0.15,
                duration: 0.8,
              }}
              className="group"
            >
              <motion.div
                className="relative bg-card rounded-2xl p-8 lg:p-10 h-full border border-border/50 transition-all duration-700 hover:border-primary/20 hover:shadow-card"
                whileHover={{ y: -8 }}
                transition={{ duration: 0.4 }}
              >
                {/* Number */}
                <span className="font-display text-7xl text-primary/5 absolute top-6 right-8 select-none">
                  {item.number}
                </span>
                
                {/* Icon */}
                <motion.div
                  className="w-14 h-14 rounded-2xl bg-primary/5 flex items-center justify-center mb-8 group-hover:bg-primary/10 transition-colors duration-500"
                  whileHover={{ scale: 1.05, rotate: 5 }}
                >
                  <item.icon className="w-6 h-6 text-primary" strokeWidth={1.5} />
                </motion.div>
                
                {/* Content */}
                <h3 className="font-display text-2xl lg:text-3xl text-foreground mb-4">
                  {item.title}
                </h3>
                <p className="font-body text-muted-foreground leading-relaxed mb-8">
                  {item.description}
                </p>
                
                {/* Learn More Link */}
                <motion.a
                  href="#"
                  className="inline-flex items-center gap-2 font-body text-sm font-medium text-primary opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  whileHover={{ x: 4 }}
                >
                  Learn more
                  <ArrowUpRight className="w-4 h-4" />
                </motion.a>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Philosophy;

import { motion } from "framer-motion";
import { Leaf, Heart, Sparkles } from "lucide-react";

const philosophyItems = [
  {
    icon: Leaf,
    title: "Nourish",
    description: "Fuel your body with foods that heal and energize. Learn to eat right for YOUR unique body type.",
  },
  {
    icon: Heart,
    title: "Heal",
    description: "Address the root causes of imbalance. Your body is capable of healing itself when given the right tools.",
  },
  {
    icon: Sparkles,
    title: "Thrive",
    description: "Transform your life holistically—mind, body, and spirit. Experience true wellness and vitality.",
  },
];

const Philosophy = () => {
  return (
    <section className="section-padding bg-secondary/50">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-4xl md:text-5xl font-medium text-foreground mb-4">
            Nourish. <span className="text-primary italic">Heal.</span> Thrive.
          </h2>
          <p className="font-body text-lg text-muted-foreground max-w-2xl mx-auto">
            I believe each person is their own health expert—it is my role to teach you how to access that intuition and motivate you on your journey towards becoming your happiest, healthiest self.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {philosophyItems.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              className="bg-card rounded-2xl p-8 text-center card-hover shadow-soft"
            >
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
                <item.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-display text-2xl font-semibold text-foreground mb-4">
                {item.title}
              </h3>
              <p className="font-body text-muted-foreground leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Philosophy;

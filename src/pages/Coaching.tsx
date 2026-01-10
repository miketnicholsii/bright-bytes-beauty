import { motion } from "framer-motion";
import { ArrowRight, Clock, Check, Sparkles } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageTransition from "@/components/PageTransition";
import { Button } from "@/components/ui/button";
import vegetablesHero from "@/assets/vegetables-hero.jpg";

const programs = [
  {
    title: "Elimination Program",
    subtitle: "Food Discovery Journey",
    description: "Learning your blood type and choosing foods that align with your body's type can set you up to thrive in digestion, weight loss, metabolism control, energy production, and disease prevention.",
    features: ["Blood type analysis", "Custom food plan", "Weekly check-ins", "Recipe guides"],
    duration: "8 weeks",
    color: "from-primary to-sage-dark",
    popular: true,
  },
  {
    title: "Pantry Purge",
    subtitle: "Kitchen Transformation",
    description: "What you keep in your cupboards is likely to end up in your body. Having an organized pantry with healthy options can help you meet your personal food goals.",
    features: ["Full kitchen audit", "Shopping guide", "Meal prep tips", "Label reading"],
    duration: "4 weeks",
    color: "from-moss to-primary",
    popular: false,
  },
  {
    title: "Gut Health & Reset",
    subtitle: "Digestive Wellness",
    description: "Are you struggling with abdominal pain, heartburn, bloating, or low energy? This program provides you the tools to holistically thrive with your gut health.",
    features: ["Gut assessment", "Healing protocol", "Supplement guidance", "Lifestyle changes"],
    duration: "12 weeks",
    color: "from-sage-dark to-espresso",
    popular: false,
  },
];

const Coaching = () => {
  return (
    <PageTransition>
      <Navbar />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative py-32 overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img
              src={vegetablesHero}
              alt="Fresh vegetables"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 hero-gradient-overlay" />
          </div>

          <div className="container-custom relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-center max-w-4xl mx-auto"
            >
              <span className="label-editorial text-primary-foreground/70 mb-6 block">
                Transform Your Life
              </span>
              <h1 className="font-display text-5xl md:text-6xl lg:text-7xl text-primary-foreground mb-6 leading-[1.1]">
                Coaching <span className="italic text-accent">Programs</span>
              </h1>
              <p className="font-body text-lg md:text-xl text-primary-foreground/85 italic max-w-2xl mx-auto">
                "Beloved, I pray that in every way you may prosper and be in health even as your soul prospers." — 3 John 1:2
              </p>
            </motion.div>
          </div>
        </section>

        {/* Intro */}
        <section className="py-20 bg-background">
          <div className="container-custom">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-body text-lg text-center text-muted-foreground max-w-3xl mx-auto leading-relaxed"
            >
              As a Health Educator, it is my number one goal to help my clients see their body's full capability through a holistic lens. Our bodies are capable of healing themselves once we place them in an environment to "Thrive".
            </motion.p>
          </div>
        </section>

        {/* Programs */}
        <section className="section-padding bg-secondary/30">
          <div className="container-custom">
            <div className="grid lg:grid-cols-3 gap-8">
              {programs.map((program, index) => (
                <motion.div
                  key={program.title}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.15, duration: 0.6 }}
                  className="group"
                >
                  <motion.div
                    className={`relative h-full rounded-2xl overflow-hidden bg-gradient-to-br ${program.color} p-8 lg:p-10 text-primary-foreground`}
                    whileHover={{ y: -8, scale: 1.02 }}
                    transition={{ duration: 0.4 }}
                  >
                    {program.popular && (
                      <div className="absolute top-6 right-6 flex items-center gap-1.5 bg-accent text-accent-foreground px-3 py-1.5 rounded-full text-xs font-medium">
                        <Sparkles className="w-3 h-3" />
                        Popular
                      </div>
                    )}
                    
                    <div className="flex items-center gap-1.5 text-primary-foreground/70 text-sm mb-6">
                      <Clock className="w-4 h-4" />
                      {program.duration}
                    </div>
                    
                    <h2 className="font-display text-2xl lg:text-3xl mb-2">
                      {program.title}
                    </h2>
                    <p className="font-body text-sm text-primary-foreground/70 mb-6">
                      {program.subtitle}
                    </p>
                    
                    <p className="font-body text-primary-foreground/85 leading-relaxed mb-8">
                      {program.description}
                    </p>
                    
                    <ul className="space-y-2 mb-8">
                      {program.features.map((feature) => (
                        <li key={feature} className="flex items-center gap-2 text-sm text-primary-foreground/80">
                          <Check className="w-4 h-4 text-accent" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    
                    <Button className="w-full bg-accent hover:bg-accent/90 text-accent-foreground font-medium rounded-full group/btn">
                      Get Started
                      <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
                    </Button>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="section-padding bg-background">
          <div className="container-custom text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-foreground mb-6">
                Ready to Start Your <span className="text-primary italic">Journey</span>?
              </h2>
              <p className="font-body text-lg text-muted-foreground max-w-2xl mx-auto mb-10">
                Let's partner together to create a personalized plan that works for YOUR unique body and lifestyle.
              </p>
              <motion.div
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                className="inline-block"
              >
                <Button className="btn-coral group">
                  Book a Free Consultation
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </PageTransition>
  );
};

export default Coaching;

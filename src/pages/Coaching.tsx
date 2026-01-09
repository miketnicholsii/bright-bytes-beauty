import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import vegetablesHero from "@/assets/vegetables-hero.jpg";

const programs = [
  {
    title: "Elimination Program",
    subtitle: '"Thrive" Food Elimination Program',
    description: "Learning your blood type and choosing foods that align with your body's type can set you up to \"thrive\" in the area of digestion, weight loss, metabolism control, energy production, and disease prevention. This program begins with a discovery session that is all about \"you\" to help establish a specific foods list that may be prohibiting your body's ability to \"thrive\". Our body speaks to us through signs and symptoms (that often go unnoticed). After the discovery phase, we will work together to establish food choice options and a list of foods to eliminate for a specified period of time.",
    color: "bg-primary",
  },
  {
    title: "Pantry Purge",
    subtitle: '"Thrive" We Are What We Eat',
    description: "What you keep in your cupboards is likely to end up in your body. Having an organized pantry with a range of staples and healthy options in your kitchen can go a long way toward helping you meet your personal food goals. Foods containing such harmful ingredients as High Fructose Corn Syrup, MSG, hydrogenated oils, artificial sweeteners, colors, and dyes are hiding in everything from Ketchup to Cereals to Frozen Foods. With this program, I will help you identify these and other harmful ingredients, and Purge them from your home and from your body!",
    color: "bg-highlight",
  },
  {
    title: "Gut Health & Reset",
    subtitle: '"Thrive" Gut Health and Reset',
    description: "Are you struggling with abdominal pain, heartburn, bloating, gas, constipation and/or diarrhea? Are chronic pain, low energy, weight gain, low libido, brain fog and/or are autoimmune diseases plaguing you? Has conflicting medical and nutritional advice left you feeling confused, overwhelmed, and with further questions? Has conventional health care left you nowhere to turn? When your gut is healthy, your body might work as it was designed to. This program provides you the tools to holistically \"thrive\" with your gut health.",
    color: "bg-sage-dark",
  },
];

const Coaching = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative py-24 overflow-hidden">
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
              transition={{ duration: 0.8 }}
              className="text-center max-w-4xl mx-auto"
            >
              <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-medium text-primary-foreground mb-6">
                Coaching
              </h1>
              <p className="font-body text-lg md:text-xl text-primary-foreground/90 italic">
                "Beloved, I pray that in every way you may prosper and be in health even as your soul prospers." — 3 John 1:2 NLT
              </p>
            </motion.div>
          </div>
        </section>

        {/* Intro */}
        <section className="py-16 bg-background">
          <div className="container-custom">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-body text-lg text-center text-muted-foreground max-w-4xl mx-auto leading-relaxed"
            >
              As a Health Educator, it is my number one goal to help my clients see their body's full capability through a holistic lens. Our bodies are capable of healing themselves once we place them in an environment to "Thrive".
            </motion.p>
          </div>
        </section>

        {/* Programs */}
        <section className="section-padding bg-muted/30">
          <div className="container-custom">
            <div className="grid md:grid-cols-3 gap-8">
              {programs.map((program, index) => (
                <motion.div
                  key={program.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.15 }}
                  className={`${program.color} rounded-2xl p-8 text-primary-foreground flex flex-col`}
                >
                  <h2 className="font-display text-2xl font-semibold uppercase tracking-wide mb-2">
                    {program.title}
                  </h2>
                  <p className="font-body text-sm opacity-90 mb-4">
                    {program.subtitle}
                  </p>
                  <p className="font-body text-primary-foreground/85 leading-relaxed mb-8 flex-grow">
                    {program.description}
                  </p>
                  <Button className="bg-accent/90 hover:bg-accent text-accent-foreground w-full font-semibold rounded-full group">
                    Sign Me Up
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="section-padding bg-secondary/50">
          <div className="container-custom text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="font-display text-3xl md:text-4xl font-medium text-foreground mb-6">
                Ready to Start Your <span className="text-primary italic">Journey</span>?
              </h2>
              <p className="font-body text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
                Let's partner together to create a personalized plan that works for YOUR unique body and lifestyle.
              </p>
              <Button className="btn-coral group">
                Book a Free Consultation
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Coaching;

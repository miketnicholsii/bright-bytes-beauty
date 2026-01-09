import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const programs = [
  {
    title: "Elimination Program",
    subtitle: '"Thrive" Food Elimination Program',
    description: "Learning your blood type and choosing foods that align with your body's type can set you up to thrive in digestion, weight loss, metabolism control, energy production, and disease prevention.",
    color: "bg-primary",
  },
  {
    title: "Pantry Purge",
    subtitle: '"Thrive" We Are What We Eat',
    description: "What you keep in your cupboards is likely to end up in your body. Having an organized pantry with healthy options can help you meet your personal food goals.",
    color: "bg-highlight",
  },
  {
    title: "Gut Health & Reset",
    subtitle: '"Thrive" Gut Health and Reset',
    description: "Are you struggling with abdominal pain, heartburn, bloating, or low energy? This program provides you the tools to holistically thrive with your gut health.",
    color: "bg-sage-dark",
  },
];

const ProgramsPreview = () => {
  return (
    <section className="section-padding bg-muted/50">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block font-body text-sm tracking-widest uppercase text-primary mb-4">
            Transform Your Life
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-medium text-foreground mb-4">
            Coaching <span className="text-primary italic">Programs</span>
          </h2>
          <p className="font-body text-lg text-muted-foreground max-w-2xl mx-auto">
            "Beloved, I pray that in every way you may prosper and be in health even as your soul prospers." — 3 John 1:2
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {programs.map((program, index) => (
            <motion.div
              key={program.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              className={`${program.color} rounded-2xl p-8 text-primary-foreground card-hover`}
            >
              <h3 className="font-display text-2xl font-semibold uppercase tracking-wide mb-2">
                {program.title}
              </h3>
              <p className="font-body text-sm opacity-90 mb-4">
                {program.subtitle}
              </p>
              <p className="font-body text-primary-foreground/85 leading-relaxed mb-6">
                {program.description}
              </p>
              <Button className="bg-accent/90 hover:bg-accent text-accent-foreground w-full font-semibold rounded-full">
                Sign Me Up
              </Button>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Link to="/coaching">
            <Button className="btn-sage group">
              View All Programs
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default ProgramsPreview;

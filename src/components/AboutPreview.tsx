import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import coachImage from "@/assets/coach-about.jpg";

const AboutPreview = () => {
  return (
    <section className="section-padding bg-background overflow-hidden">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block font-body text-sm tracking-widest uppercase text-primary mb-4">
              Meet Your Coach
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-medium text-foreground mb-6">
              Meet Your{" "}
              <span className="text-primary italic">Health Coach</span>
            </h2>
            <div className="space-y-6 font-body text-muted-foreground leading-relaxed">
              <p>
                My aim as a Holistic Health Coach is to partner with you to understand what works for your body and help you create and implement effective lifestyle changes and solutions that will improve your overall physical health + wellness.
              </p>
              <p>
                I am here to debunk all of the so-called "all you have to do is this" myths. With general knowledge about your medical condition, your nutrition, and your diet, together we will identify behaviors and habits that must be altered to help transform your life holistically.
              </p>
              <p>
                Health looks different for everyone—there is no one-stop shop, solution, or program that works for everyone. Thrive with Coach Candice is all about seeing each of us "thrive" mind, body, and spirit.
              </p>
            </div>
            <Link to="/coaching">
              <Button className="btn-sage mt-8 group">
                Coaching Programs
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-br from-secondary to-accent/20 rounded-3xl -z-10" />
              <img
                src={coachImage}
                alt="Coach Candice"
                className="w-full max-w-md mx-auto rounded-2xl shadow-elevated"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutPreview;

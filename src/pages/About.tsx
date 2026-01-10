import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageTransition from "@/components/PageTransition";
import coachImage from "@/assets/coach-about.jpg";

const About = () => {
  return (
    <PageTransition>
      <Navbar />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="section-padding bg-secondary/30">
          <div className="container-custom">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <span className="label-editorial text-primary mb-6 block">
                  <span className="inline-block w-8 h-px bg-primary/50 mr-3" />
                  About Coach Candice
                </span>
                <h1 className="font-display text-4xl md:text-5xl lg:text-6xl text-foreground mb-8 leading-[1.1]">
                  Meet Your{" "}
                  <span className="text-primary italic">Health Coach</span>
                </h1>
                
                <div className="space-y-6 font-body text-muted-foreground leading-relaxed">
                  <p>
                    Hi! My name is Candice James, also known as "Coach Candice." I am a licensed Health Coach Practitioner by the Institute of Integrative Nutrition. I am committed to seeing our community, particularly moms and women (often-times wearing so many other hats) and perhaps struggling to do their best "thrive" both on the plate and off the plate, holistically: mind, body and spirit.
                  </p>
                  <p>
                    Additionally, I am a wife, a mother, sister, friend and community advocate. My health journey has been complex. I have dealt with unexplained inflammation, poor gut health, acne, and miscarriages before I put in the work to heal myself. And I didn't do it alone.
                  </p>
                  <p>
                    And I am happy to report that I am feeling my best! I still take daily steps to ensure I stay on the path to wellness. As I am sure you have heard before, health is a journey, not a destination.
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="relative"
              >
                <motion.div 
                  className="absolute -inset-4 border border-primary/10 rounded-3xl"
                  animate={{ rotate: [0, 1, 0, -1, 0] }}
                  transition={{ duration: 8, repeat: Infinity }}
                />
                <img
                  src={coachImage}
                  alt="Coach Candice"
                  className="w-full max-w-lg mx-auto rounded-2xl shadow-elevated"
                />
              </motion.div>
            </div>
          </div>
        </section>

        {/* My Story Section */}
        <section className="section-padding bg-background">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center mb-12"
              >
                <span className="label-editorial text-primary mb-6 block">My Story</span>
                <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-foreground">
                  The <span className="text-primary italic">Journey</span>
                </h2>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="space-y-6 font-body text-muted-foreground leading-relaxed"
              >
                <p>
                  My journey stems from not only my personal health story but also as a result of seeing the lives of others, particularly my family members being impacted negatively; most of which was the result of a lack of wisdom and knowledge concerning how to be proactive in the area of health.
                </p>
                <p>
                  My mission is to help and empower my clients to overcome their most challenging obstacles and live healthier and happier lives. My goal is to encourage positive behavior change and guide individuals towards improving their lifestyle.
                </p>
                <p>
                  It is my intent to partner with you on your personal journey to "thrive" not just with diet but emotionally, spiritually, socially and physically, supporting and empowering individuals to reach their highest health potential.
                </p>
                <p className="text-foreground font-medium text-lg pt-4">
                  I look forward to meeting you — Let's Thrive Together!
                </p>
              </motion.div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </PageTransition>
  );
};

export default About;
